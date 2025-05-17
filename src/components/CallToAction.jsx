import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-heading">
          THE BEST APPOINTMENT <br />
          <span className="cta-highlight">SEDULING</span>
        </h2>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default CallToAction;
