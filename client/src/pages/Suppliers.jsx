import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Suppliers.css";

function Suppliers() {
  // ─────────────────────────────────────
  // WHITEBOARDS
  // ─────────────────────────────────────
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  // ─────────────────────────────────────
  // FETCH SUPPLIERS
  // ─────────────────────────────────────
  const fetchSuppliers = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/suppliers");
      setSuppliers(res.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSuppliers();
  }, [fetchSuppliers]);

  // ─────────────────────────────────────
  // FILTER SUPPLIERS by search
  // ─────────────────────────────────────
  const filteredSuppliers = suppliers.filter(
    (supplier) =>
      supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (supplier.phone || "").includes(searchTerm) ||
      (supplier.email || "").toLowerCase().includes(searchTerm.toLowerCase()),
  );
  // Search in name, phone AND email!

  // ─────────────────────────────────────
  // FORM HANDLER
  // ─────────────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError("");
  };

  // ─────────────────────────────────────
  // OPEN ADD MODAL
  // ─────────────────────────────────────
  const openAddModal = () => {
    setEditingSupplier(null);
    setFormData({ name: "", phone: "", email: "", address: "" });
    setFormError("");
    setShowModal(true);
  };

  // ─────────────────────────────────────
  // OPEN EDIT MODAL
  // ─────────────────────────────────────
  const openEditModal = (supplier) => {
    setEditingSupplier(supplier);
    setFormData({
      name: supplier.name,
      phone: supplier.phone || "",
      email: supplier.email || "",
      address: supplier.address || "",
    });
    setFormError("");
    setShowModal(true);
  };

  // ─────────────────────────────────────
  // CLOSE MODAL
  // ─────────────────────────────────────
  const closeModal = () => {
    setShowModal(false);
    setEditingSupplier(null);
    setFormError("");
  };

  // ─────────────────────────────────────
  // VALIDATE
  // ─────────────────────────────────────
  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError("Supplier name is required");
      return false;
    }
    return true;
  };

  // ─────────────────────────────────────
  // SAVE SUPPLIER
  // ─────────────────────────────────────
  const handleSave = async () => {
    if (!validateForm()) return;
    setSaving(true);

    try {
      const data = {
        name: formData.name.trim(),
        phone: formData.phone.trim() || null,
        email: formData.email.trim() || null,
        address: formData.address.trim() || null,
      };

      if (editingSupplier) {
        await axios.put(
          `http://localhost:5000/api/suppliers/${editingSupplier.id}`,
          data,
        );
      } else {
        await axios.post("http://localhost:5000/api/suppliers", data);
      }

      closeModal();
      fetchSuppliers();
    } catch (error) {
      setFormError(error.response?.data?.error || "Failed to save supplier");
    } finally {
      setSaving(false);
    }
  };

  // ─────────────────────────────────────
  // DELETE SUPPLIER
  // ─────────────────────────────────────
  const handleDelete = async (supplier) => {
    const confirmed = window.confirm(
      `Delete supplier "${supplier.name}"?\n\nThis cannot be undone!`,
    );
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/suppliers/${supplier.id}`);
      fetchSuppliers();
    } catch (error) {
      alert(
        "Failed to delete supplier. They may have purchases linked to them.",
      );
    }
  };

  // ─────────────────────────────────────
  // LOADING
  // ─────────────────────────────────────
  if (loading) {
    return <div className="loading">⏳ Loading suppliers...</div>;
  }

  // ─────────────────────────────────────
  // THE SCREEN
  // ─────────────────────────────────────
  return (
    <>
      <div className="suppliers-page">
        {/* TOP BAR */}
        <div className="suppliers-topbar">
          <h1 className="suppliers-title">
            🏭 Suppliers
            <span
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "#94a3b8",
                marginLeft: "8px",
              }}
            >
              ({filteredSuppliers.length})
            </span>
          </h1>
          <button className="btn-add-supplier" onClick={openAddModal}>
            ➕ Add Supplier
          </button>
        </div>

        {/* SEARCH */}
        <div className="suppliers-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search suppliers..."
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

        {/* SUPPLIERS GRID */}
        {filteredSuppliers.length === 0 ? (
          <div className="suppliers-empty">
            <div style={{ fontSize: "48px", marginBottom: "12px" }}>🏭</div>
            <p style={{ fontWeight: 600, marginBottom: "4px" }}>
              No suppliers found
            </p>
            <p style={{ fontSize: "13px" }}>
              {searchTerm
                ? "Try a different search"
                : 'Click "Add Supplier" to get started!'}
            </p>
          </div>
        ) : (
          <div className="suppliers-grid">
            {filteredSuppliers.map((supplier) => (
              <div key={supplier.id} className="supplier-card">
                <div className="supplier-card-top">
                  <div className="supplier-avatar">
                    {supplier.name[0].toUpperCase()}
                  </div>
                  <span className="supplier-name">{supplier.name}</span>
                </div>

                {/* CONTACT DETAILS */}
                <div className="supplier-details">
                  {supplier.phone && (
                    <div className="supplier-detail">
                      <span className="supplier-detail-icon">📱</span>
                      {supplier.phone}
                    </div>
                  )}
                  {supplier.email && (
                    <div className="supplier-detail">
                      <span className="supplier-detail-icon">📧</span>
                      {supplier.email}
                    </div>
                  )}
                  {supplier.address && (
                    <div className="supplier-detail">
                      <span className="supplier-detail-icon">📍</span>
                      {supplier.address}
                    </div>
                  )}
                  {!supplier.phone && !supplier.email && !supplier.address && (
                    <div className="supplier-detail">
                      <span style={{ color: "#94a3b8", fontStyle: "italic" }}>
                        No contact details
                      </span>
                    </div>
                  )}
                </div>

                {/* ACTIONS */}
                <div className="supplier-actions">
                  <button
                    className="btn-edit"
                    onClick={() => openEditModal(supplier)}
                  >
                    ✏️ Edit
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => handleDelete(supplier)}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ADD/EDIT MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">
                {editingSupplier ? "✏️ Edit Supplier" : "➕ Add Supplier"}
              </h2>
              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            {formError && <div className="form-error">⚠️ {formError}</div>}

            {/* Supplier Name */}
            <div className="form-group">
              <label className="form-label">
                Supplier Name <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="e.g. Naivas Wholesale"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <label className="form-label">Phone (optional)</label>
              <input
                className="form-input"
                type="tel"
                name="phone"
                placeholder="e.g. 0712345678"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <label className="form-label">Email (optional)</label>
              <input
                className="form-input"
                type="email"
                name="email"
                placeholder="e.g. supplier@email.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Address */}
            <div className="form-group">
              <label className="form-label">Address (optional)</label>
              <textarea
                className="form-input"
                name="address"
                placeholder="e.g. Industrial Area, Nairobi"
                value={formData.address}
                onChange={handleChange}
                rows="2"
              />
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
                disabled={saving}
              >
                {saving
                  ? "⏳ Saving..."
                  : editingSupplier
                    ? "✅ Update Supplier"
                    : "✅ Add Supplier"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Suppliers;
