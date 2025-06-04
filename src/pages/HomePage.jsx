import React from "react";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import FeatureSection2 from "../components/FeatureSection2";
import CategorySection from "../components/CategorySection";
// import page1Image from "../assets/page1.png";
import FeatureCards from "../components/FeatureCards";
import Feature3 from "../components/Feature3";
import ProductCarousel from "../components/ProductCarousel";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import bgImage2 from "../assets/bgImage2.jpg";

const HomePage = () => {
  return (
    <div className="text-center p-6">
      {/* Hero Section */}

      <HeroSection backgroundImage={bgImage2} headerText="TURF&nbsp; VI" />

      {/* Feature Section 1 */}
      <section className="feature-section-container">
        <FeatureSection />
      </section>

      {/* Feature Section 2 
      <section className="feature-section-container">
        <FeatureSection2 />
      </section> */}

      {/* Category Section */}
      <section className="feature-section-container">
        <CategorySection />
      </section>

      {/* Feature Cards Section 
      <section className="feature-section-container">
        <FeatureCards />
      </section>
      <section className="feature-section-container">
        <Feature3 />
      </section>*/}
      <section className="feature-section-container">
        <ProductCarousel />
      </section>
      <section className="feature-section-container">
        <Testimonials />
      </section>
      <section className="feature-section-container">
        <CallToAction />
      </section>
    </div>
  );
};

export default HomePage;
