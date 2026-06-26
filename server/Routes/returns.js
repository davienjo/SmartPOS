const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// ─────────────────────────────────────
// RETURN INWARDS
// Customer returns product to us
// ─────────────────────────────────────

// GET ALL RETURN INWARDS
router.get("/inwards", async (req, res) => {
  try {
    const returns = await prisma.returnInward.findMany({
      include: {
        items: { include: { product: true } },
        sale: true,
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(returns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE RETURN INWARD
router.post("/inwards", async (req, res) => {
  try {
    const { saleId, reason, items } = req.body;

    const totalAmount = items.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    const returnInward = await prisma.returnInward.create({
      data: {
        saleId: saleId || null,
        reason,
        totalAmount,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
      include: {
        items: { include: { product: true } },
      },
    });

    for (const item of items) {
      await prisma.product.update({
        where: { id: item.productId },
        data: {
          stock: { increment: item.quantity },
        },
      });
    }

    res.json({ message: "Return inward recorded", returnInward });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET ALL RETURN OUTWARDS
router.get("/outwards", async (req, res) => {
  try {
    const returns = await prisma.returnOutward.findMany({
      include: {
        items: { include: { product: true } },
        supplier: true,
        purchase: true,
      },
      orderBy: { createdAt: "desc" },
    });
    res.json(returns);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CREATE RETURN OUTWARD
router.post("/outwards", async (req, res) => {
  try {
    const { supplierId, purchaseId, reason, items } = req.body;

    const totalAmount = items.reduce((sum, item) => {
      return sum + item.costPrice * item.quantity;
    }, 0);

    const returnOutward = await prisma.returnOutward.create({
      data: {
        supplierId,
        purchaseId: purchaseId || null,
        reason,
        totalAmount,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            costPrice: item.costPrice,
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
        where: { id: item.productId },
        data: {
          stock: { decrement: item.quantity },
        },
      });
    }

    res.json({ message: "Return outward recorded", returnOutward });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
