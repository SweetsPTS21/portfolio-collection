import React from "react";
import { motion } from "framer-motion";
import { cardVariants } from "../../app/motionConfig";

export const GinghamCard = ({
  children,
  className = "",
  title,
  stickerType = "strawberry",
  badgeText,
  isPaper = true,
  accentType,
  index = 0,
  hoverLift = true,
  onClick,
}) => {
  // Sticker SVGs
  const renderSticker = () => {
    switch (stickerType) {
      case "strawberry":
        return (
          <svg className="wiggle-hover" viewBox="0 0 100 100" width="48" height="48" style={{ pointerEvents: "auto" }}>
            <path d="M 50,85 C 15,80 0,40 0,15 C 0,-10 25,-20 50,-20 C 75,-20 100,-10 100,15 C 100,40 85,80 50,85 Z" fill="#F4A7BE" stroke="#4A2535" strokeWidth="5" />
            <circle cx="30" cy="25" r="4.5" fill="#FFE89A" />
            <circle cx="70" cy="25" r="4.5" fill="#FFE89A" />
            <circle cx="50" cy="15" r="4.5" fill="#FFE89A" />
            <circle cx="40" cy="50" r="4.5" fill="#FFE89A" />
            <circle cx="60" cy="50" r="4.5" fill="#FFE89A" />
            <circle cx="50" cy="70" r="4.5" fill="#FFE89A" />
            <circle cx="50" cy="40" r="5" fill="#FFE89A" />
            {/* Leaves */}
            <path d="M 50,-20 L 30,-30 L 40,-13 L 20,-7 L 45,0 L 50,-23 L 55,0 L 80,-7 L 60,-13 L 70,-30 Z" fill="#A8EDCA" stroke="#4A2535" strokeWidth="3" strokeLinejoin="round" />
            {/* Highlight */}
            <path d="M 20,20 C 20,5 35,0 45,0" fill="none" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round" opacity="0.6" />
          </svg>
        );
      case "flower":
        return (
          <svg className="wiggle-hover" viewBox="0 0 100 100" width="48" height="48" style={{ pointerEvents: "auto" }}>
            <circle cx="50" cy="50" r="16" fill="#FFE89A" stroke="#4A2535" strokeWidth="5" />
            <circle cx="20" cy="50" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="80" cy="50" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="50" cy="20" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="50" cy="80" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="29" cy="29" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="71" cy="71" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="29" cy="71" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="71" cy="29" r="15" fill="#FFFFFF" stroke="#4A2535" strokeWidth="4" />
            <circle cx="50" cy="50" r="16" fill="#FFE89A" />
          </svg>
        );
      case "basket":
        return (
          <svg className="wiggle-hover" viewBox="0 0 100 100" width="48" height="48" style={{ pointerEvents: "auto" }}>
            <ellipse cx="50" cy="80" rx="40" ry="10" fill="#4A2535" fillOpacity="0.1" />
            <path d="M 15,45 C 15,-10 85,-10 85,45" fill="none" stroke="#E8C99A" strokeWidth="8" strokeLinecap="round" />
            <path d="M 15,45 C 15,-10 85,-10 85,45" fill="none" stroke="#4A2535" strokeWidth="4.5" />
            <path d="M 10,45 C 15,80 30,90 50,90 C 70,90 85,80 90,45 Z" fill="#E8C99A" stroke="#4A2535" strokeWidth="4.5" strokeLinejoin="round" />
            <path d="M 25,45 Q 50,55 75,45" fill="none" stroke="#D1A76E" strokeWidth="3" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Accent SVGs at the header
  const renderAccent = () => {
    if (accentType === "ribbon") {
      return (
        <div style={{ position: "absolute", top: "-18px", left: "50%", transform: "translateX(-50%)", pointerEvents: "none", zIndex: 10 }}>
          <svg viewBox="0 0 200 100" width="80" height="40">
            <path d="M 100,50 C 70,20 50,40 70,55 C 80,60 100,50 100,50" fill="#F4A7BE" stroke="#4A2535" strokeWidth="3" strokeLinejoin="round" />
            <path d="M 100,50 C 130,20 150,40 130,55 C 120,60 100,50 100,50" fill="#F4A7BE" stroke="#4A2535" strokeWidth="3" strokeLinejoin="round" />
            <circle cx="100" cy="50" r="8" fill="#FFB8D0" stroke="#4A2535" strokeWidth="3" />
            <path d="M 97,55 Q 85,80 75,85" fill="none" stroke="#4A2535" strokeWidth="3" strokeLinecap="round" />
            <path d="M 103,55 Q 115,80 125,85" fill="none" stroke="#4A2535" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
      );
    }
    if (accentType === "flower") {
      return (
        <div style={{ position: "absolute", top: "-16px", left: "32px", pointerEvents: "none", zIndex: 10 }}>
          <svg viewBox="0 0 100 100" width="36" height="36">
            <circle cx="50" cy="50" r="14" fill="#FFE89A" stroke="#4A2535" strokeWidth="4" />
            <circle cx="25" cy="50" r="12" fill="#FFFFFF" stroke="#4A2535" strokeWidth="3" />
            <circle cx="75" cy="50" r="12" fill="#FFFFFF" stroke="#4A2535" stroke-width="3" />
            <circle cx="50" cy="25" r="12" fill="#FFFFFF" stroke="#4A2535" stroke-width="3" />
            <circle cx="50" cy="75" r="12" fill="#FFFFFF" stroke="#4A2535" stroke-width="3" />
            <circle cx="50" cy="50" r="14" fill="#FFE89A" />
          </svg>
        </div>
      );
    }
    return null;
  };

  const cardStyleClass = `gingham-card gingham-border-box ${isPaper ? "paper-texture" : ""} ${className}`;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate="visible"
      variants={cardVariants}
      whileHover={
        hoverLift
          ? {
              y: -8,
              boxShadow: "0 18px 40px rgba(74, 37, 53, 0.15)",
            }
          : {}
      }
      onClick={onClick}
      className={cardStyleClass}
      style={{ cursor: onClick ? "pointer" : "default" }}
    >
      {/* 1. Accent overlay */}
      {renderAccent()}

      {/* 2. Dotted corner decoration (top right) */}
      <div className="pattern-corner" style={{ top: 12, right: 12, left: "auto" }} />
      <div className="pattern-corner" style={{ bottom: 12, left: 12, top: "auto" }} />

      {/* 3. Sticker placement */}
      {stickerType && (
        <div
          style={{
            position: "absolute",
            top: "-16px",
            right: "-16px",
            zIndex: 15,
            pointerEvents: "none",
          }}
        >
          {renderSticker()}
        </div>
      )}

      {/* 4. Badge rendering */}
      {badgeText && (
        <span
          style={{
            position: "absolute",
            bottom: "16px",
            right: "20px",
            background: "var(--huong-pink-soft)",
            border: "2px solid var(--huong-border)",
            borderRadius: "12px",
            padding: "4px 10px",
            fontSize: "0.8rem",
            fontWeight: "700",
            fontFamily: "Quicksand, sans-serif",
            color: "var(--huong-text)",
          }}
        >
          {badgeText}
        </span>
      )}

      {/* Card Header */}
      {title && (
        <h3
          style={{
            fontSize: "1.45rem",
            marginBottom: "18px",
            borderBottom: "2px dashed var(--huong-pink-muted)",
            paddingBottom: "10px",
            paddingRight: stickerType ? "24px" : "0px",
          }}
        >
          {title}
        </h3>
      )}

      {/* Card Content */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </motion.div>
  );
};
