"use client";
import { useEffect } from "react";
import "./Feature3.css";
import { HockeyImage, TableTennisImage } from "../assets/index.js";
import { featureData } from "../Data/features";

const Feature3 = ({ features = featureData }) => {
  useEffect(() => {
    const animateValue = (obj, start, end, duration) => {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);

        if (obj) {
          if (obj.dataset.format === "percentage") {
            obj.innerHTML = value + "%";
          } else {
            obj.innerHTML = value + "+";
          }
        }

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll(".tf3-stat-value");
          counters.forEach((counter) => {
            const value = counter.dataset.format === "percentage" ? 98 : 500;
            animateValue(counter, 0, value, 2000);
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });
    const statsSection = document.querySelector(".tf3-stats-container");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
    };
  }, []);

  return (
    <div className="tf3-feature-wrapper">
      {features.map((feature) => (
        <div key={feature.id} className="tf3-feature-container">
          {/* Hero Banner Section */}
          <div className="tf3-hero-section">
            <div className="tf3-hero-background">
              <div className="tf3-hero-overlay"></div>
              <div className="tf3-hero-pattern"></div>
              <div className="tf3-hero-diagonal"></div>
            </div>

            <div className="tf3-hero-content">
              <div className="tf3-hero-text-container">
                <div className="tf3-hero-badge">Premium Quality</div>
                <h1 className="tf3-hero-title">{feature.title}</h1>
                <h2 className="tf3-hero-subtitle">{feature.subtitle}</h2>
                <div className="tf3-hero-description">
                  Transforming sports facilities with cutting-edge artificial
                  turf technology
                </div>
                <div className="tf3-hero-buttons">
                  <button className="tf3-hero-button tf3-primary">
                    Explore Solutions
                  </button>
                  <button className="tf3-hero-button tf3-secondary">
                    Contact Us
                  </button>
                </div>
              </div>

              <div className="tf3-hero-image-container">
                <div className="tf3-hero-image-wrapper">
                  <img
                    src={HockeyImage}
                    alt={feature.title}
                    className="tf3-hero-image"
                  />
                  <div className="tf3-hero-image-accent"></div>
                </div>
                <div className="tf3-hero-image-dots"></div>
              </div>
            </div>

            <div className="tf3-hero-wave">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
                <path
                  fill="#f8fafc"
                  fillOpacity="1"
                  d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
                ></path>
              </svg>
            </div>
          </div>

          {/* Stats Section */}
          {feature.stats && (
            <div className="tf3-stats-container">
              {feature.stats.map((stat, index) => (
                <div key={index} className="tf3-stat-item">
                  <div
                    className="tf3-stat-value"
                    data-value={stat.value.replace(/\D/g, "")}
                    data-format={
                      stat.value.includes("%") ? "percentage" : "plus"
                    }
                  >
                    0
                  </div>
                  <div className="tf3-stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* About Section */}
          <div className="tf3-about-section">
            <div className="tf3-about-container">
              <div className="tf3-about-image-container">
                <div className="tf3-about-image-wrapper">
                  <img
                    src={TableTennisImage}
                    alt="Sports field with artificial turf"
                    className="tf3-about-image"
                  />
                  <div className="tf3-about-image-accent"></div>
                </div>
                <div className="tf3-about-image-card">
                  <div className="tf3-about-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
                    </svg>
                  </div>
                  <div className="tf3-about-card-content">
                    <div className="tf3-about-card-title">
                      Expert Installation
                    </div>
                    <div className="tf3-about-card-text">
                      Professional team with specialized equipment
                    </div>
                  </div>
                </div>
              </div>

              <div className="tf3-about-content">
                <div className="tf3-section-badge">About Us</div>
                <h2 className="tf3-section-title">Why Choose Turf VI?</h2>

                <div className="tf3-about-text">
                  {feature.content.map((para, idx) => (
                    <p key={idx} className="tf3-about-paragraph">
                      {para}
                    </p>
                  ))}
                </div>

                <div className="tf3-features-list">
                  {feature.list.map((item, idx) => (
                    <div key={idx} className="tf3-feature-item">
                      <div className="tf3-feature-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z" />
                        </svg>
                      </div>
                      <div className="tf3-feature-text">{item}</div>
                    </div>
                  ))}
                </div>

                <div className="tf3-about-cta">
                  <button className="tf3-cta-button">
                    <span>Schedule a Consultation</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Section 
          <div className="tf3-testimonial-section">
            <div className="tf3-testimonial-diagonal"></div>
            <div className="tf3-testimonial-container">
              <div className="tf3-testimonial-quote">"</div>
              <div className="tf3-testimonial-content">
                Turf VI transformed our sports facility with their premium
                artificial turf. The quality and durability are exceptional, and
                our athletes love playing on it. The installation was
                professional and completed ahead of schedule.
              </div>
              <div className="tf3-testimonial-author">
                <div className="tf3-testimonial-avatar"></div>
                <div className="tf3-testimonial-info">
                  <div className="tf3-testimonial-name">Michael Johnson</div>
                  <div className="tf3-testimonial-position">
                    Athletic Director, Central Sports Academy
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
        </div>
      ))}
    </div>
  );
};

export default Feature3;
