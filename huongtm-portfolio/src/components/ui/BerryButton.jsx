import React from "react";
import { motion } from "framer-motion";

export const BerryButton = ({
  children,
  className = "",
  onClick,
  type = "button",
  variant = "primary",
  icon,
  style = {},
}) => {
  const isPrimary = variant === "primary";

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    background: isPrimary ? "var(--huong-pink)" : "var(--huong-mint)",
    color: "var(--huong-text)",
    border: "2.5px solid var(--huong-text)",
    borderRadius: "999px",
    padding: "10px 24px",
    fontFamily: "'Quicksand', sans-serif",
    fontWeight: "500",
    fontSize: "1.05rem",
    cursor: "pointer",
    boxShadow: "0 6px 0 var(--huong-text)",
    transition: "box-shadow 0.1s ease, transform 0.1s ease",
    ...style,
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      style={buttonStyle}
      className={className}
      whileHover={{
        y: -2,
        boxShadow: "0 8px 0 var(--huong-text)",
      }}
      whileTap={{
        y: 6,
        boxShadow: "0 0px 0 var(--huong-text)",
      }}
    >
      {icon && <span style={{ display: "flex", alignItems: "center" }}>{icon}</span>}
      {children}
    </motion.button>
  );
};
