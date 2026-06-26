const express = require("express");
const router = express.Router();
const prisma = require("../prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "smartpos_secret_key";

// GET ALL USERS

router.get("/", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
      orderBy: { createdAt: "asc" },
    });
    res.json(users);
  } catch (error) {
    console.error("GET users error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// REGISTER NEW USER
// ─────────────────────────────────────
router.post("/register", async (req, res) => {
  try {
    console.log("Register request:", req.body);

    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "Name, email and password are required",
      });
    }

    const existing = await prisma.user.findUnique({
      where: { email },
    });

    if (existing) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: role || "cashier",
      },
    });

    const { password: _, ...userWithoutPassword } = user;

    res.json({
      message: "User created successfully",
      user: userWithoutPassword,
    });
  } catch (error) {
    console.error("REGISTER error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// LOGIN
// ─────────────────────────────────────
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, SECRET, {
      expiresIn: "8h",
    });

    res.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("LOGIN error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// UPDATE USER
// ─────────────────────────────────────
router.put("/:id", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const data = { name, email, role };

    if (password) {
      data.password = await bcrypt.hash(password, 10);
    }

    const user = await prisma.user.update({
      where: { id: parseInt(req.params.id) },
      data,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        createdAt: true,
      },
    });

    res.json({ message: "User updated", user });
  } catch (error) {
    console.error("UPDATE user error:", error);
    res.status(500).json({ error: error.message });
  }
});

// ─────────────────────────────────────
// DELETE USER
// ─────────────────────────────────────
router.delete("/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: parseInt(req.params.id) },
    });
    res.json({ message: "User deleted" });
  } catch (error) {
    console.error("DELETE user error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
