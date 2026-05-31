import React from "react";
import { motion } from "framer-motion";
import paperClip from "../../assets/azure-courtroom-brief/evidence-card-frames.svg";

export default function LegalBriefCard({ children, className = "", delay = 0, style = {} }) {
  return (
    <motion.div
      className={`legal-ruled-paper ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.215, 0.61, 0.355, 1], // Cubic-out easing
      }}
      style={{
        ...style,
      }}
    >
      {/* Decorative binder punch holes */}
      <div 
        style={{
          position: "absolute",
          top: "40px",
          left: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "80px",
          pointerEvents: "none",
          opacity: 0.8
        }}
      >
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#EDF8FF", border: "1.5px solid var(--sky-border)" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#EDF8FF", border: "1.5px solid var(--sky-border)" }} />
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#EDF8FF", border: "1.5px solid var(--sky-border)" }} />
      </div>

      {/* Realistic Paper Clip Visual (glowing blue) */}
      <div
        style={{
          position: "absolute",
          top: "8px",
          right: "24px",
          width: "48px",
          height: "48px",
          pointerEvents: "none",
          transform: "rotate(-10deg) translateY(-5px)",
          opacity: 0.85,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
          <path 
            d="M 30 70 L 30 30 C 30 15, 60 15, 60 30 L 60 75 C 60 85, 45 85, 45 75 L 45 35 C 45 30, 52 30, 52 35 L 52 70" 
            stroke="var(--legal-blue)" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
      </div>

      {/* Main card content */}
      <div style={{ paddingLeft: "30px", position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </motion.div>
  );
}
