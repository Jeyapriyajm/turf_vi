import { Link } from "react-router-dom";
import "./Footer.css";
import { LogoImage2, Logo } from "../assets";

const Footer = () => {
  // Define Quick Links with internal paths
  const quickLinks = [
    { text: "Book a Turf", path: "/demopage" },
    { text: "Turf Owner Login", path: "https://turfvi.app/sign-in-tenants/" },
    { text: "Player Login", path: "/player-login" },
    { text: "My Bookings", path: "https://turfvi.app/turf-customer-panel/" },
    { text: "FAQs", path: "/faqs" },
    { text: "Contact Us", path: "/contact-us" },
    { text: "About Us", path: "/aboutus" },
  ];

  // Define Terms & Policies with external URLs
  const policyLinks = [
    { text: "Privacy Policy", url: "https://turfvi.com/privacy-policy" },
    { text: "Terms & Conditions", url: "https://turfvi.com/terms" },
    {
      text: "Refund & Cancellation Policy",
      url: "https://turfvi.com/refund-policy",
    },
    { text: "Cookie Policy", url: "https://turfvi.com/cookie-policy" },
    { text: "Disclaimer", url: "https://turfvi.com/disclaimer" },
    { text: "User Agreement", url: "https://turfvi.com/user-agreement" },
  ];

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
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      {link.text}
                      <span className="link-underline"></span>
                    </Link>
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
                {policyLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.url}
                      className="footer-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.text}
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
            <a
              href="https://www.facebook.com/turfvi"
              className="social-icon facebook"
              aria-label="Follow us on Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://wa.me/1234567890"
              className="social-icon whatsapp"
              aria-label="Contact us on WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://twitter.com/turfvi"
              className="social-icon twitter"
              aria-label="Follow us on Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/turfvi"
              className="social-icon instagram"
              aria-label="Follow us on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/turfvi"
              className="social-icon linkedin"
              aria-label="Follow us on LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.youtube.com/channel/turfvi"
              className="social-icon youtube"
              aria-label="Subscribe to our YouTube channel"
              target="_blank"
              rel="noopener noreferrer"
            >
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
