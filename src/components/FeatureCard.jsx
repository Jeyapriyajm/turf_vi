"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fas);

const FeatureCard = ({ feature, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, rotateX: 10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.25, 0.8, 0.35, 1],
      },
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.15,
      rotate: 8,
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  };

  const contentVariants = {
    rest: { y: 0, opacity: 1 },
    hover: {
      y: -8,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={cardVariants}
      className="feat-card-container"
      whileHover="hover"
      style={{ "--feat-color": feature.color }}
    >
      <motion.div className="feat-card">
        <motion.div
          className="feat-icon-container"
          variants={iconVariants}
          style={{ backgroundColor: feature.color }}
        >
          <FontAwesomeIcon icon={feature.icon} className="feat-icon" />
          <div className="feat-icon-shadow"></div>
        </motion.div>

        <motion.div variants={contentVariants}>
          <h3 className="feat-card-title">{feature.title}</h3>
          <p className="feat-card-content">{feature.description}</p>
        </motion.div>

        <div className="feat-card-number">
          {(index + 1).toString().padStart(2, "0")}
        </div>
        <motion.div
          className="feat-card-accent"
          initial={{ width: "40px" }}
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          style={{ backgroundColor: feature.color }}
        ></motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeatureCard;
