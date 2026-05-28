// src/components/ui/SealBadge.jsx
import React from "react";
import { motion } from "framer-motion";
import { LegalSealBlue } from "./SvgSceneLayer";
import { sealBadgeVariants } from "../../app/motionConfig";

export function SealBadge({ className = "", size = 70 }) {
  return (
    <motion.div
      variants={sealBadgeVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      className={`sealBadgeWrapper ${className}`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "help",
      }}
    >
      <LegalSealBlue size={size} />
    </motion.div>
  );
}
