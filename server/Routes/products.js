const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// get all products
router.get("/", async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error("GET products error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ── STOCK ADJUSTMENT HISTORY ──

router.get("/adjustments/all", async (req, res) => {
  try {
    const adjustments = await prisma.stockAdjustment.findMany({
      include: { product: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(adjustments);
  } catch (error) {
    console.error("GET adjustments error:", error);
    res.status(500).json({ error: error.message });
  }
});

// get one product
router.get("/:id", async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    console.error("GET one product error:", error);
    res.status(500).json({ error: error.message });
  }
});

// add a new product

router.post("/", async (req, res) => {
  try {
    const { name, barcode, price, costPrice, stock, category } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Product name is required" });
    }
    if (!category || !category.trim()) {
      return res.status(400).json({ error: "Category is required" });
    }
    if (price == null || Number(price) <= 0) {
      return res.status(400).json({ error: "A valid price is required" });
    }

    const product = await prisma.product.create({
      data: {
        name: name.trim(),
        barcode: barcode || "",
        price: parseFloat(price),
        costPrice: parseFloat(costPrice) || 0,
        stock: parseInt(stock) || 0,
        category: category.trim(),
      },
    });

    res.json({ message: "Product added successfully", product });
  } catch (error) {
    console.error("CREATE product error:", error);
    res.status(500).json({ error: error.message });
  }
});

// update a product

router.put("/:id", async (req, res) => {
  try {
    const { name, barcode, price, category } = req.body;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Product name is required" });
    }
    if (!category || !category.trim()) {
      return res.status(400).json({ error: "Category is required" });
    }
    if (price == null || Number(price) <= 0) {
      return res.status(400).json({ error: "A valid price is required" });
    }

    const product = await prisma.product.update({
      where: { id: parseInt(req.params.id) },
      data: {
        name: name.trim(),
        barcode: barcode || "",
        price: parseFloat(price),
        category: category.trim(),
       
      },
    });
    res.json({ message: "Product updated successfully", product });
  } catch (error) {
    console.error("UPDATE product error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ── STOCK ADJUSTMENT ──

router.post("/:id/adjust-stock", async (req, res) => {
  try {
    const { change, reason } = req.body;
    const productId = parseInt(req.params.id);

    if (change == null || Number(change) === 0) {
      return res
        .status(400)
        .json({ error: "Please enter a non-zero adjustment amount" });
    }
    if (!reason || !reason.trim()) {
      return res
        .status(400)
        .json({ error: "A reason is required for stock adjustments" });
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const changeAmount = Number(change);
    const newStock = product.stock + changeAmount;

    if (newStock < 0) {
      return res.status(400).json({
        error: `This would make stock negative (currently ${product.stock}). Maximum reduction is ${product.stock}.`,
      });
    }

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data: { stock: newStock },
    });

    const adjustment = await prisma.stockAdjustment.create({
      data: {
        productId,
        change: changeAmount,
        reason: reason.trim(),
      },
    });

    res.json({
      message: "Stock adjusted successfully",
      product: updatedProduct,
      adjustment,
    });
  } catch (error) {
    console.error("STOCK ADJUSTMENT error:", error);
    res.status(500).json({ error: error.message });
  }
});

// delete a product
router.delete("/:id", async (req, res) => {
  try {
    await prisma.product.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("DELETE product error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
