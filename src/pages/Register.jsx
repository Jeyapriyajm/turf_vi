// File: RegisterPage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css"; // or "./AuthPage.css" if you're separating styles

function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    alert("Registered!");
  };

  return (
    <div className="auth-container">
      <div class="glow-circle glow1"></div>
      <div class="glow-circle glow2"></div>

      <div className="auth-form">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Username" required />
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Register</button>
        </form>
        <div className="auth-options">
          <button
            type="button"
            className="link-btn"
            onClick={() => navigate("/")}
          >
            Back to Login
          </button>
        </div>
      </div>
      <div className="auth-triangle register-triangle" />
    </div>
  );
}

export default RegisterPage;
