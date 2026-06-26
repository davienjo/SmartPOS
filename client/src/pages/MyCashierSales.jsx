// Cashiers only see THEIR OWN sales
import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function MyCashierSales() {
  const [sales, setSales] = useState([]);
  const [loading, setLoading] = useState(true);

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const fetchSales = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/sales");
      // Filter to only THIS cashier's sales
      const mySales = res.data.filter((s) => s.userId === user.id);
      setSales([...mySales].reverse());
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, [user.id]);

  useEffect(() => {
    fetchSales();
  }, [fetchSales]);

  const fmt = (amount) =>
    `KSh ${Number(amount || 0).toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const todaySales = sales.filter((s) => new Date(s.createdAt) >= today);
  const todayTotal = todaySales.reduce((sum, s) => sum + s.total, 0);

  if (loading)
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "300px",
          color: "#64748b",
        }}
      >
        ⏳ Loading your sales...
      </div>
    );

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1
        style={{
          fontSize: "22px",
          fontWeight: 700,
          color: "#1e293b",
          marginBottom: "20px",
        }}
      >
        🧾 My Sales — {user.name}
      </h1>

      {/* Today's summary */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: "13px", color: "#64748b" }}>
            Today's Sales
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#16a34a",
              marginTop: "8px",
            }}
          >
            {fmt(todayTotal)}
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
            {todaySales.length} transactions
          </div>
        </div>
        <div
          style={{
            background: "#ffffff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ fontSize: "13px", color: "#64748b" }}>
            All Time Sales
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: "#2563eb",
              marginTop: "8px",
            }}
          >
            {fmt(sales.reduce((sum, s) => sum + s.total, 0))}
          </div>
          <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "4px" }}>
            {sales.length} total transactions
          </div>
        </div>
      </div>

      {/* Sales list */}
      <div
        style={{
          background: "#ffffff",
          borderRadius: "12px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          overflow: "hidden",
        }}
      >
        {sales.length === 0 ? (
          <div
            style={{ textAlign: "center", padding: "60px", color: "#94a3b8" }}
          >
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>🧾</div>
            <p>No sales yet. Go to POS to start selling!</p>
          </div>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f8fafc" }}>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#64748b",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Sale #
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#64748b",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Items
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#64748b",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Total
                </th>
                <th
                  style={{
                    padding: "12px 16px",
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#64748b",
                    textTransform: "uppercase",
                    borderBottom: "1px solid #e2e8f0",
                  }}
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {sales.slice(0, 50).map((sale) => (
                <tr key={sale.id} style={{ borderBottom: "1px solid #f1f5f9" }}>
                  <td
                    style={{
                      padding: "14px 16px",
                      fontWeight: 700,
                      color: "#2563eb",
                    }}
                  >
                    #{sale.id}
                  </td>
                  <td style={{ padding: "14px 16px", color: "#64748b" }}>
                    {sale.items?.reduce((sum, i) => sum + i.quantity, 0) || 0}{" "}
                    items
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      fontWeight: 700,
                      color: "#16a34a",
                    }}
                  >
                    {fmt(sale.total)}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      color: "#64748b",
                      fontSize: "13px",
                    }}
                  >
                    {new Date(sale.createdAt).toLocaleString("en-KE", {
                      day: "numeric",
                      month: "short",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default MyCashierSales;
