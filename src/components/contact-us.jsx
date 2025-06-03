"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  Users,
  Zap,
  Star,
} from "lucide-react";
import "./contact.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper" role="main">
      <div className="contact-background-animation" aria-hidden="true">
        <div className="contact-orb-1"></div>
        <div className="contact-orb-2"></div>
        <div className="contact-orb-3"></div>
        <div className="contact-orb-4"></div>
        <div className="contact-orb-5"></div>
      </div>

      <div className="contact-content-main">
        <section className="contact-hero" aria-labelledby="contact-hero-title">
          <div className="contact-hero-badge">
            <MessageCircle
              className="contact-hero-badge-icon"
              aria-hidden="true"
            />
            Let's Connect & Create Magic
          </div>
          <h1 id="contact-hero-title" className="contact-hero-title">
            Get In Touch
          </h1>
          <p className="contact-hero-description">
            We're here to support you 24/7. Whether you're managing a team,
            organizing a tournament, or just planning a quick match with
            friends, the TURF VI team is ready to assist. Reach out to us for
            inquiries, support, partnerships, or feedback let’s make your turf
            experience seamless and exceptional. <br />
          </p>
        </section>

        <section className="contact-stats" aria-label="Company Statistics">
          <div className="contact-stat-card contact-stat-card-1">
            <div className="contact-stat-icon contact-stat-icon-1">
              <Users className="contact-icon" aria-hidden="true" />
            </div>
            <div className="contact-stat-number">500+</div>
            <div className="contact-stat-label">Happy Clients</div>
          </div>
          <div className="contact-stat-card contact-stat-card-2">
            <div className="contact-stat-icon contact-stat-icon-2">
              <Zap className="contact-icon" aria-hidden="true" />
            </div>
            <div className="contact-stat-number">24h</div>
            <div className="contact-stat-label">Response Time</div>
          </div>
          <div className="contact-stat-card contact-stat-card-3">
            <div className="contact-stat-icon contact-stat-icon-3">
              <Star className="contact-icon" aria-hidden="true" />
            </div>
            <div className="contact-stat-number">5.0</div>
            <div className="contact-stat-label">Average Rating</div>
          </div>
        </section>

        <div className="contact-content-section">
          <section
            className="contact-form-container"
            aria-labelledby="contact-form-title"
          >
            <div className="contact-form-header">
              <h2 id="contact-form-title" className="contact-form-title">
                Send us a message
              </h2>
              <p className="contact-form-description">
                Tell us about your colorful project and we'll get back to you
                within 24 hours.
              </p>
              {submitStatus === "success" && (
                <p className="contact-form-success" role="alert">
                  Thank you for your message! We'll get back to you soon.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="contact-form-error" role="alert">
                  An error occurred. Please try again later.
                </p>
              )}
            </div>
            <div className="contact-form-content">
              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name" className="contact-form-label">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="contact-form-input"
                      aria-required="true"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email" className="contact-form-label">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="contact-form-input"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="subject" className="contact-form-label">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What is this regarding?"
                    className="contact-form-input"
                    aria-required="true"
                  />
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message" className="contact-form-label">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="More Details...."
                    rows={6}
                    className="contact-form-textarea"
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit-button"
                  disabled={isSubmitting}
                >
                  <Send className="contact-icon" aria-hidden="true" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </section>

          <aside
            className="contact-sidebar"
            aria-label="Contact Information and Call to Action"
          >
            <div className="contact-info-container">
              <div className="contact-info-header">
                <h3 className="contact-info-title">Contact Info</h3>
                <p className="contact-info-subtitle">
                  Multiple colorful ways to reach us
                </p>
              </div>
              <div className="contact-info-content">
                <div className="contact-info-item">
                  <div className="contact-info-icon contact-info-icon-1">
                    <Mail className="contact-icon" aria-hidden="true" />
                  </div>
                  <div className="contact-info-details">
                    <h3>Email</h3>
                    <p>
                      <a href="mailto:hello@turfvi.com">hello@turfvi.com</a>
                    </p>
                    <p>
                      <a href="mailto:support@turfvi.com">support@turfvi.com</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon contact-info-icon-2">
                    <Phone className="contact-icon" aria-hidden="true" />
                  </div>
                  <div className="contact-info-details">
                    <h3>Phone</h3>
                    <p>
                      <a href="tel:+15551234567">+1 (555) 123-4567</a>
                    </p>
                    <p>
                      <a href="tel:+15559876543">+1 (555) 987-6543</a>
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon contact-info-icon-3">
                    <MapPin className="contact-icon" aria-hidden="true" />
                  </div>
                  <div className="contact-info-details">
                    <h3>Office</h3>
                    <p>
                      Jaffna ,
                      <br />
                      Sri Lanka
                      <br />
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon contact-info-icon-4">
                    <Clock className="contact-icon" aria-hidden="true" />
                  </div>
                  <div className="contact-info-details">
                    <h3>Hours</h3>
                    <p>
                      Mon-Fri: 9:00 AM - 6:00 PM
                      <br />
                      Sat: 10:00 AM - 4:00 PM
                      <br />
                      Sun: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-cta-container">
              <div className="contact-cta-icon">
                <MessageCircle className="contact-icon" aria-hidden="true" />
              </div>
              <h3 className="contact-cta-title">Need Immediate Help?</h3>
              <p className="contact-cta-description">
                For urgent colorful projects, call us directly and we'll assist
                you right away with our creative solutions.
              </p>
              <a href="tel:+15551234567" className="contact-cta-button">
                Call Now
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
