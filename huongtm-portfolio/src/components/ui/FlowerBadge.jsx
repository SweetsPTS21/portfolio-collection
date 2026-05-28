import React from "react";

export const FlowerBadge = ({ text, style = {} }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "6px",
        background: "var(--huong-bg-blush)",
        border: "2px solid var(--huong-border)",
        borderRadius: "14px",
        padding: "6px 14px",
        fontSize: "0.9rem",
        fontWeight: "600",
        fontFamily: "'Nunito', sans-serif",
        color: "var(--huong-text)",
        boxShadow: "0 2px 8px var(--huong-shadow)",
        ...style,
      }}
    >
      {/* Tiny flower icon */}
      <svg viewBox="0 0 100 100" width="16" height="16" style={{ flexShrink: 0 }}>
        <circle cx="50" cy="50" r="14" fill="#FFE89A" stroke="#4A2535" strokeWidth="6" />
        <circle cx="25" cy="50" r="12" fill="#FFFFFF" stroke="#4A2535" strokeWidth="5" />
        <circle cx="75" cy="50" r="12" fill="#FFFFFF" stroke="#4A2535" strokeWidth="5" />
        <circle cx="50" cy="25" r="12" fill="#FFFFFF" stroke="#4A2535" strokeWidth="5" />
        <circle cx="50" cy="75" r="12" fill="#FFFFFF" stroke="#4A2535" strokeWidth="5" />
        <circle cx="50" cy="50" r="14" fill="#FFE89A" />
      </svg>
      {text}
    </div>
  );
};
