import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import POS from "./pages/POS";
import Products from "./pages/Products";
import Expenses from "./pages/Expenses";
import Sales from "./pages/Sales";
import Purchases from "./pages/Purchases";
import Suppliers from "./pages/Suppliers";
import Returns from "./pages/Returns";
import CashReconciliation from "./pages/CashReconciliation";
import MyCashierSales from "./pages/MyCashierSales";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminRoute from "./components/AdminRoute";
import Users from "./pages/Users";
import DangerZone from "./pages/DangerZone";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<SmartRedirect />} />

          {/* ── SHARED ROUTES ── */}

          <Route path="pos" element={<POS />} />
          <Route path="my-sales" element={<MyCashierSales />} />
          <Route path="reconciliation" element={<CashReconciliation />} />
          <Route path="expenses" element={<Expenses />} />

          {/* ── ADMIN ONLY ROUTES ── */}
          <Route
            path="dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          />
          <Route
            path="products"
            element={
              <AdminRoute>
                <Products />
              </AdminRoute>
            }
          />
          <Route
            path="sales"
            element={
              <AdminRoute>
                <Sales />
              </AdminRoute>
            }
          />
          <Route
            path="purchases"
            element={
              <AdminRoute>
                <Purchases />
              </AdminRoute>
            }
          />
          <Route
            path="suppliers"
            element={
              <AdminRoute>
                <Suppliers />
              </AdminRoute>
            }
          />
          <Route
            path="returns"
            element={
              <AdminRoute>
                <Returns />
              </AdminRoute>
            }
          />
          <Route
            path="users"
            element={
              <AdminRoute>
                <Users />
              </AdminRoute>
            }
          />

          <Route
            path="danger-zone"
            element={
              <AdminRoute>
                <DangerZone />
              </AdminRoute>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/login" />} />;
      </Routes>
    </BrowserRouter>
  );
}

function SmartRedirect() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user.role === "cashier") {
    return <Navigate to="/pos" />;
  }
  return <Navigate to="/dashboard" />;
}

export default App;
