import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Returns.css";

function Returns() {
  // WHITEBOARDS

  const [activeTab, setActiveTab] = useState("inward");

  const [returnInwards, setReturnInwards] = useState([]);
  const [returnOutwards, setReturnOutwards] = useState([]);
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  // Form data for return
  const [formData, setFormData] = useState({
    reason: "",
    saleId: "",

    supplierId: "",
  });

  // Return items
  const [returnItems, setReturnItems] = useState([
    { productId: "", quantity: "", price: "" },
  ]);

  // ─────────────────────────────────────
  // FETCH ALL DATA
  // ─────────────────────────────────────
  const fetchData = useCallback(async () => {
    try {
      const [inRes, outRes, suppRes, prodRes] = await Promise.all([
        axios.get("http://localhost:5000/api/returns/inwards"),
        axios.get("http://localhost:5000/api/returns/outwards"),
        axios.get("http://localhost:5000/api/suppliers"),
        axios.get("http://localhost:5000/api/products"),
      ]);
      setReturnInwards([...inRes.data].reverse());
      setReturnOutwards([...outRes.data].reverse());
      setSuppliers(suppRes.data);
      setProducts(prodRes.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const currentReturns =
    activeTab === "inward" ? returnInwards : returnOutwards;

  const totalRefunded = returnInwards.reduce(
    (sum, r) => sum + r.totalAmount,
    0,
  );

  // Total recovered from suppliers
  const totalRecovered = returnOutwards.reduce(
    (sum, r) => sum + r.totalAmount,
    0,
  );

  // Net impact = recovered - refunded
  const netImpact = totalRecovered - totalRefunded;

  // ─────────────────────────────────────
  // CALCULATE RETURN TOTAL
  // from current form items
  // ─────────────────────────────────────
  const calculateTotal = () => {
    return returnItems.reduce((sum, item) => {
      const qty = parseFloat(item.quantity) || 0;
      const price = parseFloat(item.price) || 0;
      return sum + qty * price;
    }, 0);
  };

  // ─────────────────────────────────────
  // FORM HANDLERS
  // ─────────────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError("");
  };

  const handleItemChange = (index, field, value) => {
    setReturnItems(
      returnItems.map((item, i) =>
        i === index ? { ...item, [field]: value } : item,
      ),
    );
  };

  const addItemRow = () => {
    setReturnItems([
      ...returnItems,
      { productId: "", quantity: "", price: "" },
    ]);
  };

  const removeItemRow = (index) => {
    if (returnItems.length === 1) return;
    setReturnItems(returnItems.filter((_, i) => i !== index));
  };

  // ─────────────────────────────────────
  // OPEN MODAL
  // ─────────────────────────────────────
  const openModal = () => {
    setFormData({
      reason: "",
      saleId: "",
      supplierId: suppliers.length > 0 ? suppliers[0].id.toString() : "",
    });
    setReturnItems([{ productId: "", quantity: "", price: "" }]);
    setFormError("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setFormError("");
  };

  // ─────────────────────────────────────
  // VALIDATE
  // ─────────────────────────────────────
  const validateForm = () => {
    if (!formData.reason.trim()) {
      setFormError("Please enter a reason for the return");
      return false;
    }

    if (activeTab === "outward" && !formData.supplierId) {
      setFormError("Please select a supplier");
      return false;
    }

    for (let i = 0; i < returnItems.length; i++) {
      const item = returnItems[i];
      if (!item.productId) {
        setFormError(`Please select a product for item ${i + 1}`);
        return false;
      }
      if (!item.quantity || parseInt(item.quantity) <= 0) {
        setFormError(`Please enter quantity for item ${i + 1}`);
        return false;
      }
      if (!item.price || parseFloat(item.price) <= 0) {
        setFormError(`Please enter price for item ${i + 1}`);
        return false;
      }
    }

    return true;
  };

  // ─────────────────────────────────────
  // SAVE RETURN
  // ─────────────────────────────────────
  const handleSave = async () => {
    if (!validateForm()) return;
    setSaving(true);

    try {
      const priceField = activeTab === "inward" ? "price" : "costPrice";

      const items = returnItems.map((item) => ({
        productId: parseInt(item.productId),
        quantity: parseInt(item.quantity),
        [priceField]: parseFloat(item.price),
      }));

      if (activeTab === "inward") {
        await axios.post("http://localhost:5000/api/returns/inwards", {
          reason: formData.reason.trim(),
          saleId: formData.saleId ? parseInt(formData.saleId) : null,
          items,
        });
      } else {
        await axios.post("http://localhost:5000/api/returns/outwards", {
          supplierId: parseInt(formData.supplierId),
          reason: formData.reason.trim(),
          items,
        });
      }

      closeModal();
      fetchData();
    } catch (error) {
      setFormError(error.response?.data?.error || "Failed to save return");
    } finally {
      setSaving(false);
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
    return <div className="loading">⏳ Loading returns...</div>;
  }

  // ─────────────────────────────────────
  // THE SCREEN
  // ─────────────────────────────────────
  return (
    <>
      <div className="returns-page">
        {/* TOP BAR */}
        <div className="returns-topbar">
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <h1 className="returns-title">🔄 Returns</h1>

            {/* TABS — switch between inward/outward */}
            <div className="returns-tabs">
              <button
                className={`tab-btn ${activeTab === "inward" ? "active-inward" : ""}`}
                onClick={() => setActiveTab("inward")}
              >
                📥 Return Inwards
              </button>
              <button
                className={`tab-btn ${activeTab === "outward" ? "active-outward" : ""}`}
                onClick={() => setActiveTab("outward")}
              >
                📤 Return Outwards
              </button>
            </div>
          </div>

          {/* Add button changes based on active tab */}
          <button className={`btn-add-return ${activeTab}`} onClick={openModal}>
            ➕ Record{" "}
            {activeTab === "inward" ? "Customer Return" : "Supplier Return"}
          </button>
        </div>

        {/* STAT CARDS */}
        <div className="returns-stats">
          <div className="return-stat-card">
            <div className="return-stat-top">
              <span className="return-stat-label">
                Total Refunded to Customers
              </span>
              <div className="return-stat-icon blue">📥</div>
            </div>
            <div className="return-stat-value blue">{fmt(totalRefunded)}</div>
            <div className="return-stat-sub">
              {returnInwards.length} return inward records
            </div>
          </div>

          <div className="return-stat-card">
            <div className="return-stat-top">
              <span className="return-stat-label">
                Total Recovered from Suppliers
              </span>
              <div className="return-stat-icon orange">📤</div>
            </div>
            <div className="return-stat-value orange">
              {fmt(totalRecovered)}
            </div>
            <div className="return-stat-sub">
              {returnOutwards.length} return outward records
            </div>
          </div>

          <div className="return-stat-card">
            <div className="return-stat-top">
              <span className="return-stat-label">Net Returns Impact</span>
              <div className="return-stat-icon green">📊</div>
            </div>
            <div
              className="return-stat-value"
              style={{ color: netImpact >= 0 ? "#16a34a" : "#dc2626" }}
            >
              {fmt(Math.abs(netImpact))}
            </div>
            <div className="return-stat-sub">
              {netImpact >= 0
                ? "✅ Recovered more than refunded"
                : "❌ Refunded more than recovered"}
            </div>
          </div>
        </div>

        {/* RETURNS TABLE */}
        <div className="returns-table-card">
          <table className="returns-table">
            <thead>
              <tr>
                <th>Return #</th>
                {activeTab === "outward" && <th>Supplier</th>}
                <th>Reason</th>
                <th>Items</th>
                <th>{activeTab === "inward" ? "Refunded" : "Recovered"}</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {currentReturns.length === 0 ? (
                <tr>
                  <td colSpan={activeTab === "outward" ? "6" : "5"}>
                    <div className="table-empty">
                      <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                        🔄
                      </div>
                      <p style={{ fontWeight: 600 }}>
                        No{" "}
                        {activeTab === "inward"
                          ? "return inwards"
                          : "return outwards"}{" "}
                        found
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                currentReturns.map((ret) => (
                  <tr key={ret.id}>
                    <td>
                      <span className={`return-number-${activeTab}`}>
                        #{ret.id}
                      </span>
                    </td>
                    {activeTab === "outward" && (
                      <td>{ret.supplier?.name || "Unknown"}</td>
                    )}
                    <td>
                      <div className="reason-cell" title={ret.reason}>
                        {ret.reason}
                      </div>
                    </td>
                    <td>
                      <span
                        style={{
                          background: "#f1f5f9",
                          padding: "3px 10px",
                          borderRadius: "20px",
                          fontSize: "12px",
                        }}
                      >
                        {ret.items?.length || 0} items
                      </span>
                    </td>
                    <td>
                      <span className={`return-amount-${activeTab}`}>
                        {fmt(ret.totalAmount)}
                      </span>
                    </td>
                    <td>{formatDate(ret.createdAt)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ADD RETURN MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">
                {activeTab === "inward"
                  ? "📥 Record Customer Return"
                  : "📤 Record Supplier Return"}
              </h2>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            {/* Info box explaining the return type */}
            <div
              style={{
                background: activeTab === "inward" ? "#eff6ff" : "#fff7ed",
                border: `1px solid ${activeTab === "inward" ? "#bfdbfe" : "#fed7aa"}`,
                borderRadius: "8px",
                padding: "12px",
                marginBottom: "20px",
                fontSize: "13px",
                color: "#374151",
              }}
            >
              {activeTab === "inward"
                ? "📥 Return Inward = Customer is returning products to YOU. Stock will increase, refund amount reduces your revenue."
                : "📤 Return Outward = YOU are returning products to supplier. Stock will decrease, recovered amount reduces purchase cost."}
            </div>

            {formError && <div className="form-error">⚠️ {formError}</div>}

            {/* Supplier (outward only) */}
            {activeTab === "outward" && (
              <div className="form-group">
                <label className="form-label">
                  Supplier <span className="required">*</span>
                </label>
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
              </div>
            )}

            {/* Sale ID (inward optional) */}
            {activeTab === "inward" && (
              <div className="form-group">
                <label className="form-label">Original Sale # (optional)</label>
                <input
                  className="form-input"
                  type="number"
                  name="saleId"
                  placeholder="e.g. 5"
                  value={formData.saleId}
                  onChange={handleChange}
                  min="1"
                />
                <p
                  style={{
                    fontSize: "11px",
                    color: "#94a3b8",
                    marginTop: "4px",
                  }}
                >
                  Link this return to the original sale if known
                </p>
              </div>
            )}

            {/* Reason */}
            <div className="form-group">
              <label className="form-label">
                Reason for Return <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                name="reason"
                placeholder={
                  activeTab === "inward"
                    ? "e.g. Product was expired, Wrong item delivered"
                    : "e.g. Damaged goods, Wrong quantity received"
                }
                value={formData.reason}
                onChange={handleChange}
              />
            </div>

            {/* Items */}
            <div className="form-group">
              <label className="form-label">
                Returned Products <span className="required">*</span>
              </label>

              <div className="items-builder">
                <div className="items-builder-header">
                  <span>Product</span>
                  <span>Quantity</span>
                  <span>
                    {activeTab === "inward" ? "Refund Price" : "Cost Price"}{" "}
                    (KSh)
                  </span>
                  <span></span>
                </div>

                {returnItems.map((item, index) => (
                  <div key={index} className="item-row">
                    <select
                      value={item.productId}
                      onChange={(e) =>
                        handleItemChange(index, "productId", e.target.value)
                      }
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
                      placeholder="Price"
                      value={item.price}
                      onChange={(e) =>
                        handleItemChange(index, "price", e.target.value)
                      }
                      min="0"
                      step="0.01"
                    />

                    <button
                      className="btn-remove-item"
                      onClick={() => removeItemRow(index)}
                      disabled={returnItems.length === 1}
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

            {/* Total preview */}
            <div className={`return-total-preview ${activeTab}`}>
              <span>
                {activeTab === "inward"
                  ? "Total Refund to Customer:"
                  : "Total Recovered from Supplier:"}
              </span>
              <span style={{ fontSize: "18px" }}>{fmt(calculateTotal())}</span>
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
                className={`btn-save ${activeTab}`}
                onClick={handleSave}
                disabled={saving}
              >
                {saving
                  ? "⏳ Saving..."
                  : activeTab === "inward"
                    ? "✅ Record Customer Return"
                    : "✅ Record Supplier Return"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Returns;
