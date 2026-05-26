import React from "react";
import { motion } from "framer-motion";

/**
 * CloudCard — Glassmorphism card with shimmer, gradient top accent, and colour variants.
 * @param {string}  variant       — "default" | "mint" | "peach" | "gold"
 * @param {boolean} shimmer       — enable shimmer sweep on hover (default true)
 * @param {number}  delay         — stagger delay for entrance animation
 */
export default function CloudCard({
  children,
  className = "",
  variant = "default",
  watermarkSrc = null,
  watermarkAlt = "",
  delay = 0,
}) {
  const variantClass = variant !== "default" ? ` cloud-card--${variant}` : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 280,
        damping: 24,
        delay,
      }}
      whileHover={{
        scale: 1.018,
        y: -5,
        transition: { type: "spring", stiffness: 380, damping: 22 },
      }}
      className={`cloud-card${variantClass} ${className}`}
    >
      {/* Decorative Translucent Watermark Image */}
      {watermarkSrc && (
        <img
          src={watermarkSrc}
          className="cloud-card-watermark"
          alt={watermarkAlt}
          aria-hidden="true"
        />
      )}

      {children}
    </motion.div>
  );
}
