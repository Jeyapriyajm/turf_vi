// Footer Component

import React from "react";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

// import LogoImage from "../assets/Logo2.png";
import { LogoImage2 } from "../assets";
const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-nav">
          <div className="footer-nav-column">
            <h3>Section 1</h3>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h3>Section 2</h3>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h3>Section 3</h3>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-column">
            <h3>Section 4</h3>
            <ul>
              <li>
                <a href="#">Link 1</a>
              </li>
              <li>
                <a href="#">Link 2</a>
              </li>
              <li>
                <a href="#">Link 3</a>
              </li>
              <li>
                <a href="#">Link 4</a>
              </li>
              <li>
                <a href="#">Link 5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-logo-divider">
        <div className="footer-logo">
          <img src={LogoImage2} alt="Logo" />
        </div>
        <div className="footer-divider"></div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <p>© 2025 TURF VI. All Rights Reserved.</p>
        </div>
        <div className="footer-social-media">
          <a href="#" className="social-icon facebook">
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </a>
          <a href="#" className="social-icon whatsapp">
            <i className="fab fa-whatsapp"></i> {/* Whatsapp icon */}
          </a>
          <a href="#" className="social-icon twitter">
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a href="#" className="social-icon instagram">
            <i className="fab fa-instagram"></i> {/* Instagram icon */}
          </a>
          <a href="#" className="social-icon linkedin">
            <i className="fab fa-linkedin-in"></i> {/* LinkedIn icon */}
          </a>
          <a href="#" className="social-icon youtube">
            <i className="fab fa-youtube"></i> {/* YouTube icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
