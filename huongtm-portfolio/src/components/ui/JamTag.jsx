import React from "react";

export const JamTag = ({ chapter, variant = "pink", style = {} }) => {
  const getColors = () => {
    switch (variant) {
      case "mint":
        return { bg: "var(--huong-mint)", text: "var(--huong-text)" };
      case "yellow":
        return { bg: "var(--huong-yellow)", text: "var(--huong-text)" };
      default:
        return { bg: "var(--huong-pink)", text: "var(--huong-text)" };
    }
  };

  const colors = getColors();

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "54px",
        height: "54px",
        borderRadius: "50%",
        background: "var(--huong-bg-surface)",
        border: "3.5px solid var(--huong-text)",
        boxShadow: "3px 3px 0 var(--huong-text)",
        fontFamily: "'Quicksand', sans-serif",
        fontWeight: "700",
        fontSize: "1.2rem",
        color: colors.text,
        position: "relative",
        ...style,
      }}
    >
      {/* Inner dotted border */}
      <div
        style={{
          position: "absolute",
          top: "3px",
          left: "3px",
          right: "3px",
          bottom: "3px",
          border: "2px dashed var(--huong-border)",
          borderRadius: "50%",
        }}
      />
      {/* Colored middle circle */}
      <div
        style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: colors.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
        }}
      >
        {chapter}
      </div>
    </div>
  );
};
