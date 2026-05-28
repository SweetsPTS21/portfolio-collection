// src/components/ui/NoteCard.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { noteCardVariants } from "../../app/motionConfig";

export function NoteCard({
  children,
  className = "",
  colorType = "paper", // paper, mist, sky, mint
  randomRotate = true,
  rotateAngle,
  ...props
}) {
  // Memoize rotation angle to prevent wiggling on each re-render
  const angle = useMemo(() => {
    if (rotateAngle !== undefined) return rotateAngle;
    if (!randomRotate) return 0;
    // Generate a subtle rotation between -2 and +2 degrees
    return Math.random() * 4 - 2;
  }, [randomRotate, rotateAngle]);

  const bgStyle = useMemo(() => {
    switch (colorType) {
      case "mist":
        return "var(--lan-bg-mist)";
      case "sky":
        return "var(--lan-sky)";
      case "mint":
        return "var(--lan-mint)";
      case "paper":
      default:
        return "var(--lan-bg-paper)";
    }
  }, [colorType]);

  return (
    <motion.div
      variants={noteCardVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`noteCard ${className}`}
      style={{
        background: bgStyle,
        borderRadius: "16px",
        border: "1.5px solid var(--lan-border)",
        boxShadow: "0 8px 20px var(--lan-shadow)",
        padding: "24px",
        position: "relative",
        rotate: `${angle}deg`,
        transformOrigin: "center center",
        cursor: "default",
      }}
      {...props}
    >
      {/* Hand-drawn adhesive paper tape/note-tack visual decoration */}
      <div
        className="noteTack"
        style={{
          position: "absolute",
          top: "-10px",
          left: "50%",
          transform: "translateX(-50%) rotate(-1deg)",
          width: "70px",
          height: "22px",
          background: "rgba(255, 255, 255, 0.65)",
          backdropFilter: "blur(2px)",
          border: "1px dashed var(--lan-border)",
          borderRadius: "2px",
          opacity: 0.8,
          pointerEvents: "none",
        }}
      />
      {children}
    </motion.div>
  );
}
