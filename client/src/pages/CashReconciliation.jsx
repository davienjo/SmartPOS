import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./CashReconciliation.css";

function CashReconciliation() {
  // ─────────────────────────────────────
  // WHITEBOARDS
  // ─────────────────────────────────────
  const [sales, setSales] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [supplierPayments, setSupplierPayments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [cashCount, setCashCount] = useState("");

  const [mpesaCount, setMpesaCount] = useState("");

  const [openingFloat, setOpeningFloat] = useState("");

  const [bankDeposit, setBankDeposit] = useState("");

  // ─────────────────────────────────────
  // FETCH TODAY'S DATA
  // ─────────────────────────────────────
  const fetchData = useCallback(async () => {
    try {
      const [salesRes, expensesRes, purchasesRes] = await Promise.all([
        axios.get("http://localhost:5000/api/sales"),
        axios.get("http://localhost:5000/api/expenses"),
        axios.get("http://localhost:5000/api/purchases"),
      ]);
      setSales(salesRes.data);
      setExpenses(expensesRes.data);

      const allPayments = purchasesRes.data.flatMap((purchase) =>
        (purchase.payments || []).map((payment) => ({
          ...payment,
          supplierName: purchase.supplier?.name || "Unknown Supplier",
        })),
      );
      setSupplierPayments(allPayments);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // ─────────────────────────────────────
  // GET TODAY'S DATA ONLY
  // ─────────────────────────────────────
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  // Midnight today

  const todaySales = sales.filter((s) => new Date(s.createdAt) >= today);

  const todayExpenses = expenses.filter((e) => new Date(e.createdAt) >= today);

  const todaySupplierPayments = supplierPayments.filter(
    (p) => new Date(p.createdAt) >= today,
  );

  // Total sales revenue today
  const totalSales = todaySales.reduce((sum, s) => sum + s.total, 0);

  // Total expenses paid today
  const totalExpenses = todayExpenses.reduce((sum, e) => sum + e.amount, 0);

  const totalSupplierPaymentsToday = todaySupplierPayments.reduce(
    (sum, p) => sum + p.amount,
    0,
  );

  const float = parseFloat(openingFloat) || 0;

  const deposit = parseFloat(bankDeposit) || 0;

  const expectedInTill =
    float + totalSales - totalExpenses - totalSupplierPaymentsToday - deposit;

  // Actual money counted
  const actualCash = parseFloat(cashCount) || 0;
  const actualMpesa = parseFloat(mpesaCount) || 0;
  const totalActual = actualCash + actualMpesa;

  const difference = totalActual - expectedInTill;

  // ─────────────────────────────────────
  // FORMAT HELPERS
  // ─────────────────────────────────────
  const fmt = (amount) => {
    return `KSh ${Number(amount || 0).toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const today2 = new Date().toLocaleDateString("en-KE", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // ─────────────────────────────────────
  // DIFFERENCE STATUS
  // ─────────────────────────────────────
  const getDiffStatus = () => {
    if (difference === 0) return "balanced";
    if (difference > 0) return "over";
    return "short";
  };

  const getDiffLabel = () => {
    if (difference === 0) return "✅ Balanced!";
    if (difference > 0) return "📈 Overage (extra cash)";
    return "❌ Shortage (missing cash)";
  };

  // ─────────────────────────────────────
  // PRINT
  // ─────────────────────────────────────
  const handlePrint = () => {
    window.print();
  };

  // ─────────────────────────────────────
  // LOADING
  // ─────────────────────────────────────
  if (loading) {
    return <div className="loading">⏳ Loading...</div>;
  }

  // ─────────────────────────────────────
  // THE SCREEN
  // ─────────────────────────────────────
  return (
    <div className="reconciliation-page">
      {/* TITLE */}
      <div>
        <h1 className="reconciliation-title">💰 Daily Cash Reconciliation</h1>
        <p className="reconciliation-date">{today2}</p>
      </div>

      {/* SECTION 1 — SALES */}
      <div className="recon-card">
        <div className="recon-section-title">📊 Today's Trading Summary</div>

        <div className="recon-row">
          <span className="recon-label">Total Sales Revenue</span>
          <span className="recon-value positive">+ {fmt(totalSales)}</span>
        </div>

        <div className="recon-row">
          <span className="recon-label">Number of Transactions</span>
          <span className="recon-value blue">{todaySales.length} sales</span>
        </div>

        <div className="recon-row">
          <span className="recon-label">Total Expenses Paid</span>
          <span className="recon-value negative">- {fmt(totalExpenses)}</span>
        </div>

        <div className="recon-row subtotal">
          <span className="recon-label">Net Cash from Trading</span>
          <span className="recon-value positive">
            {fmt(totalSales - totalExpenses)}
          </span>
        </div>
      </div>

      <div className="recon-card">
        <div className="recon-section-title">
          🏭 Supplier Payments Made Today
        </div>

        {todaySupplierPayments.length === 0 ? (
          <p style={{ fontSize: "13px", color: "#94a3b8" }}>
            No supplier payments made today
          </p>
        ) : (
          todaySupplierPayments.map((payment) => (
            <div key={payment.id} className="recon-row">
              <span className="recon-label">
                {payment.supplierName}{" "}
                <span style={{ color: "#94a3b8", fontSize: "12px" }}>
                  ({payment.method})
                </span>
              </span>
              <span className="recon-value negative">
                - {fmt(payment.amount)}
              </span>
            </div>
          ))
        )}

        <div className="recon-row subtotal">
          <span className="recon-label">Total Paid to Suppliers Today</span>
          <span className="recon-value negative">
            - {fmt(totalSupplierPaymentsToday)}
          </span>
        </div>

        <p style={{ fontSize: "11px", color: "#94a3b8", marginTop: "8px" }}>
          ℹ️ Supplier payments reduce your till cash but do NOT affect Net
          Profit on the Dashboard — profit is counted when goods are sold, not
          when suppliers are paid.
        </p>
      </div>

      {/* SECTION 3 — OPENING FLOAT & BANK DEPOSIT */}
      <div className="recon-card">
        <div className="recon-section-title">🏦 Float & Bank Deposit</div>

        <div className="recon-input-row">
          <span className="recon-input-label">
            Cash in till at START of day (KSh)
          </span>
          <input
            className="recon-input"
            type="number"
            placeholder="0.00"
            value={openingFloat}
            onChange={(e) => setOpeningFloat(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        {/* NEW — bank deposit input */}
        <div className="recon-input-row">
          <span className="recon-input-label">Cash banked today (KSh)</span>
          <input
            className="recon-input"
            type="number"
            placeholder="0.00"
            value={bankDeposit}
            onChange={(e) => setBankDeposit(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>
        <p style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}>
          If you took cash from the till to the bank today, enter it here — it
          reduces the cash expected to remain in the till.
        </p>

        <div className="recon-divider" />

        <div className="recon-row subtotal">
          <span className="recon-label">Expected Cash in Till Now</span>
          <span className="recon-value blue">{fmt(expectedInTill)}</span>
        </div>

        <p
          style={{
            fontSize: "12px",
            color: "#94a3b8",
            marginTop: "8px",
          }}
        >
          Formula: Float ({fmt(float)}) + Sales ({fmt(totalSales)}) - Expenses (
          {fmt(totalExpenses)}) - Supplier Payments (
          {fmt(totalSupplierPaymentsToday)}) - Bank Deposit ({fmt(deposit)}) ={" "}
          {fmt(expectedInTill)}
        </p>
      </div>

      {/* SECTION 4 — ACTUAL COUNT */}
      <div className="recon-card">
        <div className="recon-section-title">💵 Actual Cash Count</div>
        <p
          style={{
            fontSize: "13px",
            color: "#64748b",
            marginBottom: "16px",
          }}
        >
          Count the actual money and enter below:
        </p>

        <div className="recon-input-row">
          <span className="recon-input-label">
            💵 Physical Cash in Till (KSh)
          </span>
          <input
            className="recon-input"
            type="number"
            placeholder="0.00"
            value={cashCount}
            onChange={(e) => setCashCount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="recon-input-row">
          <span className="recon-input-label">
            📱 MPESA Received Today (KSh)
          </span>
          <input
            className="recon-input"
            type="number"
            placeholder="0.00"
            value={mpesaCount}
            onChange={(e) => setMpesaCount(e.target.value)}
            min="0"
            step="0.01"
          />
        </div>

        <div className="recon-divider" />

        <div className="recon-row subtotal">
          <span className="recon-label">Total Actual (Cash + MPESA)</span>
          <span className="recon-value">{fmt(totalActual)}</span>
        </div>
      </div>

      {/* SECTION 5 — DIFFERENCE */}
      {(cashCount || mpesaCount) && (
        <div className={`recon-difference ${getDiffStatus()}`}>
          <div>
            <div className="recon-difference-label">{getDiffLabel()}</div>
            <div
              style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}
            >
              Expected: {fmt(expectedInTill)} | Actual: {fmt(totalActual)}
            </div>
          </div>
          <div
            className="recon-difference-amount"
            style={{
              color:
                difference === 0
                  ? "#16a34a"
                  : difference > 0
                    ? "#2563eb"
                    : "#dc2626",
            }}
          >
            {difference === 0 ? "✅ 0.00" : fmt(Math.abs(difference))}
          </div>
        </div>
      )}

      {/* PRINT BUTTON */}
      <button className="btn-print" onClick={handlePrint}>
        🖨️ Print / Save as PDF
      </button>
    </div>
  );
}

export default CashReconciliation;
