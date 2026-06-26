const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// ─────────────────────────────────────
// GET ALL EXPENSES
// ─────────────────────────────────────
router.get("/", async (req, res) => {
  try {
    const expenses = await prisma.expense.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.json(expenses);
  } catch (error) {
    console.error("GET expenses error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// GET SUMMARY TOTALS BY CATEGORY
// Must come BEFORE /:id route!
// ─────────────────────────────────────
router.get("/summary/totals", async (req, res) => {
  try {
    const summary = await prisma.expense.groupBy({
      by: ["category"],
      _sum: { amount: true },
      orderBy: { _sum: { amount: "desc" } },
    });

    const grandTotal = summary.reduce((sum, item) => {
      return sum + (item._sum.amount || 0);
    }, 0);

    res.json({ summary, grandTotal });
  } catch (error) {
    console.error("GET summary error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// GET EXPENSES BY CATEGORY
// ─────────────────────────────────────
router.get("/category/:category", async (req, res) => {
  try {
    const expenses = await prisma.expense.findMany({
      where: { category: req.params.category },
      orderBy: { createdAt: "desc" },
    });
    res.json(expenses);
  } catch (error) {
    console.error("GET by category error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// GET ONE EXPENSE BY ID
// ─────────────────────────────────────
router.get("/:id", async (req, res) => {
  try {
    const expense = await prisma.expense.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }

    res.json(expense);
  } catch (error) {
    console.error("GET one expense error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// CREATE EXPENSE
// ─────────────────────────────────────
router.post("/", async (req, res) => {
  try {
    console.log("Creating expense:", req.body);
    // This log helps us see what data arrives

    const { title, category, amount, description } = req.body;

    
    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    if (!amount) {
      return res.status(400).json({ error: "Amount is required" });
    }

    const expense = await prisma.expense.create({
      data: {
        title: String(title).trim(),
        category: String(category || "General").trim(),
        amount: parseFloat(amount),
        description: description ? String(description).trim() : null,
      },
    });

    console.log("Expense created:", expense);
    res.json({ message: "Expense added successfully", expense });
  } catch (error) {
    console.error("CREATE expense error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// UPDATE EXPENSE
// ─────────────────────────────────────
router.put("/:id", async (req, res) => {
  try {
    const { title, category, amount, description } = req.body;

    const existing = await prisma.expense.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Expense not found" });
    }

    const expense = await prisma.expense.update({
      where: { id: parseInt(req.params.id) },
      data: {
        title: String(title).trim(),
        category: String(category || "General").trim(),
        amount: parseFloat(amount),
        description: description ? String(description).trim() : null,
      },
    });

    res.json({ message: "Expense updated successfully", expense });
  } catch (error) {
    console.error("UPDATE expense error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// DELETE EXPENSE
// ─────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    const existing = await prisma.expense.findUnique({
      where: { id: parseInt(req.params.id) },
    });

    if (!existing) {
      return res.status(404).json({ error: "Expense not found" });
    }

    await prisma.expense.delete({
      where: { id: parseInt(req.params.id) },
    });

    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    console.error("DELETE expense error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
