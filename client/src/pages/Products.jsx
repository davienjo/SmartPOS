// ─────────────────────────────────────
// IMPORTS
// ─────────────────────────────────────
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Products.css";

function Products() {
  // ─────────────────────────────────────
  // WHITEBOARDS
  // ─────────────────────────────────────

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [editingProduct, setEditingProduct] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  const [activeCategory, setActiveCategory] = useState("All");

  const [saving, setSaving] = useState(false);

  const [formError, setFormError] = useState("");

  // ── STOCK ADJUSTMENT MODAL ──

  const [adjustingProduct, setAdjustingProduct] = useState(null);
  const [adjustAmount, setAdjustAmount] = useState("");
  const [adjustReason, setAdjustReason] = useState("");
  const [adjustSaving, setAdjustSaving] = useState(false);
  const [adjustError, setAdjustError] = useState("");

  // The form data

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    barcode: "",
    price: "",
    costPrice: "",
    stock: "",
  });

  // ─────────────────────────────────────
  // FETCH PRODUCTS
  // ─────────────────────────────────────
  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // ─────────────────────────────────────
  // ALARM CLOCK
  // Load products when page opens
  // ─────────────────────────────────────
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // ─────────────────────────────────────
  // GET UNIQUE CATEGORIES
  // ─────────────────────────────────────
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  // ─────────────────────────────────────
  // FILTER PRODUCTS
  // by search AND category
  // ─────────────────────────────────────
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // ─────────────────────────────────────
  // HANDLE FORM INPUT CHANGES
  // Runs every time user types in any field
  // ─────────────────────────────────────
  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });

    if (formError) setFormError("");
  };

  // ─────────────────────────────────────
  // OPEN MODAL FOR ADDING
  // ─────────────────────────────────────
  const openAddModal = () => {
    setEditingProduct(null);

    // Reset form to empty
    setFormData({
      name: "",
      category: "",
      barcode: "",
      price: "",
      costPrice: "",
      stock: "",
    });

    // Clear any old errors
    setFormError("");

    setShowModal(true);
  };

  // ─────────────────────────────────────
  // OPEN MODAL FOR EDITING
  // ─────────────────────────────────────
  const openEditModal = (product) => {
    setEditingProduct(product);

    setFormData({
      name: product.name,
      category: product.category,
      barcode: product.barcode || "",

      price: product.price.toString(),

      costPrice: product.costPrice.toString(),
      stock: product.stock.toString(),
    });

    setFormError("");

    setShowModal(true);
  };

  // ─────────────────────────────────────
  // CLOSE MODAL
  // ─────────────────────────────────────
  const closeModal = () => {
    setShowModal(false);
    setEditingProduct(null);
    setFormError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError("Product name is required");
      return false;
    }

    if (!formData.category.trim()) {
      setFormError("Category is required");
      return false;
    }

    if (!formData.price || parseFloat(formData.price) <= 0) {
      setFormError("Please enter a valid selling price");
      return false;
    }

    if (!editingProduct) {
      if (!formData.costPrice || parseFloat(formData.costPrice) < 0) {
        setFormError("Please enter a valid cost price");
        return false;
      }

      if (!formData.stock || parseInt(formData.stock) < 0) {
        setFormError("Please enter a valid stock quantity");
        return false;
      }
    }

    return true;
  };

  // SAVE PRODUCT

  const handleSave = async () => {
    if (!validateForm()) return;

    setSaving(true);

    try {
      if (editingProduct) {
        const productData = {
          name: formData.name.trim(),
          category: formData.category.trim(),
          barcode: formData.barcode.trim(),
          price: parseFloat(formData.price),
        };

        await axios.put(
          `http://localhost:5000/api/products/${editingProduct.id}`,
          productData,
        );
      } else {
        const productData = {
          name: formData.name.trim(),
          category: formData.category.trim(),
          barcode: formData.barcode.trim(),
          price: parseFloat(formData.price),
          costPrice: parseFloat(formData.costPrice),
          stock: parseInt(formData.stock),
        };

        await axios.post("http://localhost:5000/api/products", productData);
      }

      // Close the modal
      closeModal();

      fetchProducts();
    } catch (error) {
      setFormError(
        error.response?.data?.error ||
          "Failed to save product. Please try again.",
      );
    } finally {
      setSaving(false);
    }
  };

  // ─────────────────────────────────────
  // DELETE PRODUCT
  // ─────────────────────────────────────
  const handleDelete = async (product) => {
    Cancel;
    const confirmed = window.confirm(
      `Are you sure you want to delete "${product.name}"?\n\nThis cannot be undone!`,
    );

    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${product.id}`);

      fetchProducts();
    } catch (error) {
      alert(error.response?.data?.error || "Failed to delete product");
    }
  };

  // STOCK ADJUSTMENT

  const openAdjustModal = (product) => {
    setAdjustingProduct(product);
    setAdjustAmount("");
    setAdjustReason("");
    setAdjustError("");
  };

  const closeAdjustModal = () => {
    setAdjustingProduct(null);
    setAdjustError("");
  };

  const handleStockAdjust = async () => {
    const change = parseInt(adjustAmount);

    if (!adjustAmount || change === 0 || Number.isNaN(change)) {
      setAdjustError(
        "Enter a non-zero number (positive to add, negative to remove)",
      );
      return;
    }
    if (!adjustReason.trim()) {
      setAdjustError("Please enter a reason for this adjustment");
      return;
    }

    setAdjustSaving(true);
    try {
      await axios.post(
        `http://localhost:5000/api/products/${adjustingProduct.id}/adjust-stock`,
        { change, reason: adjustReason.trim() },
      );
      closeAdjustModal();
      fetchProducts();
    } catch (error) {
      console.error("Stock adjustment error:", error);
      setAdjustError(error.response?.data?.error || "Failed to adjust stock");
    } finally {
      setAdjustSaving(false);
    }
  };

  // ─────────────────────────────────────
  // GET STOCK BADGE CLASS

  const getStockClass = (stock) => {
    if (stock === 0) return "critical";

    if (stock <= 10) return "low";

    return "normal";
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

  // How much profit per item sold

  const getProfitMargin = (price, costPrice) => {
    if (!costPrice || costPrice === 0) return "N/A";

    const margin = ((price - costPrice) / price) * 100;

    return `${margin.toFixed(1)}%`;
  };

  // ─────────────────────────────────────
  // LOADING STATE
  // ─────────────────────────────────────
  if (loading) {
    return <div className="loading">⏳ Loading products...</div>;
  }

  // ─────────────────────────────────────
  // THE PRODUCTS SCREEN
  // ─────────────────────────────────────
  return (
    <>
      <div className="products-page">
        {/* ── TOP BAR ── */}
        <div className="products-topbar">
          <h1 className="products-title">
            📦 Products
            <span
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "#94a3b8",
                marginLeft: "8px",
              }}
            >
              ({filteredProducts.length} items)
            </span>
          </h1>

          <button className="btn-add" onClick={openAddModal}>
            ➕ Add Product
          </button>
        </div>

        {/* ── FILTERS ── */}
        <div className="products-filters">
          <div className="search-wrapper">
            <span className="search-icon">🔍</span>
            <input
              className="search-input"
              type="text"
              placeholder="Search products..."
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

          <div className="filter-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── PRODUCTS TABLE ── */}
        <div className="products-table-card">
          <table className="products-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Barcode</th>
                <th>Selling Price</th>
                <th>Cost Price</th>
                <th>Margin</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            {/* Table body */}
            <tbody>
              {filteredProducts.length === 0 ? (
                <tr>
                  <td colSpan="8">
                    <div className="table-empty">
                      <div className="table-empty-icon">📦</div>
                      <p style={{ fontWeight: 600 }}>No products found</p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "#94a3b8",
                          marginTop: "4px",
                        }}
                      >
                        {searchTerm || activeCategory !== "All"
                          ? "Try different search or category"
                          : 'Click "Add Product" to get started!'}
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                // Show each product as a table row
                filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>
                      <div className="product-name-cell">{product.name}</div>
                    </td>

                    {/* Category badge */}
                    <td>
                      <span className="category-badge">{product.category}</span>
                    </td>

                    {/* Barcode */}
                    <td>
                      <span className="product-barcode">
                        {product.barcode || "—"}
                        {/* || '—' = show dash if no barcode */}
                      </span>
                    </td>

                    {/* Selling price */}
                    <td>{fmt(product.price)}</td>

                    {/* Cost price */}
                    <td>{fmt(product.costPrice)}</td>

                    {/* Profit margin */}
                    <td>
                      <span
                        style={{
                          color: "#16a34a",
                          fontWeight: 600,
                        }}
                      >
                        {getProfitMargin(product.price, product.costPrice)}
                      </span>
                    </td>

                    {/* Stock badge */}
                    <td>
                      <span
                        className={`stock-badge ${getStockClass(product.stock)}`}
                      >
                        {product.stock === 0 ? "Out of stock" : product.stock}
                      </span>
                    </td>

                    {/* Action buttons */}
                    <td>
                      <div className="actions-cell">
                        <button
                          className="btn-edit"
                          onClick={() => openEditModal(product)}
                        >
                          ✏️ Edit
                        </button>

                        <button
                          className="btn-edit"
                          style={{ background: "#fff7ed", color: "#ea580c" }}
                          onClick={() => openAdjustModal(product)}
                        >
                          📦 Adjust Stock
                        </button>

                        {/* Delete button */}
                        <button
                          className="btn-delete"
                          onClick={() => handleDelete(product)}
                        >
                          🗑️ Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ════════════════════════════
          ADD/EDIT MODAL
          Shows when showModal = true
      ════════════════════════════ */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h2 className="modal-title">
                {editingProduct ? "✏️ Edit Product" : "➕ Add New Product"}
              </h2>

              <button className="modal-close" onClick={closeModal}>
                ✕
              </button>
            </div>

            {/* Error message */}
            {formError && <div className="form-error">⚠️ {formError}</div>}

            {/* ── FORM FIELDS ── */}

            <div className="form-group">
              <label className="form-label">
                Product Name
                <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                name="name"
                placeholder="e.g. Bread 400g"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Category */}
            <div className="form-group">
              <label className="form-label">
                Category
                <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                name="category"
                placeholder="e.g. Bakery, Dairy, Drinks"
                value={formData.category}
                onChange={handleChange}
                list="category-suggestions"
              />

              <datalist id="category-suggestions">
                {categories
                  .filter((c) => c !== "All")
                  .map((c) => (
                    <option key={c} value={c} />
                  ))}
              </datalist>
              <p className="form-hint">Type a new category or pick existing</p>
            </div>

            {/* Barcode */}
            <div className="form-group">
              <label className="form-label">Barcode (optional)</label>
              <input
                className="form-input"
                type="text"
                name="barcode"
                placeholder="e.g. 6001234567890"
                value={formData.barcode}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">
                  Selling Price (KSh)
                  <span className="required">*</span>
                </label>
                <input
                  className="form-input"
                  type="number"
                  name="price"
                  placeholder="0.00"
                  value={formData.price}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                />
              </div>

              {/* Cost Price */}
              <div className="form-group">
                <label className="form-label">
                  Cost Price (KSh)
                  {!editingProduct && <span className="required">*</span>}
                </label>
                <input
                  className="form-input"
                  type="number"
                  name="costPrice"
                  placeholder="0.00"
                  value={formData.costPrice}
                  onChange={handleChange}
                  min="0"
                  step="0.01"
                  readOnly={!!editingProduct}
                  disabled={!!editingProduct}
                  style={
                    editingProduct
                      ? { background: "#f1f5f9", cursor: "not-allowed" }
                      : undefined
                  }
                />

                {editingProduct ? (
                  <p className="form-hint">
                    🔒 Updates automatically from new Purchases
                  </p>
                ) : (
                  formData.price &&
                  formData.costPrice && (
                    <p className="form-hint" style={{ color: "#16a34a" }}>
                      Margin:{" "}
                      {getProfitMargin(
                        parseFloat(formData.price),
                        parseFloat(formData.costPrice),
                      )}
                    </p>
                  )
                )}
              </div>
            </div>

            {/* Stock */}
            <div className="form-group">
              <label className="form-label">
                Stock Quantity
                {!editingProduct && <span className="required">*</span>}
              </label>
              <input
                className="form-input"
                type="number"
                name="stock"
                placeholder="0"
                value={formData.stock}
                onChange={handleChange}
                min="0"
                step="1"
                readOnly={!!editingProduct}
                disabled={!!editingProduct}
                style={
                  editingProduct
                    ? { background: "#f1f5f9", cursor: "not-allowed" }
                    : undefined
                }
              />
              {editingProduct ? (
                <p className="form-hint">
                  🔒 Use "📦 Adjust Stock" on the product row to change this, or
                  record a Purchase to add new stock
                </p>
              ) : (
                <p className="form-hint">Current quantity available for sale</p>
              )}
            </div>

            {/* Modal footer buttons */}
            <div className="modal-footer">
              <button
                className="btn-cancel"
                onClick={closeModal}
                disabled={saving}
              >
                Cancel
              </button>

              {/* Save button */}
              <button
                className="btn-save"
                onClick={handleSave}
                disabled={saving}
              >
                {saving
                  ? "⏳ Saving..."
                  : editingProduct
                    ? "✅ Update Product"
                    : "✅ Add Product"}
              </button>
            </div>
          </div>
        </div>
      )}

      {adjustingProduct && (
        <div className="modal-overlay">
          <div className="modal" style={{ maxWidth: "420px" }}>
            <div className="modal-header">
              <h2 className="modal-title">📦 Adjust Stock</h2>
              <button className="modal-close" onClick={closeAdjustModal}>
                ✕
              </button>
            </div>

            <div
              style={{
                background: "#f8fafc",
                borderRadius: "8px",
                padding: "12px 14px",
                marginBottom: "20px",
                fontSize: "13px",
              }}
            >
              <strong>{adjustingProduct.name}</strong>
              <div style={{ color: "#64748b", marginTop: "4px" }}>
                Current stock: {adjustingProduct.stock} units
              </div>
            </div>

            {adjustError && <div className="form-error">⚠️ {adjustError}</div>}

            <div className="form-group">
              <label className="form-label">
                Adjustment Amount <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="number"
                placeholder="e.g. 5 or -3"
                value={adjustAmount}
                onChange={(e) => {
                  setAdjustAmount(e.target.value);
                  if (adjustError) setAdjustError("");
                }}
                step="1"
              />
              <p className="form-hint">
                Use a positive number to ADD stock (e.g. found extra items), or
                a negative number to REMOVE stock (e.g. damaged, lost, stolen)
              </p>
            </div>

            <div className="form-group">
              <label className="form-label">
                Reason <span className="required">*</span>
              </label>
              <input
                className="form-input"
                type="text"
                placeholder="e.g. Damaged goods, Stock count correction"
                value={adjustReason}
                onChange={(e) => {
                  setAdjustReason(e.target.value);
                  if (adjustError) setAdjustError("");
                }}
              />
            </div>

            {adjustAmount && !Number.isNaN(parseInt(adjustAmount)) && (
              <div
                style={{
                  background:
                    parseInt(adjustAmount) >= 0 ? "#dcfce7" : "#fee2e2",
                  borderRadius: "8px",
                  padding: "10px 14px",
                  fontSize: "13px",
                  marginBottom: "16px",
                  color: parseInt(adjustAmount) >= 0 ? "#16a34a" : "#dc2626",
                  fontWeight: 600,
                }}
              >
                New stock will be:{" "}
                {adjustingProduct.stock + (parseInt(adjustAmount) || 0)} units
              </div>
            )}

            <div className="modal-footer">
              <button
                className="btn-cancel"
                onClick={closeAdjustModal}
                disabled={adjustSaving}
              >
                Cancel
              </button>
              <button
                className="btn-save"
                onClick={handleStockAdjust}
                disabled={adjustSaving}
              >
                {adjustSaving ? "⏳ Saving..." : "✅ Confirm Adjustment"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
