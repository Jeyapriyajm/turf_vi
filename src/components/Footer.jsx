import {
  Facebook,
  MessageCircle,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import "./Footer.css";
import { LogoImage2, Logo } from "../assets";

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-content">
          {/* Logo and Description */}
          <div className="footer-nav-column footer-logo-column">
            <div className="footer-logo-wrapper">
              <img src={Logo} alt="TURF VI Logo" className="footer-main-logo" />
            </div>
            <p className="footer-description">
              TURF VI is your all-in-one platform for seamless turf bookings,
              team management, and premium sports experiences
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="footer-nav">
            {/* Quick Links */}
            <div className="footer-nav-column">
              <h3 className="footer-heading">
                Quick links
                <span className="heading-underline"></span>
              </h3>
              <ul className="footer-links">
                {[
                  "Book a Turf",
                  "Turf Owner Login",
                  "Player Login",
                  "My Bookings",
                  "FAQs",
                  "Contact Us",
                  "About Us",
                ].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      {link}
                      <span className="link-underline"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Terms & Policies */}
            <div className="footer-nav-column">
              <h3 className="footer-heading">
                Our Terms & Policies
                <span className="heading-underline"></span>
              </h3>
              <ul className="footer-links">
                {[
                  "Privacy Policy",
                  "Terms & Conditions",
                  "Refund & Cancellation Policy",
                  "Cookie Policy",
                  "Disclaimer",
                  "User Agreement",
                ].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="footer-link">
                      {link}
                      <span className="link-underline"></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Divider Section */}
      <div className="footer-divider-section">
        <div className="footer-logo-divider">
          <div className="footer-secondary-logo">
            <img
              src={LogoImage2}
              alt="TURF VI Logo"
              className="footer-logo-img"
            />
          </div>
          <div className="footer-divider"></div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          {/* Copyright */}
          <div className="footer-copyright">
            <p>© 2025 TURF VI. All Rights Reserved.</p>
          </div>

          {/* Social Media Icons */}
          <div className="footer-social-media">
            <a href="#" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon whatsapp">
              <i className="fab fa-whatsapp"></i>
            </a>
            <a href="#" className="social-icon twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="social-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="social-icon youtube">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="animated-background">
        <div className="animated-circle circle-1"></div>
        <div className="animated-circle circle-2"></div>
        <div className="animated-circle circle-3"></div>
      </div>
    </footer>
  );
};

export default Footer;
