import { useState, useEffect } from "react";
import axios from "axios";
import "./Dashboard.css";

function Dashboard() {
  // ─────────────────────────────────────
  // WHITEBOARDS
  // ─────────────────────────────────────
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [purchases, setPurchases] = useState([]);
  const [returnInwards, setReturnInwards] = useState([]);
  const [returnOutwards, setReturnOutwards] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Which time period to show
  // 'today', 'week', 'month', 'year'
  const [period, setPeriod] = useState("today");

  const activeSales = sales.filter((s) => s.status !== "voided");

  // ─────────────────────────────────────
  // ALARM CLOCK
  // ─────────────────────────────────────
  useEffect(() => {
    fetchAllData();
  }, []);

  // ─────────────────────────────────────
  // FETCH ALL DATA
  // ─────────────────────────────────────
  const fetchAllData = async () => {
    try {
      
      const [
        salesRes,
        expensesRes,
        purchasesRes,
        returnInRes,
        returnOutRes,
        productsRes,
      ] = await Promise.all([
        axios.get("http://localhost:5000/api/sales"),
        axios.get("http://localhost:5000/api/expenses"),
        axios.get("http://localhost:5000/api/purchases"),
        axios.get("http://localhost:5000/api/returns/inwards"),
        axios.get("http://localhost:5000/api/returns/outwards"),
        axios.get("http://localhost:5000/api/products"),
      ]);

      setSales(salesRes.data);
      setExpenses(expensesRes.data);
      setPurchases(purchasesRes.data);
      setReturnInwards(returnInRes.data);
      setReturnOutwards(returnOutRes.data);
      setProducts(productsRes.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // ─────────────────────────────────────
  // GET START DATE based on period
  // ─────────────────────────────────────
  const getStartDate = () => {
    const now = new Date();

    if (period === "today") {
      // Start of today (midnight)
      const start = new Date(now);
      start.setHours(0, 0, 0, 0);
      return start;
    }

    if (period === "week") {
      // Start of this week (last Monday)
      const start = new Date(now);
      
      const day = start.getDay();
      const diff = start.getDate() - day + (day === 0 ? -6 : 1);
      start.setDate(diff);
      start.setHours(0, 0, 0, 0);
      return start;
    }

    if (period === "month") {
      // Start of this month (1st day)
      const start = new Date(now.getFullYear(), now.getMonth(), 1);
      
      return start;
    }

    if (period === "year") {
      // Start of this year (January 1st)
      const start = new Date(now.getFullYear(), 0, 1);
      // 0 = January
      return start;
    }
  };

  // ─────────────────────────────────────
  // FILTER DATA by period
  // ─────────────────────────────────────
  const startDate = getStartDate();

  // Helper function to filter any list by date
  const filterByPeriod = (list, dateField = "createdAt") => {
    return list.filter((item) => {
      return new Date(item[dateField]) >= startDate;
      
    });
  };

  // Filter each data set
  const periodSales = filterByPeriod(sales);
  const periodExpenses = filterByPeriod(expenses);
  const periodPurchases = filterByPeriod(purchases);
  const periodReturnIn = filterByPeriod(returnInwards);
  const periodReturnOut = filterByPeriod(returnOutwards);

  // ─────────────────────────────────────
  // CALCULATE TRADING ACCOUNT
  // This is the CPA formula!
  // ─────────────────────────────────────

  // 1. GROSS REVENUE — total sales
  const grossRevenue = periodSales.reduce((sum, sale) => {
    return sum + sale.total;
  }, 0);

 
  const totalReturnInwards = periodReturnIn.reduce((sum, ret) => {
    return sum + ret.totalAmount;
  }, 0);

  // 3. NET REVENUE = Gross Revenue - Return Inwards
  const netRevenue = grossRevenue - totalReturnInwards;

  // 4. PURCHASES — cost of buying stock
  const totalPurchases = periodPurchases.reduce((sum, purchase) => {
    return sum + purchase.totalAmount;
  }, 0);

  
  const totalCarriageInwards = periodPurchases.reduce((sum, purchase) => {
    return sum + purchase.carriageInwards;
  }, 0);

 
  const totalReturnOutwards = periodReturnOut.reduce((sum, ret) => {
    return sum + ret.totalAmount;
  }, 0);

  // 7. COST OF GOODS SOLD (COGS)

  const costOfGoodsSold = periodSales.reduce((sum, sale) => {
    
    return (
      sum +
      sale.items.reduce((itemSum, item) => {
        return itemSum + item.costPrice * item.quantity;
      }, 0)
    );
  }, 0);

 
  const grossProfit = netRevenue - costOfGoodsSold;

  // 9. OPERATING EXPENSES
  
  const totalExpenses = periodExpenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  // Separate carriage outwards from expenses
  const carriageOutwards = periodExpenses
    .filter((e) => e.category === "Carriage Outwards")
    .reduce((sum, e) => sum + e.amount, 0);

  // Other expenses (excluding carriage outwards)
  const otherExpenses = totalExpenses - carriageOutwards;

  // 10. NET PROFIT = Gross Profit - All Expenses
  const netProfit = grossProfit - totalExpenses;

  // ─────────────────────────────────────
  // QUICK STATS
  // ─────────────────────────────────────
  const totalTransactions = periodSales.length;
  const totalPurchaseTransactions = periodPurchases.length;

  // Low stock products (10 or less)
  const lowStockProducts = products.filter((p) => p.stock <= 10);

  // ─────────────────────────────────────
  // FORMAT HELPERS
  // ─────────────────────────────────────
  const fmt = (amount) => {
    // fmt = short for "format"
    const num = Number(amount) || 0;
    return `KSh ${num.toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      
    })}`;
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleString("en-KE", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // Period labels for display
  const periodLabels = {
    today: "Today's",
    week: "This Week's",
    month: "This Month's",
    year: "This Year's",
  };
  const periodLabel = periodLabels[period];

  // Today's date for display
  const todayDisplay = new Date().toLocaleDateString("en-KE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ─────────────────────────────────────
  // LOADING
  // ─────────────────────────────────────
  if (loading) {
    return <div className="loading">⏳ Loading dashboard...</div>;
  }

  // ─────────────────────────────────────
  // THE DASHBOARD UI
  // ─────────────────────────────────────
  return (
    <div className="dashboard">
      {/* ── HEADER + DATE FILTERS ── */}
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-title">📊 Dashboard</h1>
          <p className="dashboard-date">{todayDisplay}</p>
        </div>

        {/* Date filter buttons */}
        <div className="date-filters">
          {["today", "week", "month", "year"].map((p) => (
            <button
              key={p}
              className={`date-filter-btn ${period === p ? "active" : ""}`}
              onClick={() => setPeriod(p)}
            >
              {/* Capitalize first letter */}
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── QUICK STATS CARDS ── */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">{periodLabel} Revenue</span>
            <div className="stat-icon blue">💰</div>
          </div>
          <div className="stat-value">{fmt(netRevenue)}</div>
          <div className="stat-sub">{totalTransactions} sales</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">{periodLabel} Purchases</span>
            <div className="stat-icon orange">📦</div>
          </div>
          <div className="stat-value">{fmt(totalPurchases)}</div>
          <div className="stat-sub">
            {totalPurchaseTransactions} purchase orders
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">{periodLabel} Expenses</span>
            <div className="stat-icon red">💸</div>
          </div>
          <div className="stat-value">{fmt(totalExpenses)}</div>
          <div className="stat-sub">operating costs</div>
        </div>

        <div className="stat-card">
          <div className="stat-card-top">
            <span className="stat-label">{periodLabel} Net Profit</span>
            <div className="stat-icon green">📈</div>
          </div>
          <div
            className="stat-value"
            style={{ color: netProfit >= 0 ? "#16a34a" : "#dc2626" }}
          >
            {fmt(netProfit)}
          </div>
          <div className="stat-sub">
            {netProfit >= 0 ? "✅ Profit" : "❌ Loss"}
          </div>
        </div>
      </div>

      {/* ── TRADING ACCOUNT (CPA Style) ── */}
      <div className="trading-account">
        <div className="section-title">
          📋 Trading & Profit/Loss Account — {periodLabel.replace("'s", "")}{" "}
          Summary
        </div>

        <div className="trading-columns">
          {/* LEFT COLUMN — Revenue Side */}
          <div className="trading-col">
            <h3>📥 Income Side</h3>

            <div className="trading-row">
              <span className="trading-row-label">Gross Sales (Revenue)</span>
              <span className="trading-row-amount">{fmt(grossRevenue)}</span>
            </div>

            <div className="trading-row">
              <span className="trading-row-label">Less: Return Inwards</span>
              <span className="trading-row-amount negative">
                ({fmt(totalReturnInwards)})
              </span>
            </div>

            <div className="trading-row subtotal">
              <span className="trading-row-label">NET REVENUE</span>
              <span className="trading-row-amount">{fmt(netRevenue)}</span>
            </div>

            <div style={{ marginTop: "16px" }}>
              <h3>📊 Gross Profit Calculation</h3>
            </div>

            <div className="trading-row">
              <span className="trading-row-label">Net Revenue</span>
              <span className="trading-row-amount">{fmt(netRevenue)}</span>
            </div>

            <div className="trading-row">
              <span className="trading-row-label">
                Less: Cost of Goods Sold
              </span>
              <span className="trading-row-amount negative">
                ({fmt(costOfGoodsSold)})
              </span>
            </div>

            <div
              className={`trading-row ${grossProfit >= 0 ? "gross-profit" : "net-loss"}`}
            >
              <span className="trading-row-label">GROSS PROFIT</span>
              <span
                className={`trading-row-amount ${grossProfit >= 0 ? "positive" : "negative"}`}
              >
                {fmt(grossProfit)}
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN — Expenses Side */}
          <div className="trading-col">
            <h3>📤 Expenses Side</h3>

            <div className="trading-row">
              <span className="trading-row-label">Purchases</span>
              <span className="trading-row-amount negative">
                ({fmt(totalPurchases - totalCarriageInwards)})
              </span>
            </div>

            <div className="trading-row">
              <span className="trading-row-label">Add: Carriage Inwards</span>
              <span className="trading-row-amount negative">
                ({fmt(totalCarriageInwards)})
              </span>
            </div>

            <div className="trading-row">
              <span className="trading-row-label">Less: Return Outwards</span>
              <span className="trading-row-amount positive">
                {fmt(totalReturnOutwards)}
              </span>
            </div>

            <div className="trading-row subtotal">
              <span className="trading-row-label">NET PURCHASES</span>
              <span className="trading-row-amount negative">
                ({fmt(totalPurchases - totalReturnOutwards)})
              </span>
            </div>

            <div style={{ marginTop: "16px" }}>
              <h3>💼 Operating Expenses</h3>
            </div>

            {/* Show each expense category */}
            {Object.entries(
              periodExpenses.reduce((acc, expense) => {
               
                acc[expense.category] =
                  (acc[expense.category] || 0) + expense.amount;
                return acc;
              }, {}),
            ).map(([category, amount]) => (
              <div key={category} className="trading-row">
                <span className="trading-row-label">{category}</span>
                <span className="trading-row-amount negative">
                  ({fmt(amount)})
                </span>
              </div>
            ))}

            <div className="trading-row subtotal">
              <span className="trading-row-label">TOTAL EXPENSES</span>
              <span className="trading-row-amount negative">
                ({fmt(totalExpenses)})
              </span>
            </div>

            {/* NET PROFIT/LOSS */}
            <div
              className={`trading-row ${netProfit >= 0 ? "net-profit" : "net-loss"}`}
            >
              <span className="trading-row-label">
                {netProfit >= 0 ? "✅ NET PROFIT" : "❌ NET LOSS"}
              </span>
              <span
                className={`trading-row-amount ${netProfit >= 0 ? "positive" : "negative"}`}
              >
                {fmt(Math.abs(netProfit))}
               
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM SECTIONS ── */}
      <div className="dashboard-bottom">
        {/* Low Stock Alert */}
        <div className="card">
          <h2 className="card-title">
            📦 Low Stock Alert ({lowStockProducts.length})
          </h2>
          {lowStockProducts.length === 0 ? (
            <div className="empty-state">✅ All products well stocked!</div>
          ) : (
            lowStockProducts.map((product) => (
              <div key={product.id} className="stock-item">
                <div>
                  <div className="stock-name">{product.name}</div>
                  <div className="stock-category">{product.category}</div>
                </div>
                <span
                  className={`stock-badge ${product.stock < 5 ? "critical" : "low"}`}
                >
                  {product.stock} left
                </span>
              </div>
            ))
          )}
        </div>

        {/* Recent Sales */}
        <div className="card">
          <h2 className="card-title">🧾 Recent Sales</h2>
          {periodSales.length === 0 ? (
            <div className="empty-state">No sales in this period</div>
          ) : (
            [...periodSales]
              .reverse()
              .slice(0, 6)
              .map((sale) => (
                <div key={sale.id} className="sale-item">
                  <div>
                    <div className="sale-number">Sale #{sale.id}</div>
                    <div className="sale-meta">
                      {sale.user?.name || "Unknown"} •{" "}
                      {formatDate(sale.createdAt)}
                    </div>
                  </div>
                  <span className="sale-total">{fmt(sale.total)}</span>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
