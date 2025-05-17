"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { features } from "../Data/features";
import FeatureCard from "../components/FeatureCard";
import HeroSection from "../components/HeroSection";
import { Page2Image } from "../assets";
import "../App.css";

const AllFeaturesPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const headerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="all-feat-page">
      {/* Hero Section */}
      <HeroSection backgroundImage={Page2Image} headerText="TURF VI" />

      <section className="all-feat-section">
        <div className="all-feat-animated-bg">
          <div className="all-feat-light-beam all-feat-light-beam--1"></div>
          <div className="all-feat-light-beam all-feat-light-beam--2"></div>
          <div className="all-feat-light-beam all-feat-light-beam--3"></div>
          <div className="all-feat-particles"></div>
        </div>

        <div className="all-feat-container">
          <motion.div
            ref={ref}
            className="all-feat-header"
            initial="hidden"
            animate={controls}
            variants={headerVariants}
          >
            <h2 className="all-feat-title">
              All <span className="all-feat-title-highlight">Features</span>
            </h2>
            <div className="all-feat-title-underline"></div>
            <p className="all-feat-subtitle">
              Explore the full range of tools that make turf booking seamless
              and exciting
            </p>
          </motion.div>

          <div className="all-feat-grid">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllFeaturesPage;
