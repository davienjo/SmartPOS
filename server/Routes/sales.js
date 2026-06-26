const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// ─────────────────────────────────────
// CREATE A NEW SALE
// ─────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const { userId, items, paymentMethod, cashAmount, mpesaAmount } = req.body;

    // ── VALIDATE ──
    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "Cart cannot be empty" });
    }

    const validMethods = ["cash", "mpesa", "split"];
    const method = validMethods.includes(paymentMethod)
      ? paymentMethod
      : "cash";

    const total = items.reduce((sum, item) => {
      return sum + Number(item.price) * Number(item.quantity);
    }, 0);

    let finalCash = 0;
    let finalMpesa = 0;

    if (method === "cash") {
      finalCash = total;
    } else if (method === "mpesa") {
      finalMpesa = total;
    } else if (method === "split") {
      finalCash = Number(cashAmount) || 0;
      finalMpesa = Number(mpesaAmount) || 0;

      const splitTotal = finalCash + finalMpesa;
      if (Math.abs(splitTotal - total) > 0.01) {
        return res.status(400).json({
          error: `Split amounts (${splitTotal}) don't match total (${total})`,
        });
      }
    }

    const sale = await prisma.sale.create({
      data: {
        total,
        userId: Number(userId),
        paymentMethod: method,
        cashAmount: finalCash,
        mpesaAmount: finalMpesa,
        items: {
          create: items.map((item) => ({
            productId: Number(item.productId),
            quantity: Number(item.quantity),
            price: Number(item.price),
            originalPrice: Number(item.originalPrice ?? item.price),
            
            costPrice: Number(item.costPrice) || 0,
          })),
        },
      },
      include: {
        items: { include: { product: true } },
        user: true,
      },
    });

    for (const item of items) {
      await prisma.product.update({
        where: { id: Number(item.productId) },
        data: {
          stock: { decrement: Number(item.quantity) },
        },
      });
    }

    res.json({ message: "Sale completed", sale });
  } catch (error) {
    console.error("CREATE sale error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// GET ALL SALES
// ─────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const sales = await prisma.sale.findMany({
      include: {
        items: { include: { product: true } },
        user: { select: { name: true, email: true } },
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(sales);
  } catch (error) {
    console.error("GET sales error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// GET ONE SALE (for receipt printing)
// ─────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const sale = await prisma.sale.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        items: { include: { product: true } },
        user: { select: { name: true, email: true } },
      },
    });

    if (!sale) {
      return res.status(404).json({ error: "Sale not found" });
    }

    res.json(sale);
  } catch (error) {
    console.error("GET one sale error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// VOID / CANCEL A SALE
// Restores stock, keeps the record for audit
// ─────────────────────────────────────
router.post("/:id/void", async (req, res) => {
  try {
    const { reason } = req.body;
    const saleId = parseInt(req.params.id);

    if (!reason || !reason.trim()) {
      return res
        .status(400)
        .json({ error: "A reason is required to cancel a sale" });
    }

    const sale = await prisma.sale.findUnique({
      where: { id: saleId },
      include: { items: true },
    });

    if (!sale) {
      return res.status(404).json({ error: "Sale not found" });
    }

    if (sale.status === "voided") {
      return res.status(400).json({ error: "This sale is already voided" });
    }

    for (const item of sale.items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: { increment: item.quantity },
        },
      });
    }

    const voidedSale = await prisma.sale.update({
      where: { id: saleId },
      data: {
        status: "voided",
        voidReason: reason.trim(),
        voidedAt: new Date(),
      },
      include: {
        items: { include: { product: true } },
        user: true,
      },
    });

    res.json({ message: "Sale voided and stock restored", sale: voidedSale });
  } catch (error) {
    console.error("VOID sale error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
