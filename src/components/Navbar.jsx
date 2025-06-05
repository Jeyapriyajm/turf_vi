import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, User, Users } from "lucide-react";
import "./Navbar.css";
import { one } from "../assets/index";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [registerDropdown, setRegisterDropdown] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setLoginDropdown(false);
    setRegisterDropdown(false);
  };

  const toggleDropdown = (type) => {
    if (type === "login") {
      setLoginDropdown(!loginDropdown);
      setRegisterDropdown(false);
    } else if (type === "register") {
      setRegisterDropdown(!registerDropdown);
      setLoginDropdown(false);
    }
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

          {/* Mobile Auth Dropdowns */}
          <li className="mobile-auth-only">
            <div className="dropdown mobile-dropdown">
              <button
                className="mobile-auth-btn mobile-login"
                onClick={() => toggleDropdown("login")}
              >
                Player Login{" "}
                <ChevronDown
                  className={`dropdown-arrow ${loginDropdown ? "open" : ""}`}
                  size={18}
                />
              </button>
              {loginDropdown && (
                <div className="dropdown-content show">
                  <a
                    href="https://turfvi.app/customer-sign-in/"
                    onClick={closeMenu}
                  >
                    <User size={16} style={{ marginRight: 6 }} />
                    Player Login
                  </a>
                  <a
                    href="https://turfvi.app/customer-sign-up/"
                    onClick={closeMenu}
                  >
                    <Users size={16} style={{ marginRight: 6 }} />
                    Player Register
                  </a>
                </div>
              )}
            </div>
            <div className="dropdown mobile-dropdown">
              <button
                className="mobile-auth-btn mobile-register"
                onClick={() => toggleDropdown("register")}
              >
                Owner Login{" "}
                <ChevronDown
                  className={`dropdown-arrow ${registerDropdown ? "open" : ""}`}
                  size={18}
                />
              </button>
              {registerDropdown && (
                <div className="dropdown-content show">
                  <a
                    href="https://turfvi.app/sign-in-tenants/"
                    onClick={closeMenu}
                  >
                    <User size={16} style={{ marginRight: 6 }} />
                    Owner Login
                  </a>
                  <a
                    href="https://turfvi.app/sign-up-tenants/"
                    onClick={closeMenu}
                  >
                    <Users size={16} style={{ marginRight: 6 }} />
                    Owner Regiter
                  </a>
                </div>
              )}
            </div>
          </li>
        </ul>

        {/* Right Side Icons */}
        <div className="navbar-right">
          <div className="desktop-auth">
            <div
              className="dropdown"
              onMouseEnter={() => setLoginDropdown(true)}
              onMouseLeave={() => setLoginDropdown(false)}
            >
              <button className="login-btn">
                Player Login{" "}
                <ChevronDown
                  className={`dropdown-arrow ${loginDropdown ? "open" : ""}`}
                  size={18}
                />
              </button>
              {loginDropdown && (
                <div className="dropdown-content show">
                  <a
                    href="https://turfvi.app/customer-sign-in/"
                    onClick={closeMenu}
                  >
                    <User size={16} style={{ marginRight: 6 }} />
                    Player Login
                  </a>
                  <a
                    href="https://turfvi.app/customer-sign-up/"
                    onClick={closeMenu}
                  >
                    <Users size={16} style={{ marginRight: 6 }} />
                    Player Register
                  </a>
                </div>
              )}
            </div>
            <div
              className="dropdown"
              onMouseEnter={() => setRegisterDropdown(true)}
              onMouseLeave={() => setRegisterDropdown(false)}
            >
              <button className="register-btn">
                Owner Login{" "}
                <ChevronDown
                  className={`dropdown-arrow ${registerDropdown ? "open" : ""}`}
                  size={18}
                />
              </button>
              {registerDropdown && (
                <div className="dropdown-content show">
                  <a
                    href="https://turfvi.app/sign-in-tenants/"
                    onClick={closeMenu}
                  >
                    <User size={16} style={{ marginRight: 6 }} />
                    Owner Login
                  </a>
                  <a
                    href="https://turfvi.app/sign-up-tenants/"
                    onClick={closeMenu}
                  >
                    <Users size={16} style={{ marginRight: 6 }} />
                    Owner Register
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
