// ─────────────────────────────────────
// IMPORTS
// ─────────────────────────────────────
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./Expenses.css";

// ─────────────────────────────────────
// CATEGORY LISTS
// ─────────────────────────────────────
const CASHIER_VISIBLE_CATEGORIES = [
  "Utilities",
  "Supplies",
  "Transport",
  "Carriage Outwards",
  "General",
  "Maintenance",
];

const ADMIN_ONLY_CATEGORIES = [
  "Salaries",
  "Rent",
  "Insurance",
  "Bank Charges",
  "Marketing",
  "Licences",
];

// All categories combined — used in admin form
const EXPENSE_CATEGORIES = [
  ...CASHIER_VISIBLE_CATEGORIES,
  ...ADMIN_ONLY_CATEGORIES,
];

function Expenses() {
  // ─────────────────────────────────────
  // GET CURRENT USER ROLE
  // ─────────────────────────────────────
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isCashier = user.role === "cashier";

  // ─────────────────────────────────────
  // STATE
  // ─────────────────────────────────────
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    category: "General",
    amount: "",
    description: "",
  });

  // ─────────────────────────────────────
  // FETCH EXPENSES
  // ─────────────────────────────────────
  const fetchExpenses = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/expenses");
      setExpenses(res.data);
    } catch (error) {
      console.error("Error fetching expenses:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  // ─────────────────────────────────────
  // PERMISSION HELPER
  
  // ─────────────────────────────────────
  const canActOn = (expense) => {
    if (!isCashier) return true;
    return CASHIER_VISIBLE_CATEGORIES.includes(expense.category);
  };

  // ─────────────────────────────────────
  // FILTER EXPENSES
  // Cashier only sees operational categories
  // ─────────────────────────────────────
  const filteredExpenses = expenses.filter((expense) => {
    if (isCashier && !CASHIER_VISIBLE_CATEGORIES.includes(expense.category)) {
      return false;
    }

    const matchesSearch =
      expense.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (expense.description || "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || expense.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  // ─────────────────────────────────────
  // CATEGORY FILTER TABS
  // ─────────────────────────────────────
  const filterCategories = [
    "All",
    ...new Set(
      expenses
        .filter((e) =>
          isCashier ? CASHIER_VISIBLE_CATEGORIES.includes(e.category) : true,
        )
        .map((e) => e.category),
    ),
  ];

  // ─────────────────────────────────────
  // FORM CATEGORY OPTIONS
  // Cashier form only shows their categories
  // Admin form shows all
  // ─────────────────────────────────────
  const EXPENSE_CATEGORIES_FOR_FORM = isCashier
    ? CASHIER_VISIBLE_CATEGORIES
    : EXPENSE_CATEGORIES;

  // ─────────────────────────────────────
  // SUMMARY TOTALS
  // ─────────────────────────────────────
  const totalAllTime = expenses.reduce((sum, e) => sum + e.amount, 0);

  const startOfMonth = new Date(
    new Date().getFullYear(),
    new Date().getMonth(),
    1,
  );

  const totalThisMonth = expenses
    .filter((e) => new Date(e.createdAt) >= startOfMonth)
    .reduce((sum, e) => sum + e.amount, 0);

  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const totalToday = expenses
    .filter((e) => new Date(e.createdAt) >= startOfToday)
    .reduce((sum, e) => sum + e.amount, 0);

  // ─────────────────────────────────────
  // CATEGORY BREAKDOWN
  // ─────────────────────────────────────
  const categoryTotals = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const sortedCategories = Object.entries(categoryTotals).sort(
    (a, b) => b[1] - a[1],
  );

  const maxCategoryAmount =
    sortedCategories.length > 0 ? sortedCategories[0][1] : 1;

  // ─────────────────────────────────────
  // FORM HANDLERS
  // ─────────────────────────────────────
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError("");
  };

  const openAddModal = () => {
    setEditingExpense(null);
    setFormData({
      title: "",
      category: "General",
      amount: "",
      description: "",
    });
    setShowModal(true);
  };

  const openEditModal = (expense) => {
    setEditingExpense(expense);
    setFormData({
      title: expense.title,
      category: expense.category,
      amount: expense.amount.toString(),
      description: expense.description || "",
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingExpense(null);
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setFormError("Title is required");
      return false;
    }
    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      setFormError("Please enter a valid amount greater than 0");
      return false;
    }
    if (!formData.category) {
      setFormError("Please select a category");
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    setSaving(true);
    try {
      const data = {
        title: formData.title.trim(),
        category: formData.category,
        amount: parseFloat(formData.amount),
        description: formData.description.trim() || null,
      };

      if (editingExpense) {
        await axios.put(
          `http://localhost:5000/api/expenses/${editingExpense.id}`,
          data,
        );
      } else {
        await axios.post("http://localhost:5000/api/expenses", data);
      }

      closeModal();
      fetchExpenses();
    } catch (err) {
      // Show the REAL error from the server instead of a generic message
      console.error("Save expense error:", err);
      if (err.response) {
        setFormError(
          err.response.data?.error ||
            `Server error (${err.response.status}). Check the server terminal for details.`,
        );
      } else if (err.request) {
        setFormError(
          "Could not reach the server. Is it running on http://localhost:5000?",
        );
      } else {
        setFormError(err.message || "Failed to save expense");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (expense) => {
    if (!window.confirm(`Delete "${expense.title}"?`)) return;
    try {
      await axios.delete(`http://localhost:5000/api/expenses/${expense.id}`);
      fetchExpenses();
    } catch (err) {
      console.error("Delete expense error:", err);
      alert(
        err.response?.data?.error ||
          "Failed to delete expense. Check server terminal for details.",
      );
    }
  };

  // ─────────────────────────────────────
  // FORMATTERS
  // ─────────────────────────────────────
  const fmt = (amount) =>
    `KSh ${Number(amount || 0).toLocaleString("en-KE", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-KE", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  if (loading) return <div className="loading">Loading...</div>;

  // ─────────────────────────────────────
  // UI
  // ─────────────────────────────────────
  return (
    <div className="expenses-page">
      {/* TOPBAR */}
      <div className="expenses-topbar">
        <h1 className="expenses-title">
          💸 {isCashier ? "Today's Expenses" : "Expenses"}
          <span
            style={{
              fontSize: "14px",
              fontWeight: "normal",
              color: "#94a3b8",
              marginLeft: "8px",
            }}
          >
            ({filteredExpenses.length} records)
          </span>
        </h1>

       
        <button className="btn-add-expense" onClick={openAddModal}>
          ➕ Add Expense
        </button>
      </div>

      {/* CATEGORY FILTER TABS */}
      <div className="category-tabs">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* SEARCH */}
      <div className="expenses-search">
        <input
          type="text"
          placeholder="Search expenses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <div className="expenses-table-card">
        <table className="expenses-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  style={{
                    textAlign: "center",
                    padding: "2rem",
                    color: "#94a3b8",
                  }}
                >
                  No expenses found
                </td>
              </tr>
            ) : (
              filteredExpenses.map((expense) => (
                <tr key={expense.id}>
                  <td>{expense.title}</td>
                  <td>{expense.category}</td>
                  <td>{fmt(expense.amount)}</td>
                  <td>{formatDate(expense.createdAt)}</td>
                  <td>
                    
                    {canActOn(expense) && (
                      <button onClick={() => openEditModal(expense)}>✏️</button>
                    )}
                    
                    {canActOn(expense) && (
                      <button onClick={() => handleDelete(expense)}>🗑️</button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL — Add / Edit */}
      {showModal && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{editingExpense ? "Edit Expense" : "Add Expense"}</h2>

            {formError && <p className="form-error">{formError}</p>}

            <input
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
            />

            
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              {EXPENSE_CATEGORIES_FOR_FORM.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              name="amount"
              type="number"
              placeholder="Amount (KSh)"
              value={formData.amount}
              onChange={handleChange}
            />

            <textarea
              name="description"
              placeholder="Description (optional)"
              value={formData.description}
              onChange={handleChange}
            />

            <div className="modal-actions">
              <button onClick={closeModal} disabled={saving}>
                Cancel
              </button>
              <button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : editingExpense ? "Update" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Expenses;
