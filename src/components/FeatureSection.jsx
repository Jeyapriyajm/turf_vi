"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./FeatureSection.css";
import {
  Calendar,
  Clock,
  Users,
  CheckCircle,
  Layers,
  FileText,
} from "lucide-react";

const FeatureSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      icon: <Calendar className="feature-icon" />,
      title: "Easy Booking",
      content:
        "Book your preferred turf slot with just a few clicks. Our intuitive interface makes scheduling games effortless.",
      number: "01",
      color: "#FF6B35",
    },
    {
      icon: <Clock className="feature-icon" />,
      title: "Real-time Availability",
      content:
        "Check live availability of all turfs and instantly secure your preferred time slot.",
      number: "02",
      color: "#4ECDC4",
    },
    {
      icon: <Users className="feature-icon" />,
      title: "Team Management",
      content:
        "Create and manage your teams, invite players, and organize matches all in one place.",
      number: "03",
      color: "#FF9F1C",
    },
    {
      icon: <CheckCircle className="feature-icon" />,
      title: "Instant Confirmation",
      content:
        "Receive immediate booking confirmations and reminders for your upcoming games.",
      number: "04",
      color: "#7B68EE",
    },
    {
      icon: <Layers className="feature-icon" />,
      title: "Multiple Turf Options",
      content:
        "Choose from various turf types and locations based on your sport and preferences.",
      number: "05",
      color: "#3A86FF",
    },
    {
      icon: <FileText className="feature-icon" />,
      title: "Custom Forms",
      content:
        "Create personalized forms to capture exactly the information you need for bookings.",
      number: "06",
      color: "#8AC926",
    },
  ];

  return (
    <section className="feature-section">
      {/* Animated background */}
      <div className="animated-bg">
        <div className="light-beam light-beam-1"></div>
        <div className="light-beam light-beam-2"></div>
        <div className="light-beam light-beam-3"></div>
        <div className="particles"></div>
      </div>

      <div className="container">
        <AnimatedHeader />

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              content={feature.content}
              number={feature.number}
              color={feature.color}
              index={index}
              isHovered={hoveredCard === index}
              setHovered={() => setHoveredCard(index)}
              clearHovered={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedHeader = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  const title = "KEY  FEATURES";

  return (
    <div ref={ref} className="header-container">
      <h2 className="section-title">{title}</h2>

      <motion.div
        className="title-underline"
        initial={{ width: 0 }}
        animate={isInView ? { width: "180px" } : { width: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
      />

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        Experience premium turf booking with our cutting-edge platform
      </motion.p>
    </div>
  );
};

const FeatureCard = ({
  icon,
  title,
  content,
  number,
  color,
  index,
  isHovered,
  setHovered,
  clearHovered,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: { duration: 0.3, type: "spring", stiffness: 300 },
    },
  };

  const contentVariants = {
    rest: { y: 0 },
    hover: { y: -5, transition: { duration: 0.3, ease: "easeOut" } },
  };

  const numberVariants = {
    rest: { scale: 1, x: 0 },
    hover: {
      scale: 1.2,
      x: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const accentVariants = {
    rest: { width: "40px" },
    hover: { width: "100%", transition: { duration: 0.4, ease: "easeOut" } },
  };

  const glowVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 0.7, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="feature-card-container"
      onMouseEnter={setHovered}
      onMouseLeave={clearHovered}
      style={{ "--card-color": color }}
    >
      <motion.div
        className="feature-card"
        initial="rest"
        animate={isHovered ? "hover" : "rest"}
      >
        <motion.div className="card-glow" variants={glowVariants} />

        {/* Number indicator */}
        <motion.div className="card-number" variants={numberVariants}>
          {number}
        </motion.div>

        {/* Icon */}
        <motion.div
          className="icon-container"
          variants={iconVariants}
          style={{ backgroundColor: color }}
        >
          {icon}
          <div className="icon-shadow"></div>
        </motion.div>

        {/* Content */}
        <motion.div variants={contentVariants}>
          <h3 className="card-title">{title}</h3>
          <p className="card-content">{content}</p>
        </motion.div>

        {/* Bottom accent */}
        <motion.div
          className="card-accent"
          variants={accentVariants}
          style={{ backgroundColor: color }}
        ></motion.div>

        {/* 3D effect elements */}
        <div className="card-shine"></div>
        <div className="card-shadow"></div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureSection;
