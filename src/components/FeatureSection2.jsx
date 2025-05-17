// In this component that acts as a tab,
// clicking on a tab will redirect to the tab's image or the specific text associated with it.

import React, { useState } from "react";
import "./FeatureSection2.css";

// Import Images from the assets folder.
// import sectionImage from "../assets/section2.png";

// import Dta from feature.js

import { tabsData } from "../Data/features";

function FeatureSection2() {
  const [activeTab, setActiveTab] = useState(1); // Default to first tab

  return (
    <div className="feature-section2">
      {/* Header Section */}
      <div className="header-container">
        <div className="text-container">
          <h2>
            <span className="primary-color1">OUR FEATURE </span>
            <span className="secondary-color">COLLECTION</span>
          </h2>
          <p>
            Booknetic WordPress appointment booking plugin matches the booking
            needs of Booknetic WordPress appointment booking plugin matches
          </p>
        </div>
      </div>

      {/* Display Selected Image and Content */}
      <div className="image-content">
        <img
          src={tabsData.find((tab) => tab.id === activeTab).imageUrl}
          alt="Selected"
          className="selected-image"
        />
        <p className="tab-content">
          {tabsData.find((tab) => tab.id === activeTab).content}
        </p>
      </div>

      {/* Move Tab Section BELOW the image and content */}
      <div className="tabs-container">
        {tabsData.map((tab) => (
          <button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FeatureSection2;
