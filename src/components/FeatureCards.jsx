// This component showin the features of turf vi and the sea more button navigate the specific page of
// turf vi features and the the see more feature button navigate to the the feature page of turg vi

import React from "react";
import "./FeatureCards.css";
import { features } from "../Data/features";
import FeatureCard from "../components/FeatureCard";

const FeatureCards = () => {
  const randomFeatures = features.sort(() => Math.random() - 0.5).slice(0, 6);
  return (
    <div className="feature-cards-wrapper">
      <h2 className="feature-cards-heading">
        <span className="primary-heading-color">TURF VI </span>
        <span className="secondary-heading-color">FEATURES</span>
      </h2>

      <div className="feature-cards-list">
        {/* Dynamically render feature cards */}
        {randomFeatures.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center">
        <button
          className="see-more-button2"
          onClick={() => (window.location.href = "/all-features-page")}
        >
          See More Features
        </button>
      </div>
    </div>
  );
};

// Make sure to pass the `features` array as a prop when rendering the component
export default function App() {
  return <FeatureCards features={features} />;
}
