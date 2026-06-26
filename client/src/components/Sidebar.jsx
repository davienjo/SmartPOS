import { NavLink, useNavigate } from "react-router-dom";
import {
  MdDashboard,
  MdPointOfSale,
  MdInventory,
  MdReceipt,
  MdAttachMoney,
  MdShoppingCart,
  MdFactory,
  MdSwapHoriz,
  MdLogout,
  MdCalculate,
  MdPeople,
  MdHelp,
  MdWarning,
} from "react-icons/md";
import "./Sidebar.css";

function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const links = [
    { to: "/dashboard", icon: <MdDashboard size={20} />, label: "Dashboard" },
    { to: "/pos", icon: <MdPointOfSale size={20} />, label: "POS" },
    { to: "/products", icon: <MdInventory size={20} />, label: "Products" },
    { to: "/sales", icon: <MdReceipt size={20} />, label: "Sales" },
    {
      to: "/purchases",
      icon: <MdShoppingCart size={20} />,
      label: "Purchases",
    },
    { to: "/suppliers", icon: <MdFactory size={20} />, label: "Suppliers" },
    { to: "/expenses", icon: <MdAttachMoney size={20} />, label: "Expenses" },
    { to: "/returns", icon: <MdSwapHoriz size={20} />, label: "Returns" },
    {
      to: "/reconciliation",
      icon: <MdCalculate size={20} />,
      label: "Cash Count",
    },
    { to: "/users", icon: <MdPeople size={20} />, label: "Users" },
    { to: "/help", icon: <MdHelp size={20} />, label: "Help / Manual" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h1>🛒 SmartPOS</h1>
        <p>Point of Sale System</p>
      </div>
      <nav className="sidebar-nav">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            {link.icon}
            {link.label}
          </NavLink>
        ))}
      </nav>

      {/* Separated danger zone link — only admin sees this */}
      <div
        style={{
          marginTop: "auto",
          padding: "12px 20px",
          borderTop: "1px solid #334155",
        }}
      >
        <NavLink
          to="/danger-zone"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            color: "#dc2626",
            fontSize: "13px",
            fontWeight: 600,
            textDecoration: "none",
            padding: "8px 0",
          }}
        >
          <MdWarning size={18} />
          Danger Zone
        </NavLink>
      </div>
      <div className="sidebar-bottom">
        <button className="sidebar-logout" onClick={handleLogout}>
          <MdLogout size={20} />
          Logout
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
