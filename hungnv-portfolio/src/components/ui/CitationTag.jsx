import React from "react";
import { motion } from "framer-motion";

export default function CitationTag({ label, color = "var(--legal-blue)", style = {} }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 12px",
        borderRadius: "4px",
        background: "rgba(30, 120, 200, 0.08)",
        border: `1.5px solid ${color}`,
        color: color,
        fontFamily: "var(--font-body)",
        fontSize: "0.75rem",
        fontWeight: "bold",
        letterSpacing: "1.5px",
        textTransform: "uppercase",
        boxShadow: "0 2px 5px rgba(30, 120, 200, 0.03)",
        ...style,
      }}
    >
      <span style={{ marginRight: "6px" }}>⚖️</span> {label}
    </motion.div>
  );
}
