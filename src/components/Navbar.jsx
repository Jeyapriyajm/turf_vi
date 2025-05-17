import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//import { useCart } from "../context/CartContext";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import "./Navbar.css";
import { one } from "../assets/index";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  {
    /* const { cartItems } = useCart();
const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);*/
  }

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sports-navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <NavLink to="/" onClick={closeMenu}>
            <img src={one} alt="Logo" />
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <div className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutus"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className="dropdown">
            <NavLink
              to="/features"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Features
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Pricing
            </NavLink>
          </li>
          {/*<li className="dropdown">
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={closeMenu}
            >
              Shop
            </NavLink>
            <div className="dropdown-content">
              <NavLink to="/shop/football" onClick={closeMenu}>
                Football
              </NavLink>
              <NavLink to="/shop/basketball" onClick={closeMenu}>
                Basketball
              </NavLink>
              <NavLink to="/shop/running" onClick={closeMenu}>
                Running
              </NavLink>
              <NavLink to="/shop/fitness" onClick={closeMenu}>
                Fitness
              </NavLink>
            </div>
          </li>*/}

          {/* Mobile Auth Buttons */}
          <li className="mobile-auth-only">
            <NavLink
              to="/login"
              className="mobile-auth-btn mobile-login"
              onClick={closeMenu}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="mobile-auth-btn mobile-register"
              onClick={closeMenu}
            >
              Register
            </NavLink>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="navbar-right">
          <div className="desktop-auth">
            <NavLink
              to="https://turfvi.app/sign-in-tenants"
              className="login-btn"
              onClick={closeMenu}
            >
              Login
            </NavLink>
            <NavLink
              to="https://turfvi.app/sign-up-tenants"
              className="register-btn"
              onClick={closeMenu}
            >
              Register
            </NavLink>
          </div>
          {/* <NavLink
            to="/slideCart"
            className="icon-btn cart-icon"
            onClick={closeMenu}
          >
            {" "}
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            <ShoppingBag size={24} />
          </NavLink>*/}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
