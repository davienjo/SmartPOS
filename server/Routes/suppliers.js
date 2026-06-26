const express = require("express");
const router = express.Router();
const prisma = require("../prisma");

// GET ALL SUPPLIERS
router.get("/", async (req, res) => {
  try {
    const suppliers = await prisma.supplier.findMany({
      orderBy: { name: "asc" },
      
    });
    res.json(suppliers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ADD A SUPPLIER
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;

    if (!name) {
      return res.status(400).json({ error: "Supplier name is required" });
    }

    const supplier = await prisma.supplier.create({
      data: { name, phone, email, address },
    });

    res.json({ message: "Supplier added", supplier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// UPDATE A SUPPLIER
router.put("/:id", async (req, res) => {
  try {
    const { name, phone, email, address } = req.body;
    const supplier = await prisma.supplier.update({
      where: { id: parseInt(req.params.id) },
      data: { name, phone, email, address },
    });
    res.json({ message: "Supplier updated", supplier });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE A SUPPLIER
router.delete("/:id", async (req, res) => {
  try {
    await prisma.supplier.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "Supplier deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
