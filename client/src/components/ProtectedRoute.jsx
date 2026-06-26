import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import CashierLayout from "./CashierLayout";
import "./ProtectedRoute.css";

function ProtectedRoute() {
  // Check token
  const token = localStorage.getItem("token");

  // Check user role
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // No token = send to login
  if (!token) {
    return <Navigate to="/login" />;
  }

  // CASHIER gets a simpler layout
  // with fewer menu items
  if (user.role === "cashier") {
    return <CashierLayout />;
  }

  // ADMIN gets the full layout
  return (
    <div className="protected-layout">
      <Sidebar />
      <div className="protected-content">
        <Header />
        <main className="protected-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default ProtectedRoute;
