import { useState, useEffect, useCallback } from "react";
import axios from "axios";

function DangerZone() {
  const [counts, setCounts] = useState(null);
  const [loading, setLoading] = useState(true);

  // Which action is being confirmed: null, 'transactions', or 'full'
  const [confirmingAction, setConfirmingAction] = useState(null);
  const [confirmText, setConfirmText] = useState("");
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const fetchCounts = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/admin/data-counts",
      );
      setCounts(res.data);
    } catch (err) {
      console.error("Error fetching counts:", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCounts();
  }, [fetchCounts]);

  const requiredPhrase = confirmingAction === "full" ? "FULL RESET" : "RESET";

  const openConfirm = (action) => {
    setConfirmingAction(action);
    setConfirmText("");
    setError("");
  };

  const closeConfirm = () => {
    setConfirmingAction(null);
    setConfirmText("");
    setError("");
  };

  const handleConfirm = async () => {
    if (confirmText !== requiredPhrase) {
      setError(`Please type exactly "${requiredPhrase}" to continue`);
      return;
    }

    setProcessing(true);
    setError("");

    try {
      const endpoint =
        confirmingAction === "full"
          ? "/api/admin/reset-everything"
          : "/api/admin/reset-transactions";

      const res = await axios.post(`http://localhost:5000${endpoint}`, {
        confirmation: confirmText,
      });

      setSuccessMessage(res.data.message);
      closeConfirm();
      fetchCounts();

      // If it was a full reset, the current logged-in user
      // no longer exists in the database — force a fresh login
      if (confirmingAction === "full") {
        setTimeout(() => {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          window.location.href = "/login";
        }, 3000);
      }
    } catch (err) {
      console.error("Reset error:", err);
      setError(err.response?.data?.error || "Reset failed");
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
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
        ⏳ Loading...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: "24px" }}>
        <h1
          style={{
            fontSize: "24px",
            fontWeight: 700,
            color: "#dc2626",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          ⚠️ Danger Zone
        </h1>
        <p style={{ fontSize: "14px", color: "#64748b", marginTop: "4px" }}>
          These actions permanently delete data and cannot be undone. Use with
          extreme caution.
        </p>
      </div>

      {/* Success banner */}
      {successMessage && (
        <div
          style={{
            background: "#dcfce7",
            border: "1px solid #16a34a",
            borderRadius: "10px",
            padding: "14px 16px",
            marginBottom: "20px",
            fontSize: "13px",
            color: "#166534",
          }}
        >
          ✅ {successMessage}
        </div>
      )}

      {/* Current data summary */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            fontSize: "15px",
            fontWeight: 600,
            color: "#1e293b",
            marginBottom: "16px",
          }}
        >
          📊 What currently exists in your database
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "12px",
            fontSize: "13px",
          }}
        >
          {counts &&
            [
              ["Sales", counts.sales],
              ["Expenses", counts.expenses],
              ["Purchases", counts.purchases],
              ["Return Inwards", counts.returnInwards],
              ["Return Outwards", counts.returnOutwards],
              ["Stock Adjustments", counts.stockAdjustments],
              ["Products", counts.products],
              ["Suppliers", counts.suppliers],
              ["Users", counts.users],
            ].map(([label, value]) => (
              <div
                key={label}
                style={{
                  background: "#f8fafc",
                  borderRadius: "8px",
                  padding: "10px 12px",
                }}
              >
                <div style={{ color: "#64748b" }}>{label}</div>
                <div
                  style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    color: "#1e293b",
                  }}
                >
                  {value}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Option A — Reset Transactions Only */}
      <div
        style={{
          background: "#fff7ed",
          border: "2px solid #fed7aa",
          borderRadius: "12px",
          padding: "20px",
          marginBottom: "16px",
        }}
      >
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#ea580c",
            marginBottom: "6px",
          }}
        >
          🗑️ Reset Transactions Only
        </h3>
        <p style={{ fontSize: "13px", color: "#7c2d12", marginBottom: "12px" }}>
          Deletes all Sales, Expenses, Purchases, Returns, Payments and Stock
          Adjustments. <strong>Keeps</strong> your Products, Suppliers and
          Users. Product stock will be reset to 0 — record fresh opening stock
          afterwards.
        </p>
        <p style={{ fontSize: "12px", color: "#92400e", marginBottom: "12px" }}>
          Good for: starting a new financial year while keeping your product
          catalog.
        </p>
        <button
          onClick={() => openConfirm("transactions")}
          style={{
            padding: "10px 20px",
            background: "#ea580c",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Reset Transactions...
        </button>
      </div>

      {/* Option B — Full Factory Reset */}
      <div
        style={{
          background: "#fef2f2",
          border: "2px solid #fecaca",
          borderRadius: "12px",
          padding: "20px",
        }}
      >
        <h3
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#dc2626",
            marginBottom: "6px",
          }}
        >
          💣 Full Factory Reset
        </h3>
        <p style={{ fontSize: "13px", color: "#7f1d1d", marginBottom: "12px" }}>
          Deletes <strong>EVERYTHING</strong> — all transactions, Products,
          Suppliers, and Users. A single fresh admin account will be created
          automatically (admin@smartpos.com / admin123).
        </p>
        <p style={{ fontSize: "12px", color: "#991b1b", marginBottom: "12px" }}>
          Good for: wiping test/training data to start completely fresh.
        </p>
        <button
          onClick={() => openConfirm("full")}
          style={{
            padding: "10px 20px",
            background: "#dc2626",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "13px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Full Reset...
        </button>
      </div>

      {/* Confirmation Modal */}
      {confirmingAction && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "14px",
              padding: "28px",
              maxWidth: "420px",
              width: "100%",
            }}
          >
            <h3
              style={{
                fontSize: "17px",
                fontWeight: 700,
                color: "#dc2626",
                marginBottom: "10px",
              }}
            >
              ⚠️ Are you absolutely sure?
            </h3>
            <p
              style={{
                fontSize: "13px",
                color: "#64748b",
                marginBottom: "16px",
              }}
            >
              {confirmingAction === "full"
                ? "This will permanently delete ALL data including products, suppliers, and users. This cannot be undone."
                : "This will permanently delete all sales, expenses, purchases, and returns. Products and Users will be kept. This cannot be undone."}
            </p>

            {error && (
              <div
                style={{
                  background: "#fee2e2",
                  color: "#dc2626",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  marginBottom: "14px",
                }}
              >
                ⚠️ {error}
              </div>
            )}

            <label
              style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "#374151",
                display: "block",
                marginBottom: "6px",
              }}
            >
              Type <strong>{requiredPhrase}</strong> to confirm:
            </label>
            <input
              type="text"
              value={confirmText}
              onChange={(e) => setConfirmText(e.target.value)}
              placeholder={requiredPhrase}
              style={{
                width: "100%",
                padding: "10px 12px",
                border: "2px solid #fecaca",
                borderRadius: "8px",
                fontSize: "14px",
                marginBottom: "20px",
                boxSizing: "border-box",
                outline: "none",
              }}
              autoFocus
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={closeConfirm}
                disabled={processing}
                style={{
                  flex: 1,
                  padding: "11px",
                  background: "#f1f5f9",
                  color: "#64748b",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                disabled={processing || confirmText !== requiredPhrase}
                style={{
                  flex: 1,
                  padding: "11px",
                  background:
                    confirmText === requiredPhrase ? "#dc2626" : "#fca5a5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontWeight: 600,
                  cursor:
                    confirmText === requiredPhrase && !processing
                      ? "pointer"
                      : "not-allowed",
                  fontSize: "14px",
                }}
              >
                {processing ? "Processing..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DangerZone;
