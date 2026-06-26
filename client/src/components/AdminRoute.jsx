
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (user.role !== "admin") {
    // Not an admin → send to POS
    return <Navigate to="/pos" />;
  }

  // Is admin → show the page!
  return children;
}

export default AdminRoute;
