const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// ─────────────────────────────────────
// GET ALL PURCHASES
// ─────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const purchases = await prisma.purchase.findMany({
      include: {
        supplier: true,
        items: { include: { product: true } },
        payments: true,
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(purchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// CREATE A NEW PURCHASE
// ─────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    const { supplierId, referenceNo, carriageInwards, notes, items } = req.body;

    if (!supplierId) {
      return res.status(400).json({ error: "supplierId is required" });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "At least one item is required" });
    }
    for (const item of items) {
      if (!item.productId || !item.quantity || item.costPrice == null) {
        return res.status(400).json({
          error: "Each item needs productId, quantity and costPrice",
        });
      }
    }

    const itemsTotal = items.reduce((sum, item) => {
      return sum + Number(item.costPrice) * Number(item.quantity);
    }, 0);

    const totalAmount = itemsTotal + (Number(carriageInwards) || 0);

    const purchase = await prisma.purchase.create({
      data: {
        supplierId: Number(supplierId),
        referenceNo,
        carriageInwards: Number(carriageInwards) || 0,
        totalAmount,
        notes,
        items: {
          create: items.map((item) => ({
            productId: Number(item.productId),
            quantity: Number(item.quantity),
            costPrice: Number(item.costPrice),
          })),
        },
      },
      include: {
        items: { include: { product: true } },
        supplier: true,
      },
    });

    for (const item of items) {
      await prisma.product.update({
        where: { id: Number(item.productId) },
        data: {
          stock: { increment: Number(item.quantity) },

          costPrice: Number(item.costPrice),
        },
      });
    }

    res.json({ message: "Purchase recorded", purchase });
  } catch (error) {
    console.error("CREATE purchase error:", error);
    res.status(500).json({ error: error.message });
  }
});

router.post("/:id/pay", async (req, res) => {
  try {
    const { amount, method, notes } = req.body;
    const purchaseId = parseInt(req.params.id);

    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId },
      include: { payments: true },
    });

    if (!purchase) {
      return res.status(404).json({ error: "Purchase not found" });
    }

    const alreadyPaid = purchase.payments.reduce((sum, p) => sum + p.amount, 0);

    const newTotal = alreadyPaid + parseFloat(amount);
    const balance = purchase.totalAmount - newTotal;

    let paymentStatus = "unpaid";
    if (newTotal >= purchase.totalAmount) {
      paymentStatus = "paid";
    } else if (newTotal > 0) {
      paymentStatus = "partial";
    }

    const payment = await prisma.supplierPayment.create({
      data: {
        purchaseId,
        amount: parseFloat(amount),
        method: method || "cash",
        notes: notes || null,
      },
    });

    await prisma.purchase.update({
      where: { id: purchaseId },
      data: {
        amountPaid: newTotal,
        paymentStatus,
      },
    });

    res.json({
      message: "Payment recorded",
      payment,
      balance,
      paymentStatus,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET PAYMENT HISTORY for a purchase
router.get("/:id/payments", async (req, res) => {
  try {
    const payments = await prisma.supplierPayment.findMany({
      where: { purchaseId: parseInt(req.params.id) },
      orderBy: { createdAt: "desc" },
    });
    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE A PURCHASE

router.put("/:id", async (req, res) => {
  try {
    const purchaseId = parseInt(req.params.id);
    const { supplierId, referenceNo, carriageInwards, notes, items } = req.body;

    if (!supplierId) {
      return res.status(400).json({ error: "supplierId is required" });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return res.status(400).json({ error: "At least one item is required" });
    }
    for (const item of items) {
      if (!item.productId || !item.quantity || item.costPrice == null) {
        return res.status(400).json({
          error: "Each item needs productId, quantity and costPrice",
        });
      }
    }

    const existing = await prisma.purchase.findUnique({
      where: { id: purchaseId },
      include: { items: true, payments: true },
    });

    if (!existing) {
      return res.status(404).json({ error: "Purchase not found" });
    }

    if (existing.payments.length > 0) {
      return res.status(400).json({
        error:
          "Cannot edit a purchase that already has payments recorded. Use Return Outward instead if items need correcting.",
      });
    }

    // ── STEP 1: reverse the OLD stock effect ──

    for (const oldItem of existing.items) {
      await prisma.product.update({
        where: { id: oldItem.productId },
        data: { stock: { decrement: oldItem.quantity } },
      });
    }

    // ── STEP 2: delete old purchase items ──
    await prisma.purchaseItem.deleteMany({
      where: { purchaseId },
    });

    // ── STEP 3: calculate new total ──
    const itemsTotal = items.reduce((sum, item) => {
      return sum + Number(item.costPrice) * Number(item.quantity);
    }, 0);
    const totalAmount = itemsTotal + (Number(carriageInwards) || 0);

    // ── STEP 4: apply the update with new items ──
    const updatedPurchase = await prisma.purchase.update({
      where: { id: purchaseId },
      data: {
        supplierId: Number(supplierId),
        referenceNo,
        carriageInwards: Number(carriageInwards) || 0,
        totalAmount,
        notes,
        items: {
          create: items.map((item) => ({
            productId: Number(item.productId),
            quantity: Number(item.quantity),
            costPrice: Number(item.costPrice),
          })),
        },
      },
      include: {
        items: { include: { product: true } },
        supplier: true,
        payments: true,
      },
    });

    // ── STEP 5: apply the NEW stock effect ──
    for (const item of items) {
      await prisma.product.update({
        where: { id: Number(item.productId) },
        data: {
          stock: { increment: Number(item.quantity) },
          costPrice: Number(item.costPrice),
        },
      });
    }

    res.json({ message: "Purchase updated", purchase: updatedPurchase });
  } catch (error) {
    console.error("UPDATE purchase error:", error);
    res.status(500).json({ error: error.message });
  }
});

// DELETE A PURCHASE

router.delete("/:id", async (req, res) => {
  try {
    const purchaseId = parseInt(req.params.id);

    const existing = await prisma.purchase.findUnique({
      where: { id: purchaseId },
      include: { items: true, payments: true },
    });

    if (!existing) {
      return res.status(404).json({ error: "Purchase not found" });
    }

    if (existing.payments.length > 0) {
      return res.status(400).json({
        error:
          "Cannot delete a purchase that already has payments recorded. Use Return Outward instead.",
      });
    }

    // Reverse the stock this purchase added
    for (const item of existing.items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: { stock: { decrement: item.quantity } },
      });
    }

    // Delete items first (foreign key), then the purchase
    await prisma.purchaseItem.deleteMany({ where: { purchaseId } });
    await prisma.purchase.delete({ where: { id: purchaseId } });

    res.json({ message: "Purchase deleted and stock reversed" });
  } catch (error) {
    console.error("DELETE purchase error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
