// src/components/ui/BlueButton.jsx
import React from "react";
import { motion } from "framer-motion";

export function BlueButton({ children, onClick, type = "button", className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      className={`blueButton ${className}`}
      style={{
        background: "var(--lan-blue)",
        color: "#FFFFFF",
        padding: "10px 24px",
        borderRadius: "var(--lan-radius-button, 999px)",
        border: "none",
        fontFamily: "var(--lan-font-body)",
        fontWeight: "bold",
        fontSize: "14px",
        cursor: "pointer",
        boxShadow: "0 4px 14px rgba(46, 134, 193, 0.25)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        transition: "background 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "var(--lan-slate)";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(21, 101, 192, 0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "var(--lan-blue)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(46, 134, 193, 0.25)";
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
