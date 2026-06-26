import { Outlet, NavLink, useNavigate } from "react-router-dom";
import "./CashierLayout.css";

function CashierLayout() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="cashier-layout">
      <div className="cashier-header">
        {/* Left - shop name */}
        <div className="cashier-header-left">
          <h1 className="cashier-shop-name">🛒 SmartPOS</h1>
        </div>

        {/* Center - navigation */}
        <nav className="cashier-nav">
          <NavLink
            to="/pos"
            className={({ isActive }) =>
              isActive ? "cashier-nav-link active" : "cashier-nav-link"
            }
          >
            🖥️ POS
          </NavLink>

          <NavLink
            to="/my-sales"
            className={({ isActive }) =>
              isActive ? "cashier-nav-link active" : "cashier-nav-link"
            }
          >
            🧾 My Sales
          </NavLink>

          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              isActive ? "cashier-nav-link active" : "cashier-nav-link"
            }
          >
            💸 Expenses
          </NavLink>

          
          <NavLink
            to="/reconciliation"
            className={({ isActive }) =>
              isActive ? "cashier-nav-link active" : "cashier-nav-link"
            }
          >
            💰 Cash Count
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              isActive ? "cashier-nav-link active" : "cashier-nav-link"
            }
          >
            ❓ Help
          </NavLink>
        </nav>

        {/* Right - user + logout */}
        <div className="cashier-header-right">
          <div className="cashier-user-info">
            <div className="cashier-avatar">
              {user.name ? user.name[0].toUpperCase() : "C"}
            </div>
            <div>
              <div className="cashier-name">{user.name}</div>
              <div className="cashier-role">Cashier</div>
            </div>
          </div>
          <button className="cashier-logout" onClick={handleLogout}>
            🚪 Logout
          </button>
        </div>
      </div>

      <main className="cashier-main">
        <Outlet />
      </main>
    </div>
  );
}

export default CashierLayout;
