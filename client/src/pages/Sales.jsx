// ─────────────────────────────────────
// IMPORTS
// ─────────────────────────────────────
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Sales.css";

function Sales() {
  // ─────────────────────────────────────
  // WHITEBOARDS
  // ─────────────────────────────────────

  const [sales, setSales] = useState([]);

  const [loading, setLoading] = useState(true);

  const [expandedSaleId, setExpandedSaleId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [period, setPeriod] = useState("today");

  // ── VOID SALE STATE ──

  const [voidingSale, setVoidingSale] = useState(null);

  const [voidReason, setVoidReason] = useState("");

  const [voidSubmitting, setVoidSubmitting] = useState(false);

  // ─────────────────────────────────────
  // FETCH SALES
  // ─────────────────────────────────────
  const fetchSales = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/sales");
      setSales([...res.data].reverse());
    } catch (error) {
      console.error("Error fetching sales:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  // VOID A SALE

  const handleVoidSale = async () => {
    if (!voidReason.trim()) {
      alert("Please enter a reason for cancelling this sale");
      return;
    }
    setVoidSubmitting(true);
    try {
      await axios.post(
        `http://localhost:5000/api/sales/${voidingSale.id}/void`,
        {
          reason: voidReason.trim(),
        },
      );
      setVoidingSale(null);
      setVoidReason("");
      fetchSales();
    } catch (error) {
      alert(error.response?.data?.error || "Failed to cancel sale");
    } finally {
      setVoidSubmitting(false);
    }
  };

  // ─────────────────────────────────────
  // GET START DATE
  // ─────────────────────────────────────
  const getStartDate = () => {
    const now = new Date();

    if (period === "today") {
      const start = new Date(now);
      start.setHours(0, 0, 0, 0);
      return start;
    }

    if (period === "week") {
      const start = new Date(now);
      const day = start.getDay();
      const diff = start.getDate() - day + (day === 0 ? -6 : 1);
      start.setDate(diff);
      start.setHours(0, 0, 0, 0);
      return start;
    }

    if (period === "month") {
      return new Date(now.getFullYear(), now.getMonth(), 1);
    }

    if (period === "year") {
      return new Date(now.getFullYear(), 0, 1);
    }

    return new Date("2000-01-01");
  };

  // FILTER SALES

  const startDate = getStartDate();

  const filteredSales = sales.filter((sale) => {
    const matchesPeriod = new Date(sale.createdAt) >= startDate;

    const matchesSearch =
      searchTerm === "" ||
      sale.id.toString().includes(searchTerm) ||
      (sale.user?.name || "").toLowerCase().includes(searchTerm.toLowerCase());

    return matchesPeriod && matchesSearch;
  });

  // CALCULATE STATS

  const activeSales = filteredSales.filter((s) => s.status !== "voided");

  const totalRevenue = activeSales.reduce((sum, sale) => {
    return sum + sale.total;
  }, 0);

  const totalItems = activeSales.reduce((sum, sale) => {
    return (
      sum +
      sale.items.reduce((itemSum, item) => {
        return itemSum + item.quantity;
      }, 0)
    );
  }, 0);

  const averageSale =
    activeSales.length > 0 ? totalRevenue / activeSales.length : 0;

  const totalProfit = activeSales.reduce((sum, sale) => {
    return (
      sum +
      sale.items.reduce((itemSum, item) => {
        const profit = (item.price - (item.costPrice || 0)) * item.quantity;
        return itemSum + profit;
      }, 0)
    );
  }, 0);

  // ─────────────────────────────────────
  // TOGGLE EXPANDED ROW
  // ─────────────────────────────────────
  const toggleExpand = (saleId) => {
    setExpandedSaleId(expandedSaleId === saleId ? null : saleId);
  };

  // ─────────────────────────────────────
  // FORMAT MONEY
  // ─────────────────────────────────────
  const fmt = (amount) => {
    return `KSh ${Number(amount || 0).toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  // ─────────────────────────────────────
  // FORMAT DATE
  // ─────────────────────────────────────
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString("en-KE", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  // ─────────────────────────────────────
  // TIME AGO
  // ─────────────────────────────────────
  const timeAgo = (dateString) => {
    const now = new Date();
    const date = new Date(dateString);
    const diff = now - date;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "Just now";
    if (minutes < 60) return `${minutes} min ago`;
    if (hours < 24) return `${hours} hr ago`;
    if (days < 7) return `${days} day${days > 1 ? "s" : ""} ago`;
    return formatDate(dateString);
  };

  // ─────────────────────────────────────
  // CALCULATE SALE PROFIT
  // ─────────────────────────────────────
  const getSaleProfit = (sale) => {
    return sale.items.reduce((sum, item) => {
      return sum + (item.price - (item.costPrice || 0)) * item.quantity;
    }, 0);
  };

  // ─────────────────────────────────────
  // PERIOD LABELS
  // ─────────────────────────────────────
  const periodLabels = {
    today: "Today",
    week: "This Week",
    month: "This Month",
    year: "This Year",
    all: "All Time",
  };

  // ─────────────────────────────────────
  // LOADING STATE
  // ─────────────────────────────────────
  if (loading) {
    return <div className="loading">⏳ Loading sales history...</div>;
  }

  // ─────────────────────────────────────
  // THE SALES SCREEN
  // ─────────────────────────────────────
  return (
    <div className="sales-page">
      {/* ── TOP BAR ── */}
      <div className="sales-topbar">
        <h1 className="sales-title">
          🧾 Sales History
          <span
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "#94a3b8",
              marginLeft: "8px",
            }}
          >
            ({filteredSales.length} sales)
          </span>
        </h1>
      </div>

      {/* ── STAT CARDS ── */}
      <div className="sales-stats">
        <div className="sales-stat-card">
          <div className="sales-stat-top">
            <span className="sales-stat-label">
              {periodLabels[period]} Revenue
            </span>
            <div className="sales-stat-icon green">💰</div>
          </div>
          <div className="sales-stat-value">{fmt(totalRevenue)}</div>
          <div className="sales-stat-sub">
            from {activeSales.length} active sales
          </div>
        </div>

        <div className="sales-stat-card">
          <div className="sales-stat-top">
            <span className="sales-stat-label">
              {periodLabels[period]} Sales
            </span>
            <div className="sales-stat-icon blue">🛒</div>
          </div>
          <div className="sales-stat-value">{activeSales.length}</div>
          <div className="sales-stat-sub">transactions</div>
        </div>

        <div className="sales-stat-card">
          <div className="sales-stat-top">
            <span className="sales-stat-label">Average Sale</span>
            <div className="sales-stat-icon orange">📊</div>
          </div>
          <div className="sales-stat-value">{fmt(averageSale)}</div>
          <div className="sales-stat-sub">per transaction</div>
        </div>

        <div className="sales-stat-card">
          <div className="sales-stat-top">
            <span className="sales-stat-label">
              {periodLabels[period]} Gross Profit
            </span>
            <div className="sales-stat-icon purple">📈</div>
          </div>
          <div
            className="sales-stat-value"
            style={{ color: totalProfit >= 0 ? "#16a34a" : "#dc2626" }}
          >
            {fmt(totalProfit)}
          </div>
          <div className="sales-stat-sub">after cost of goods</div>
        </div>
      </div>

      {/* ── FILTERS ── */}
      <div className="sales-filters">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search by sale # or cashier..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#94a3b8",
              }}
            >
              ✕
            </button>
          )}
        </div>

        <div className="filter-divider" />

        <div className="period-filters">
          {["today", "week", "month", "year", "all"].map((p) => (
            <button
              key={p}
              className={`period-btn ${period === p ? "active" : ""}`}
              onClick={() => setPeriod(p)}
            >
              {p === "all"
                ? "All Time"
                : p.charAt(0).toUpperCase() + p.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── SALES TABLE ── */}
      <div className="sales-table-card">
        <table className="sales-table">
          <thead>
            <tr>
              <th>Sale #</th>
              <th>Cashier</th>
              <th>Date & Time</th>
              <th>Items</th>
              <th>Total</th>
              <th>Gross Profit</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {filteredSales.length === 0 ? (
              <tr>
                <td colSpan="7">
                  <div className="table-empty">
                    <div className="table-empty-icon">🧾</div>
                    <p style={{ fontWeight: 600 }}>No sales found</p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "#94a3b8",
                        marginTop: "4px",
                      }}
                    >
                      {period !== "all"
                        ? `No sales recorded ${periodLabels[period].toLowerCase()}`
                        : "No sales recorded yet"}
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              filteredSales.map((sale) => {
                const isExpanded = expandedSaleId === sale.id;
                const saleProfit = getSaleProfit(sale);
                const itemCount = sale.items.reduce(
                  (sum, item) => sum + item.quantity,
                  0,
                );
                const isVoided = sale.status === "voided";

                return (
                  <>
                    {/* ── MAIN SALE ROW ── */}
                    <tr
                      key={sale.id}
                      className={`sale-row ${isExpanded ? "expanded" : ""} ${isVoided ? "voided-row" : ""}`}
                      onClick={() => toggleExpand(sale.id)}
                    >
                      {/* Sale number + voided badge */}
                      <td>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                          }}
                        >
                          <span className="sale-number">#{sale.id}</span>
                          {isVoided && (
                            <span
                              style={{
                                fontSize: "10px",
                                fontWeight: 700,
                                color: "#dc2626",
                                background: "#fee2e2",
                                padding: "2px 6px",
                                borderRadius: "4px",
                                letterSpacing: "0.5px",
                              }}
                            >
                              VOIDED
                            </span>
                          )}
                        </div>
                      </td>

                      {/* Cashier */}
                      <td>
                        <div className="cashier-name">
                          {sale.user?.name || "Unknown"}
                        </div>
                      </td>

                      {/* Date */}
                      <td>
                        <div style={{ fontSize: "13px", color: "#1e293b" }}>
                          {formatDate(sale.createdAt)}
                        </div>
                        <div className="sale-time">
                          {timeAgo(sale.createdAt)}
                        </div>
                      </td>

                      {/* Items */}
                      <td>
                        <span className="items-badge">
                          {itemCount} item{itemCount !== 1 ? "s" : ""}
                        </span>
                      </td>

                      {/* Total — strike through if voided */}
                      <td>
                        <span
                          className="sale-total"
                          style={
                            isVoided
                              ? {
                                  textDecoration: "line-through",
                                  color: "#94a3b8",
                                }
                              : {}
                          }
                        >
                          {fmt(sale.total)}
                        </span>
                      </td>

                      {/* Profit — dash if voided */}
                      <td>
                        {isVoided ? (
                          <span style={{ color: "#94a3b8", fontSize: "13px" }}>
                            —
                          </span>
                        ) : (
                          <span
                            style={{
                              fontWeight: 600,
                              color: saleProfit >= 0 ? "#16a34a" : "#dc2626",
                            }}
                          >
                            {fmt(saleProfit)}
                          </span>
                        )}
                      </td>

                      {/* Expand button */}
                      <td
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleExpand(sale.id);
                        }}
                      >
                        <button
                          className={`expand-btn ${isExpanded ? "open" : ""}`}
                        >
                          ▼
                        </button>
                      </td>
                    </tr>

                    {/* ── EXPANDED DETAIL ROW ── */}
                    {isExpanded && (
                      <tr className="expanded-row">
                        <td colSpan="7">
                          <div className="expanded-content">
                            <div className="expanded-title">
                              📦 Items in Sale #{sale.id}
                            </div>

                            {/* Item list */}
                            {sale.items?.map((item) => {
                              const wasDiscounted =
                                item.originalPrice &&
                                item.originalPrice !== item.price;

                              return (
                                <div key={item.id} className="expanded-item">
                                  <span className="expanded-item-name">
                                    {item.product?.name || "Unknown"}
                                    {wasDiscounted && (
                                      <span
                                        style={{
                                          marginLeft: "8px",
                                          fontSize: "10px",
                                          fontWeight: 700,
                                          color: "#ea580c",
                                          background: "#fff7ed",
                                          padding: "2px 6px",
                                          borderRadius: "10px",
                                        }}
                                      >
                                        DISCOUNTED
                                      </span>
                                    )}
                                  </span>

                                  <span className="expanded-item-qty">
                                    {item.quantity} ×{" "}
                                    {wasDiscounted ? (
                                      <>
                                        <span
                                          style={{
                                            textDecoration: "line-through",
                                            color: "#94a3b8",
                                            marginRight: "4px",
                                          }}
                                        >
                                          {fmt(item.originalPrice)}
                                        </span>
                                        <span
                                          style={{
                                            color: "#ea580c",
                                            fontWeight: 600,
                                          }}
                                        >
                                          {fmt(item.price)}
                                        </span>
                                      </>
                                    ) : (
                                      fmt(item.price)
                                    )}
                                  </span>

                                  <span className="expanded-item-total">
                                    {fmt(item.price * item.quantity)}
                                  </span>
                                </div>
                              );
                            })}

                            {/* Sale total */}
                            <div className="expanded-total">
                              <span className="expanded-total-label">
                                TOTAL
                              </span>
                              <span className="expanded-total-amount">
                                {fmt(sale.total)}
                              </span>
                            </div>

                            {/* Profit */}
                            {!isVoided && (
                              <div className="expanded-profit">
                                <span>Gross Profit on this sale:</span>
                                <span
                                  className="expanded-profit-amount"
                                  style={{
                                    color:
                                      saleProfit >= 0 ? "#16a34a" : "#dc2626",
                                  }}
                                >
                                  {fmt(saleProfit)}
                                </span>
                              </div>
                            )}

                            {/* Cashier info */}
                            <div
                              style={{
                                fontSize: "12px",
                                color: "#94a3b8",
                                marginTop: "8px",
                                textAlign: "right",
                              }}
                            >
                              Served by: {sale.user?.name || "Unknown"}
                              {" • "}
                              {formatDate(sale.createdAt)}
                            </div>

                            {/* ── VOID SECTION ── */}
                            {!isVoided ? (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setVoidingSale(sale);
                                }}
                                style={{
                                  marginTop: "12px",
                                  padding: "8px 16px",
                                  background: "#fee2e2",
                                  color: "#dc2626",
                                  border: "none",
                                  borderRadius: "6px",
                                  fontSize: "12px",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                }}
                              >
                                ❌ Cancel This Sale
                              </button>
                            ) : (
                              <div
                                style={{
                                  marginTop: "12px",
                                  padding: "10px",
                                  background: "#fee2e2",
                                  borderRadius: "6px",
                                  fontSize: "12px",
                                  color: "#dc2626",
                                }}
                              >
                                ⚠️ VOIDED — {sale.voidReason}
                                <br />
                                {new Date(sale.voidedAt).toLocaleString(
                                  "en-KE",
                                )}
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ── VOID CONFIRMATION MODAL ── */}
      {voidingSale && (
        <div
          className="modal-overlay"
          onClick={() => {
            setVoidingSale(null);
            setVoidReason("");
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              maxWidth: "400px",
              width: "100%",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: "16px",
                fontWeight: 700,
                color: "#1e293b",
                marginBottom: "8px",
              }}
            >
              ❌ Cancel Sale #{voidingSale.id}?
            </h3>

            <p
              style={{
                fontSize: "13px",
                color: "#64748b",
                marginBottom: "16px",
              }}
            >
              This will restore{" "}
              {voidingSale.items?.reduce((s, i) => s + i.quantity, 0)} item(s)
              back to stock. This action is logged and cannot be undone.
            </p>

            <textarea
              placeholder="Reason for cancelling (required)..."
              value={voidReason}
              onChange={(e) => setVoidReason(e.target.value)}
              rows="3"
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #e2e8f0",
                borderRadius: "8px",
                fontSize: "13px",
                marginBottom: "16px",
                boxSizing: "border-box",
                resize: "vertical",
                outline: "none",
                fontFamily: "inherit",
              }}
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => {
                  setVoidingSale(null);
                  setVoidReason("");
                }}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: "#f1f5f9",
                  color: "#64748b",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Keep Sale
              </button>

              <button
                onClick={handleVoidSale}
                disabled={voidSubmitting}
                style={{
                  flex: 1,
                  padding: "10px",
                  background: voidSubmitting ? "#fca5a5" : "#dc2626",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 600,
                  cursor: voidSubmitting ? "not-allowed" : "pointer",
                  fontSize: "14px",
                  transition: "background 0.2s",
                }}
              >
                {voidSubmitting ? "Cancelling..." : "Confirm Cancel"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sales;
