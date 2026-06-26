const express = require("express");
const router = express.Router();
const prisma = require("../prisma");
const bcrypt = require("bcryptjs");

// ─────────────────────────────────────
// GET DATA COUNTS
// Shows the admin exactly what exists right now,
// so they can see what they're about to delete
// BEFORE confirming anything
// ─────────────────────────────────────
router.get("/data-counts", async (req, res) => {
  try {
    const [
      sales,
      expenses,
      purchases,
      returnInwards,
      returnOutwards,
      products,
      suppliers,
      users,
      stockAdjustments,
    ] = await Promise.all([
      prisma.sale.count(),
      prisma.expense.count(),
      prisma.purchase.count(),
      prisma.returnInward.count(),
      prisma.returnOutward.count(),
      prisma.product.count(),
      prisma.supplier.count(),
      prisma.user.count(),
      prisma.stockAdjustment.count(),
    ]);

    res.json({
      sales,
      expenses,
      purchases,
      returnInwards,
      returnOutwards,
      products,
      suppliers,
      users,
      stockAdjustments,
    });
  } catch (error) {
    console.error("GET data counts error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// RESET TRANSACTIONS ONLY
// Clears all activity (sales, expenses, purchases,
// returns, payments, stock adjustments) but KEEPS
// Products, Suppliers, and Users intact.
//
// Also resets every product's stock back to 0, since
// stock numbers only make sense in the context of the
// purchase/sale history that built them up — once that
// history is gone, the stock count would be meaningless
// and misleading if left as-is.
// ─────────────────────────────────────
router.post("/reset-transactions", async (req, res) => {
  try {
    const { confirmation } = req.body;

    if (confirmation !== "RESET") {
      return res.status(400).json({
        error: 'You must type exactly "RESET" to confirm this action',
      });
    }

    // Delete in dependency order — children before parents
    await prisma.returnOutwardItem.deleteMany();
    await prisma.returnInwardItem.deleteMany();
    await prisma.returnOutward.deleteMany();
    await prisma.returnInward.deleteMany();
    await prisma.supplierPayment.deleteMany();
    await prisma.purchaseItem.deleteMany();
    await prisma.purchase.deleteMany();
    await prisma.saleItem.deleteMany();
    await prisma.sale.deleteMany();
    await prisma.expense.deleteMany();
    await prisma.stockAdjustment.deleteMany();

    // Reset all product stock to 0 — the purchase/sale
    // history that justified any stock number is now gone
    await prisma.product.updateMany({
      data: { stock: 0 },
    });

    res.json({
      message:
        "All transactions cleared. Products, Suppliers and Users were kept. Product stock has been reset to 0 — please record fresh opening stock via Purchases or Stock Adjustment.",
    });
  } catch (error) {
    console.error("RESET transactions error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// FULL FACTORY RESET
// Clears EVERYTHING, including Products, Suppliers
// and all Users — then re-creates a single admin
// account so the owner can never be locked out.
// ─────────────────────────────────────
router.post("/reset-everything", async (req, res) => {
  try {
    const { confirmation } = req.body;

    if (confirmation !== "FULL RESET") {
      return res.status(400).json({
        error: 'You must type exactly "FULL RESET" to confirm this action',
      });
    }

    await prisma.returnOutwardItem.deleteMany();
    await prisma.returnInwardItem.deleteMany();
    await prisma.returnOutward.deleteMany();
    await prisma.returnInward.deleteMany();
    await prisma.supplierPayment.deleteMany();
    await prisma.purchaseItem.deleteMany();
    await prisma.purchase.deleteMany();
    await prisma.saleItem.deleteMany();
    await prisma.sale.deleteMany();
    await prisma.expense.deleteMany();
    await prisma.stockAdjustment.deleteMany();
    await prisma.product.deleteMany();
    await prisma.supplier.deleteMany();
    await prisma.user.deleteMany();

    // Re-create a single admin account so the app
    // is never left in a state nobody can log into
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await prisma.user.create({
      data: {
        name: "Shop Owner",
        email: "admin@smartpos.com",
        password: hashedPassword,
        role: "admin",
      },
    });

    res.json({
      message:
        "Full reset complete. A fresh admin account was created — login with admin@smartpos.com / admin123 and change the password immediately.",
    });
  } catch (error) {
    console.error("FULL RESET error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
