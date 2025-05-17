import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // Ensure styles are properly defined

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://papayawhip-leopard-797027.hostingersite.com/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (data.token) {
        setToken(data.token);
        localStorage.setItem("token", data.token);
        setError("");
        window.location.href =
          "https://papayawhip-leopard-797027.hostingersite.com/";
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred while logging in.", err);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>

        {error && <p className="error-msg">{error}</p>}
        {token && <p className="success-msg">Token saved!</p>}

        <div className="auth-options">
          <button
            type="button"
            className="link-btn"
            onClick={() => alert("Reset Password")}
          >
            Forgot Password?
          </button>
          <button
            type="button"
            className="link-btn"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </div>
      </div>

      <div className="auth-triangle login-triangle" />
    </div>
  );
}

export default LoginPage;
