import "./Header.css";

function Header() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="header">
      <h2 className="header-welcome">Welcome back, {user.name || "User"} 👋</h2>

      <div className="header-user">
        <div className="header-avatar">
          {user.name ? user.name[0].toUpperCase() : "U"}
        </div>
      

      <div>
        <p className="header-name">{user.name}</p>
        <p className="header-role">{user.role}</p>
      </div>
    </div>
    </div>
  );
}

export default Header;
