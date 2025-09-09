import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isAuth = localStorage.getItem("auth") === "true";

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <nav style={{
      display: "flex",
      gap: "1rem",
      padding: "0.75rem 1rem",
      borderBottom: "1px solid #ddd",
      alignItems: "center"
    }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>

      <div style={{ marginLeft: "auto" }}>
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
