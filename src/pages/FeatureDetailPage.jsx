import React from "react";
import { useParams } from "react-router-dom";
import { features } from "../Data/features";
import HeroSection from "../components/HeroSection";
// import Page3Image from "../assets/Page3.jpg";
import { Page3Image } from "../assets";
import "../App.css";
import FeatureCards from "../components/FeatureCards";

const FeatureDetailPage = () => {
  const { featureId } = useParams();
  const feature = features.find((f) => f.id === featureId);

  if (!feature) {
    return <h2 className="error-message">Feature not found!</h2>;
  }

  return (
    <div className="text-center p-6">
      {/* Hero Section */}
      <HeroSection backgroundImage={Page3Image} headerText="TURF&nbsp; VI" />

      <div className="feature-detail-container">
        {/* Header with Icon and Title */}
        <div className="feature-header">
          <div className="feature-detail-icon">
            <i className={feature.icon}></i>
          </div>
          <h1 className="feature-title">{feature.title}</h1>
        </div>

        {/* Alternating Content */}
        <div className="feature-content">
          {feature.content.map((item, index) => (
            <div
              key={index}
              className={`content-block ${
                index % 2 === 0 ? "left-image" : "right-image"
              }`}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={`Feature section ${index + 1}`}
                  className="feature-image"
                />
              )}
              {item.text && <p>{item.text}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Feature Cards & Footer */}
      <section className="feature-section-container">
        <FeatureCards />
      </section>
    </div>
  );
};

export default FeatureDetailPage;
