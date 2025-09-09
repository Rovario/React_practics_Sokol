import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("auth", "true");
      setLoading(false);
      navigate(from, { replace: true });
    }, 500);
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Натисни кнопку, щоб авторизуватися (для демо локально в localStorage).</p>
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
}
