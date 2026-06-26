import { useState, useEffect, useCallback } from "react";
import axios from "axios";

// User roles
const ROLES = ["admin", "cashier", "manager"];

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [saving, setSaving] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "cashier",
  });

  const fetchUsers = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      setUsers(res.data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (formError) setFormError("");
  };

  const openAddModal = () => {
    setEditingUser(null);
    setFormData({ name: "", email: "", password: "", role: "cashier" });
    setFormError("");
    setShowModal(true);
  };

  const openEditModal = (user) => {
    setEditingUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      password: "",

      role: user.role,
    });
    setFormError("");
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingUser(null);
    setFormError("");
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setFormError("Name is required");
      return false;
    }
    if (!formData.email.trim()) {
      setFormError("Email is required");
      return false;
    }
    if (!editingUser && !formData.password) {
      setFormError("Password is required for new users");
      return false;
    }
    if (formData.password && formData.password.length < 6) {
      setFormError("Password must be at least 6 characters");
      return false;
    }
    return true;
  };

  const handleSave = async () => {
    if (!validateForm()) return;
    setSaving(true);

    try {
      if (editingUser) {
        const data = {
          name: formData.name.trim(),
          email: formData.email.trim(),
          role: formData.role,
        };

        if (formData.password) {
          data.password = formData.password;
        }
        await axios.put(
          `http://localhost:5000/api/users/${editingUser.id}`,
          data,
        );
      } else {
        await axios.post("http://localhost:5000/api/users/register", {
          name: formData.name.trim(),
          email: formData.email.trim(),
          password: formData.password,
          role: formData.role,
        });
      }
      closeModal();
      fetchUsers();
    } catch (error) {
      console.error("Save user error:", error);
      setFormError(error.response?.data?.error || "Failed to save user");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (user) => {
    const currentUser = JSON.parse(localStorage.getItem("user") || "{}");
    if (user.id === currentUser.id) {
      alert("You can't delete your own account!");
      return;
    }
    if (!window.confirm(`Delete user "${user.name}"?`)) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${user.id}`);
      fetchUsers();
    } catch (error) {
      alert("Failed to delete user");
    }
  };

  const getRoleColor = (role) => {
    if (role === "admin") return { bg: "#fef3c7", color: "#92400e" };
    if (role === "manager") return { bg: "#ede9fe", color: "#5b21b6" };
    return { bg: "#dcfce7", color: "#166534" };
  };

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
        ⏳ Loading users...
      </div>
    );

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {/* TOP BAR */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 700, color: "#1e293b" }}>
            👥 User Management
            <span
              style={{
                fontSize: "14px",
                fontWeight: "normal",
                color: "#94a3b8",
                marginLeft: "8px",
              }}
            >
              ({users.length} users)
            </span>
          </h1>
          <button
            onClick={openAddModal}
            style={{
              padding: "10px 20px",
              background: "#2563eb",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            ➕ Add User
          </button>
        </div>

        {/* USERS GRID */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
          }}
        >
          {users.map((user) => {
            const roleStyle = getRoleColor(user.role);
            return (
              <div
                key={user.id}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "20px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {/* Avatar + name */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "50%",
                      background: "#2563eb",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      fontWeight: 700,
                      flexShrink: 0,
                    }}
                  >
                    {user.name[0].toUpperCase()}
                  </div>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: "#1e293b",
                        fontSize: "15px",
                      }}
                    >
                      {user.name}
                    </div>
                    <div style={{ fontSize: "13px", color: "#64748b" }}>
                      {user.email}
                    </div>
                  </div>
                </div>

                {/* Role badge */}
                <div>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: 600,
                      background: roleStyle.bg,
                      color: roleStyle.color,
                      textTransform: "capitalize",
                    }}
                  >
                    {user.role === "admin"
                      ? "👑"
                      : user.role === "manager"
                        ? "📋"
                        : "💼"}{" "}
                    {user.role}
                  </span>
                </div>

                {/* Joined date */}
                <div style={{ fontSize: "12px", color: "#94a3b8" }}>
                  Joined:{" "}
                  {new Date(user.createdAt).toLocaleDateString("en-KE", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>

                {/* Actions */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    paddingTop: "8px",
                    borderTop: "1px solid #f1f5f9",
                  }}
                >
                  <button
                    onClick={() => openEditModal(user)}
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
                    ✏️ Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user)}
                    style={{
                      flex: 1,
                      padding: "8px",
                      background: "#fee2e2",
                      color: "#dc2626",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "12px",
                      fontWeight: 600,
                      cursor: "pointer",
                    }}
                  >
                    🗑️ Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              padding: "32px",
              width: "100%",
              maxWidth: "440px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <h2
                style={{ fontSize: "20px", fontWeight: 700, color: "#1e293b" }}
              >
                {editingUser ? "✏️ Edit User" : "➕ Add New User"}
              </h2>
              <button
                onClick={closeModal}
                style={{
                  background: "#f1f5f9",
                  border: "none",
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  cursor: "pointer",
                  fontSize: "16px",
                }}
              >
                ✕
              </button>
            </div>

            {formError && (
              <div
                style={{
                  background: "#fee2e2",
                  color: "#dc2626",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  fontSize: "13px",
                  marginBottom: "16px",
                }}
              >
                ⚠️ {formError}
              </div>
            )}

            {/* Name */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                Full Name *
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                type="text"
                name="name"
                placeholder="e.g. John Kamau"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                Email Address *
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                type="email"
                name="email"
                placeholder="e.g. john@shop.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div style={{ marginBottom: "16px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                Password {editingUser ? "(leave blank to keep current)" : "*"}
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                  boxSizing: "border-box",
                }}
                type="password"
                name="password"
                placeholder={
                  editingUser
                    ? "Leave blank to keep current"
                    : "Min 6 characters"
                }
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            {/* Role */}
            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "6px",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: "#374151",
                }}
              >
                Role *
              </label>
              <select
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "8px",
                  fontSize: "14px",
                  outline: "none",
                }}
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="cashier">💼 Cashier — POS only</option>
                <option value="admin">👑 Admin — Full access</option>
              </select>
              <p
                style={{ fontSize: "11px", color: "#94a3b8", marginTop: "4px" }}
              >
                {formData.role === "admin"
                  ? "👑 Admin can see all reports, profits, salaries and manage everything"
                  : "💼 Cashier can only access POS, their sales, daily expenses and cash count"}
              </p>
            </div>

            {/* Buttons */}
            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={closeModal}
                disabled={saving}
                style={{
                  flex: 1,
                  padding: "11px",
                  background: "#f1f5f9",
                  color: "#64748b",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                style={{
                  flex: 2,
                  padding: "11px",
                  background: "#2563eb",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  opacity: saving ? 0.7 : 1,
                }}
              >
                {saving
                  ? "⏳ Saving..."
                  : editingUser
                    ? "✅ Update User"
                    : "✅ Create User"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Users;
