const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",

    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "✅ SmartPOS Server is running!",
    time: new Date().toISOString(),
  });
});

// ─────────────────────────────────────
// ROUTES
// ─────────────────────────────────────
const userRoutes = require("./Routes/users");
const productRoutes = require("./Routes/products");
const saleRoutes = require("./Routes/sales");
const expenseRoutes = require("./Routes/expenses");
const purchaseRoutes = require("./Routes/purchases");
const supplierRoutes = require("./Routes/suppliers");
const returnRoutes = require("./Routes/returns");
const adminRoutes = require("./Routes/admin");

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/sales", saleRoutes);
app.use("/api/expenses", expenseRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/api/suppliers", supplierRoutes);
app.use("/api/returns", returnRoutes);
app.use("/api/admin", adminRoutes);

app.use((err, req, res, next) => {
  console.error("Server Error:", err);
  res.status(500).json({
    error: err.message || "Something went wrong on the server",
  });
});

// ─────────────────────────────────────
// START SERVER
// ─────────────────────────────────────
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`
  ✅ SmartPOS Server running!
  📡 URL: http://localhost:${PORT}
  🗄️  Database: SQLite (dev.db)
  `);
});
