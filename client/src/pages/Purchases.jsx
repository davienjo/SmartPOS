import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Purchases.css";

function Purchases() {
  // ─────────────────────────────────────
  // WHITEBOARDS
  // ─────────────────────────────────────
  const [purchases, setPurchases] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [period, setPeriod] = useState("month");
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [editingPurchase, setEditingPurchase] = useState(null);

  // Purchase form data
  const [formData, setFormData] = useState({
    supplierId: "",
    referenceNo: "",
    carriageInwards: "0",
    notes: "",
  });

  // Items in the purchase
  const [purchaseItems, setPurchaseItems] = useState([
    { productId: "", quantity: "", costPrice: "" },
  ]);

  // ── PAYMENT MODAL STATE ──
  const [showPaymentModal, setShowPaymentModal] = useState(null);

  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [paymentNotes, setPaymentNotes] = useState("");
  const [payingNow, setPayingNow] = useState(false);
  const [paymentError, setPaymentError] = useState("");

  // ─────────────────────────────────────
  // FETCH ALL DATA
  // ─────────────────────────────────────
  const fetchData = useCallback(async () => {
    try {
      const [purchasesRes, suppliersRes, productsRes] = await Promise.all([
        axios.get("http://localhost:5000/api/purchases"),
        axios.get("http://localhost:5000/api/suppliers"),
        axios.get("http://localhost:5000/api/products"),
      ]);
      setPurchases([...purchasesRes.data].reverse());
      setSuppliers(suppliersRes.data);
      setProducts(productsRes.data);
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
  // GET START DATE
  // ─────────────────────────────────────
  const getStartDate = () => {
    const now = new Date();
    if (period === "today") {
      const s = new Date(now);
      s.setHours(0, 0, 0, 0);
      return s;
    }
    if (period === "week") {
      const s = new Date(now);
      const day = s.getDay();
      s.setDate(s.getDate() - day + (day === 0 ? -6 : 1));
      s.setHours(0, 0, 0, 0);
      return s;
    }
    if (period === "month") {
      return new Date(now.getFullYear(), now.getMonth(), 1);
    }
    if (period === "year") {
      return new Date(now.getFullYear(), 0, 1);
    }
    return new Date("2000-01-01");
  };

  // ─────────────────────────────────────
  // FILTER PURCHASES
  // ─────────────────────────────────────
  const startDate = getStartDate();

  const filteredPurchases = purchases.filter((purchase) => {
    const matchesPeriod = new Date(purchase.createdAt) >= startDate;
    const matchesSearch =
      searchTerm === "" ||
      purchase.id.toString().includes(searchTerm) ||
      (purchase.supplier?.name || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      (purchase.referenceNo || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    return matchesPeriod && matchesSearch;
  });

  // ─────────────────────────────────────
  // STATS
  // ─────────────────────────────────────
  const totalPurchases = filteredPurchases.reduce(
    (sum, p) => sum + p.totalAmount,
    0,
  );

  const totalCarriage = filteredPurchases.reduce(
    (sum, p) => sum + p.carriageInwards,
    0,
  );

  const totalOutstanding = filteredPurchases.reduce(
    (sum, p) => sum + (p.totalAmount - (p.amountPaid || 0)),
    0,
  );

  // ─────────────────────────────────────
  // GET BALANCE OWED on a purchase
  // ─────────────────────────────────────
  const getBalance = (purchase) => {
    return purchase.totalAmount - (purchase.amountPaid || 0);
  };

  // ─────────────────────────────────────
  // GET PAYMENT STATUS BADGE INFO
  // ─────────────────────────────────────
  const getPaymentBadge = (purchase) => {
    const status = purchase.paymentStatus || "unpaid";
    if (status === "paid") {
      return { label: "✅ Paid", bg: "#dcfce7", color: "#16a34a" };
    }
    if (status === "partial") {
      return { label: "⚠️ Partial", bg: "#fff7ed", color: "#ea580c" };
    }
    return { label: "❌ Unpaid", bg: "#fee2e2", color: "#dc2626" };
  };

  // ─────────────────────────────────────
  // CALCULATE PURCHASE TOTAL
  // from current form items
  // ─────────────────────────────────────
  const calculateTotal = () => {
    const itemsTotal = purchaseItems.reduce((sum, item) => {
      const qty = parseFloat(item.quantity) || 0;
      const cost = parseFloat(item.costPrice) || 0;
      return sum + qty * cost;
    }, 0);
    const carriage = parseFloat(formData.carriageInwards) || 0;
    return itemsTotal + carriage;
  };

  // ─────────────────────────────────────
  // HANDLE FORM CHANGE
  // ─────────────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError("");
  };

  // ─────────────────────────────────────
  // HANDLE ITEM CHANGE
  // ─────────────────────────────────────
  const handleItemChange = (index, field, value) => {
    const updated = purchaseItems.map((item, i) =>
      i === index ? { ...item, [field]: value } : item,
    );
    setPurchaseItems(updated);

    // Auto-fill cost price when product is selected
    if (field === "productId" && value) {
      const product = products.find((p) => p.id === parseInt(value));
      if (product) {
        const withCost = updated.map((item, i) =>
          i === index
            ? { ...item, costPrice: product.costPrice.toString() }
            : item,
        );
        setPurchaseItems(withCost);
      }
    }
  };

  // ─────────────────────────────────────
  // ADD / REMOVE ITEM ROW
  // ─────────────────────────────────────
  const addItemRow = () => {
    setPurchaseItems([
      ...purchaseItems,
      { productId: "", quantity: "", costPrice: "" },
    ]);
  };

  const removeItemRow = (index) => {
    if (purchaseItems.length === 1) return;
    setPurchaseItems(purchaseItems.filter((_, i) => i !== index));
  };

  // ─────────────────────────────────────
  // OPEN ADD MODAL
  // ─────────────────────────────────────

  const openModal = (purchase = null) => {
    if (purchase) {
      // EDIT MODE
      setEditingPurchase(purchase);
      setFormData({
        supplierId: purchase.supplierId.toString(),
        referenceNo: purchase.referenceNo || "",
        carriageInwards: purchase.carriageInwards.toString(),
        notes: purchase.notes || "",
      });
      setPurchaseItems(
        purchase.items.map((item) => ({
          productId: item.productId.toString(),
          quantity: item.quantity.toString(),
          costPrice: item.costPrice.toString(),
        })),
      );
    } else {
      // ADD MODE
      setEditingPurchase(null);
      setFormData({
        supplierId: suppliers.length > 0 ? suppliers[0].id.toString() : "",
        referenceNo: "",
        carriageInwards: "0",
        notes: "",
      });
      setPurchaseItems([{ productId: "", quantity: "", costPrice: "" }]);
    }
    setFormError("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingPurchase(null);
    setFormError("");
  };

  // ─────────────────────────────────────
  // VALIDATE
  // ─────────────────────────────────────
  const validateForm = () => {
    if (!formData.supplierId) {
      setFormError("Please select a supplier");
      return false;
    }

    for (let i = 0; i < purchaseItems.length; i++) {
      const item = purchaseItems[i];
      if (!item.productId) {
        setFormError(`Please select a product for item ${i + 1}`);
        return false;
      }
      if (!item.quantity || parseInt(item.quantity) <= 0) {
        setFormError(`Please enter quantity for item ${i + 1}`);
        return false;
      }
      if (!item.costPrice || parseFloat(item.costPrice) < 0) {
        setFormError(`Please enter cost price for item ${i + 1}`);
        return false;
      }
    }

    return true;
  };

  // ─────────────────────────────────────
  // SAVE PURCHASE
  // ─────────────────────────────────────

  const handleSave = async () => {
    if (!validateForm()) return;
    setSaving(true);

    try {
      const data = {
        supplierId: parseInt(formData.supplierId),
        referenceNo: formData.referenceNo.trim() || null,
        carriageInwards: parseFloat(formData.carriageInwards) || 0,
        notes: formData.notes.trim() || null,
        items: purchaseItems.map((item) => ({
          productId: parseInt(item.productId),
          quantity: parseInt(item.quantity),
          costPrice: parseFloat(item.costPrice),
        })),
      };

      if (editingPurchase) {
        await axios.put(
          `http://localhost:5000/api/purchases/${editingPurchase.id}`,
          data,
        );
      } else {
        await axios.post("http://localhost:5000/api/purchases", data);
      }

      closeModal();
      fetchData();
    } catch (error) {
      console.error("Save purchase error:", error);
      setFormError(error.response?.data?.error || "Failed to save purchase");
    } finally {
      setSaving(false);
    }
  };

  // HANDLE DELETE FUNCTION

  const handleDeletePurchase = async (purchase) => {
    if ((purchase.payments?.length || 0) > 0) {
      alert(
        "This purchase already has payments recorded and cannot be deleted. " +
          "Use Return Outward instead if items need to be corrected.",
      );
      return;
    }

    const confirmed = window.confirm(
      `Delete Purchase #${purchase.id} from ${purchase.supplier?.name}?\n\n` +
        `This will REMOVE ${purchase.items?.reduce((s, i) => s + i.quantity, 0)} units from stock.\n\n` +
        `This cannot be undone!`,
    );
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/purchases/${purchase.id}`);
      fetchData();
    } catch (error) {
      alert(error.response?.data?.error || "Failed to delete purchase");
    }
  };

  // ─────────────────────────────────────
  // TOGGLE EXPANDED ROW
  // ─────────────────────────────────────
  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  // ─────────────────────────────────────
  // PAYMENT MODAL FUNCTIONS
  // ─────────────────────────────────────
  const openPaymentModal = (purchase) => {
    setShowPaymentModal(purchase);
    setPaymentAmount(getBalance(purchase).toFixed(2));
    setPaymentMethod("cash");
    setPaymentNotes("");
    setPaymentError("");
  };

  const closePaymentModal = () => {
    setShowPaymentModal(null);
    setPaymentError("");
  };

  const handlePaySupplier = async () => {
    const amount = parseFloat(paymentAmount);

    if (!amount || amount <= 0) {
      setPaymentError("Please enter a valid payment amount");
      return;
    }

    const balance = getBalance(showPaymentModal);
    if (amount > balance) {
      setPaymentError(`Amount exceeds balance of ${fmt(balance)}`);
      return;
    }

    setPayingNow(true);

    try {
      await axios.post(
        `http://localhost:5000/api/purchases/${showPaymentModal.id}/pay`,
        {
          amount,
          method: paymentMethod,
          notes: paymentNotes.trim() || null,
        },
      );

      closePaymentModal();
      fetchData();
    } catch (error) {
      setPaymentError(
        error.response?.data?.error || "Failed to record payment",
      );
    } finally {
      setPayingNow(false);
    }
  };

  // ─────────────────────────────────────
  // FORMAT HELPERS
  // ─────────────────────────────────────
  const fmt = (amount) => {
    return `KSh ${Number(amount || 0).toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-KE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  // ─────────────────────────────────────
  // LOADING
  // ─────────────────────────────────────
  if (loading) {
    return <div className="loading">⏳ Loading purchases...</div>;
  }

  // ─────────────────────────────────────
  // THE SCREEN
  // ─────────────────────────────────────
  return (
    <>
      <div className="purchases-page">
        {/* TOP BAR */}
        <div className="purchases-topbar">
          <h1 className="purchases-title">
            📦 Purchases
            <span
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "#94a3b8",
                marginLeft: "8px",
              }}
            >
              ({filteredPurchases.length} orders)
            </span>
          </h1>
          <button className="btn-add-purchase" onClick={() => openModal()}>
            ➕ New Purchase
          </button>
        </div>

        {/* STAT CARDS */}
        <div className="purchase-stats">
          <div className="purchase-stat-card">
            <div className="purchase-stat-top">
              <span className="purchase-stat-label">Total Purchases</span>
              <div className="purchase-stat-icon">📦</div>
            </div>
            <div className="purchase-stat-value">{fmt(totalPurchases)}</div>
            <div className="purchase-stat-sub">
              {filteredPurchases.length} orders
            </div>
          </div>

          <div className="purchase-stat-card">
            <div className="purchase-stat-top">
              <span className="purchase-stat-label">Carriage Inwards</span>
              <div className="purchase-stat-icon">🚚</div>
            </div>
            <div className="purchase-stat-value">{fmt(totalCarriage)}</div>
            <div className="purchase-stat-sub">transport costs</div>
          </div>

          <div className="purchase-stat-card">
            <div className="purchase-stat-top">
              <span className="purchase-stat-label">Outstanding Balance</span>
              <div className="purchase-stat-icon">💰</div>
            </div>
            <div
              className="purchase-stat-value"
              style={{
                color: totalOutstanding > 0 ? "#dc2626" : "#16a34a",
              }}
            >
              {fmt(totalOutstanding)}
            </div>
            <div className="purchase-stat-sub">owed to suppliers</div>
          </div>
        </div>

        {/* FILTERS */}
        <div className="purchases-filters">
          <div className="search-wrapper">
            <span>🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search by #, supplier, or reference..."
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

        {/* TABLE */}
        <div className="purchases-table-card">
          <table className="purchases-table">
            <thead>
              <tr>
                <th>Order #</th>
                <th>Supplier</th>
                <th>Date</th>
                <th>Items</th>
                <th>Total</th>
                <th>Paid</th>
                <th>Balance</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredPurchases.length === 0 ? (
                <tr>
                  <td colSpan="10">
                    <div className="table-empty">
                      <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                        📦
                      </div>
                      <p style={{ fontWeight: 600 }}>No purchases found</p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#94a3b8",
                          marginTop: "4px",
                        }}
                      >
                        Click "New Purchase" to record stock buying
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredPurchases.map((purchase) => {
                  const isExpanded = expandedId === purchase.id;
                  const balance = getBalance(purchase);
                  const badge = getPaymentBadge(purchase);

                  return (
                    <>
                      <tr
                        key={purchase.id}
                        className={`purchase-row ${isExpanded ? "expanded" : ""}`}
                        onClick={() => toggleExpand(purchase.id)}
                      >
                        <td>
                          <span className="purchase-number">
                            #{purchase.id}
                          </span>
                        </td>
                        <td>
                          <span className="supplier-name-cell">
                            {purchase.supplier?.name || "Unknown"}
                          </span>
                        </td>
                        <td>{formatDate(purchase.createdAt)}</td>
                        <td>
                          <span
                            style={{
                              background: "#fff7ed",
                              color: "#ea580c",
                              padding: "3px 10px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: 500,
                            }}
                          >
                            {purchase.items?.length || 0} products
                          </span>
                        </td>
                        <td>
                          <span className="purchase-total">
                            {fmt(purchase.totalAmount)}
                          </span>
                        </td>
                        <td
                          style={{
                            color: "#16a34a",
                            fontWeight: 600,
                            fontSize: "13px",
                          }}
                        >
                          {fmt(purchase.amountPaid || 0)}
                        </td>
                        <td
                          style={{
                            color: balance > 0 ? "#dc2626" : "#94a3b8",
                            fontWeight: 700,
                            fontSize: "13px",
                          }}
                        >
                          {fmt(balance)}
                        </td>

                        <td>
                          <span
                            style={{
                              padding: "4px 10px",
                              borderRadius: "20px",
                              fontSize: "12px",
                              fontWeight: 600,
                              background: badge.bg,
                              color: badge.color,
                              whiteSpace: "nowrap",
                            }}
                          >
                            {badge.label}
                          </span>
                        </td>
                        <td onClick={(e) => e.stopPropagation()}>
                          <div
                            style={{
                              display: "flex",
                              gap: "6px",
                              flexWrap: "wrap",
                              alignItems: "center",
                            }}
                          >
                            {balance > 0 && (
                              <button
                                onClick={() => openPaymentModal(purchase)}
                                style={{
                                  padding: "6px 10px",
                                  background: "#2563eb",
                                  color: "#fff",
                                  border: "none",
                                  borderRadius: "6px",
                                  fontSize: "11px",
                                  fontWeight: 600,
                                  cursor: "pointer",
                                  whiteSpace: "nowrap",
                                }}
                              >
                                💰 Pay
                              </button>
                            )}

                            {(purchase.payments?.length || 0) === 0 && (
                              <>
                                <button
                                  onClick={() => openModal(purchase)}
                                  style={{
                                    padding: "6px 10px",
                                    background: "#eff6ff",
                                    color: "#2563eb",
                                    border: "none",
                                    borderRadius: "6px",
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  ✏️ Edit
                                </button>

                                <button
                                  onClick={() => handleDeletePurchase(purchase)}
                                  style={{
                                    padding: "6px 10px",
                                    background: "#fee2e2",
                                    color: "#dc2626",
                                    border: "none",
                                    borderRadius: "6px",
                                    fontSize: "11px",
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  🗑️ Delete
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                        <td
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleExpand(purchase.id);
                          }}
                        >
                          <button
                            className={`expand-btn ${isExpanded ? "open" : ""}`}
                          >
                            ▼
                          </button>
                        </td>
                      </tr>

                      {/* EXPANDED ROW */}
                      {isExpanded && (
                        <tr className="expanded-row">
                          <td colSpan="10">
                            <div className="expanded-content">
                              <div className="expanded-title">
                                📦 Items in Purchase #{purchase.id}
                              </div>
                              {purchase.items?.map((item) => (
                                <div key={item.id} className="expanded-item">
                                  <span className="expanded-item-name">
                                    {item.product?.name || "Unknown"}
                                  </span>
                                  <span className="expanded-item-qty">
                                    {item.quantity} units @{" "}
                                    {fmt(item.costPrice)} each
                                  </span>
                                  <span className="expanded-item-total">
                                    {fmt(item.quantity * item.costPrice)}
                                  </span>
                                </div>
                              ))}
                              {purchase.carriageInwards > 0 && (
                                <div className="expanded-carriage">
                                  <span>🚚 Carriage Inwards (Transport)</span>
                                  <span
                                    style={{
                                      fontWeight: 600,
                                      color: "#ea580c",
                                    }}
                                  >
                                    + {fmt(purchase.carriageInwards)}
                                  </span>
                                </div>
                              )}
                              <div className="expanded-total">
                                <span>TOTAL PURCHASE COST</span>
                                <span style={{ color: "#ea580c" }}>
                                  {fmt(purchase.totalAmount)}
                                </span>
                              </div>

                              {/* PAYMENT HISTORY */}
                              {purchase.payments &&
                                purchase.payments.length > 0 && (
                                  <div style={{ marginTop: "16px" }}>
                                    <div className="expanded-title">
                                      💰 Payment History
                                    </div>
                                    {purchase.payments.map((payment) => (
                                      <div
                                        key={payment.id}
                                        className="expanded-item"
                                      >
                                        <span className="expanded-item-name">
                                          {payment.method === "cash"
                                            ? "💵"
                                            : payment.method === "mpesa"
                                              ? "📱"
                                              : payment.method === "bank"
                                                ? "🏦"
                                                : "📝"}{" "}
                                          {payment.method.toUpperCase()}
                                          {payment.notes && (
                                            <span
                                              style={{
                                                color: "#94a3b8",
                                                fontSize: "11px",
                                                marginLeft: "8px",
                                              }}
                                            >
                                              ({payment.notes})
                                            </span>
                                          )}
                                        </span>
                                        <span className="expanded-item-qty">
                                          {formatDate(payment.createdAt)}
                                        </span>
                                        <span
                                          className="expanded-item-total"
                                          style={{ color: "#16a34a" }}
                                        >
                                          {fmt(payment.amount)}
                                        </span>
                                      </div>
                                    ))}
                                    <div
                                      className="expanded-total"
                                      style={{ marginTop: "8px" }}
                                    >
                                      <span>BALANCE REMAINING</span>
                                      <span
                                        style={{
                                          color:
                                            balance > 0 ? "#dc2626" : "#16a34a",
                                        }}
                                      >
                                        {fmt(balance)}
                                      </span>
                                    </div>
                                  </div>
                                )}

                              {purchase.notes && (
                                <div
                                  style={{
                                    fontSize: "12px",
                                    color: "#64748b",
                                    marginTop: "8px",
                                    fontStyle: "italic",
                                  }}
                                >
                                  Note: {purchase.notes}
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
      </div>

      {/* ════════════════════════════
          ADD PURCHASE MODAL
      ════════════════════════════ */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">
                {editingPurchase
                  ? "✏️ Edit Purchase Order"
                  : "➕ New Purchase Order"}
              </h2>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            {formError && <div className="form-error">⚠️ {formError}</div>}

            {/* Supplier */}
            <div className="form-group">
              <label className="form-label">
                Supplier <span className="required">*</span>
              </label>
              {suppliers.length === 0 ? (
                <p style={{ color: "#dc2626", fontSize: "13px" }}>
                  ⚠️ No suppliers found. Please add a supplier first!
                </p>
              ) : (
                <select
                  className="form-input"
                  name="supplierId"
                  value={formData.supplierId}
                  onChange={handleChange}
                >
                  {suppliers.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            {/* Reference + Carriage side by side */}
            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Reference No (optional)</label>
                <input
                  className="form-input"
                  type="text"
                  name="referenceNo"
                  placeholder="Supplier invoice #"
                  value={formData.referenceNo}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label">Carriage Inwards (KSh)</label>
                <input
                  className="form-input"
                  type="number"
                  name="carriageInwards"
                  placeholder="0"
                  value={formData.carriageInwards}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                />
                <p className="form-hint">Transport cost to bring stock in</p>
              </div>
            </div>

            {/* ITEMS BUILDER */}
            <div className="form-group">
              <label className="form-label">
                Products Purchased <span className="required">*</span>
              </label>

              <div className="items-builder">
                <div className="items-builder-header">
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>Cost Price (KSh)</span>
                  <span></span>
                </div>

                {purchaseItems.map((item, index) => (
                  <div key={index} className="item-row">
                    <select
                      value={item.productId}
                      onChange={(e) =>
                        handleItemChange(index, "productId", e.target.value)
                      }
                      style={{
                        padding: "6px 8px",
                        border: "1px solid #e2e8f0",
                        borderRadius: "6px",
                        fontSize: "13px",
                        outline: "none",
                      }}
                    >
                      <option value="">Select product...</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name}
                        </option>
                      ))}
                    </select>

                    <input
                      type="number"
                      placeholder="Qty"
                      value={item.quantity}
                      onChange={(e) =>
                        handleItemChange(index, "quantity", e.target.value)
                      }
                      min="1"
                    />

                    <input
                      type="number"
                      placeholder="Cost"
                      value={item.costPrice}
                      onChange={(e) =>
                        handleItemChange(index, "costPrice", e.target.value)
                      }
                      min="0"
                      step="0.01"
                    />

                    <button
                      className="btn-remove-item"
                      onClick={() => removeItemRow(index)}
                      disabled={purchaseItems.length === 1}
                      title="Remove this item"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>

              <button className="btn-add-item" onClick={addItemRow}>
                ➕ Add Another Product
              </button>
            </div>

            {/* Notes */}
            <div className="form-group">
              <label className="form-label">Notes (optional)</label>
              <textarea
                className="form-input"
                name="notes"
                placeholder="Any notes about this purchase..."
                value={formData.notes}
                onChange={handleChange}
                rows="2"
              />
            </div>

            {/* Total preview */}
            <div className="purchase-total-preview">
              <span className="purchase-total-preview-label">
                Total Purchase Cost:
              </span>
              <span className="purchase-total-preview-amount">
                {fmt(calculateTotal())}
              </span>
            </div>

            <div className="modal-footer">
              <button
                className="btn-cancel"
                onClick={closeModal}
                disabled={saving}
              >
                Cancel
              </button>
              <button
                className="btn-save"
                onClick={handleSave}
                disabled={saving || suppliers.length === 0}
              >
                {saving
                  ? "⏳ Saving..."
                  : editingPurchase
                    ? "✅ Update Purchase"
                    : "✅ Record Purchase"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ════════════════════════════
          PAYMENT MODAL
      ════════════════════════════ */}
      {showPaymentModal && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: "420px" }}>
            <div className="modal-header">
              <h2 className="modal-title">💰 Pay Supplier</h2>
              <button className="modal-close" onClick={closePaymentModal}>
                ✕
              </button>
            </div>

            {/* Purchase summary */}
            <div
              style={{
                background: "#f8fafc",
                borderRadius: "8px",
                padding: "14px",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#64748b",
                  marginBottom: "4px",
                }}
              >
                Purchase #{showPaymentModal.id} —{" "}
                {showPaymentModal.supplier?.name}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                }}
              >
                <span>Total Amount:</span>
                <span style={{ fontWeight: 600 }}>
                  {fmt(showPaymentModal.totalAmount)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "14px",
                }}
              >
                <span>Already Paid:</span>
                <span style={{ fontWeight: 600, color: "#16a34a" }}>
                  {fmt(showPaymentModal.amountPaid || 0)}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "15px",
                  fontWeight: 700,
                  marginTop: "6px",
                  paddingTop: "6px",
                  borderTop: "1px solid #e2e8f0",
                }}
              >
                <span>Balance Owed:</span>
                <span style={{ color: "#dc2626" }}>
                  {fmt(getBalance(showPaymentModal))}
                </span>
              </div>
            </div>

            {paymentError && (
              <div className="form-error">⚠️ {paymentError}</div>
            )}

            {/* Amount */}
            <div className="form-group">
              <label className="form-label">
                Payment Amount (KSh) <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="0.00"
                value={paymentAmount}
                onChange={(e) => {
                  setPaymentAmount(e.target.value);
                  if (paymentError) setPaymentError("");
                }}
                min="0"
                max={getBalance(showPaymentModal)}
                step="0.01"
              />
              <p className="form-hint">
                Maximum: {fmt(getBalance(showPaymentModal))}
              </p>
            </div>

            {/* Payment Method */}
            <div className="form-group">
              <label className="form-label">Payment Method</label>
              <select
                className="form-input"
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
              >
                <option value="cash">💵 Cash</option>
                <option value="mpesa">📱 MPESA</option>
                <option value="bank">🏦 Bank Transfer</option>
                <option value="cheque">📝 Cheque</option>
              </select>
            </div>

            {/* Notes */}
            <div className="form-group">
              <label className="form-label">Notes (optional)</label>
              <input
                className="form-input"
                type="text"
                placeholder="e.g. Paid via till number"
                value={paymentNotes}
                onChange={(e) => setPaymentNotes(e.target.value)}
              />
            </div>

            {/* Quick amount buttons */}
            <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
              <button
                onClick={() =>
                  setPaymentAmount(getBalance(showPaymentModal).toFixed(2))
                }
                style={{
                  flex: 1,
                  padding: "8px",
                  background: "#eff6ff",
                  color: "#2563eb",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Pay Full Balance
              </button>
              <button
                onClick={() =>
                  setPaymentAmount(
                    (getBalance(showPaymentModal) / 2).toFixed(2),
                  )
                }
                style={{
                  flex: 1,
                  padding: "8px",
                  background: "#f1f5f9",
                  color: "#64748b",
                  border: "none",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Pay Half
              </button>
            </div>

            <div className="modal-footer">
              <button
                className="btn-cancel"
                onClick={closePaymentModal}
                disabled={payingNow}
              >
                Cancel
              </button>
              <button
                className="btn-save"
                onClick={handlePaySupplier}
                disabled={payingNow}
              >
                {payingNow ? "⏳ Processing..." : "✅ Confirm Payment"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Purchases;
