// src/components/layout/PageTransition.jsx
import React from "react";
import { motion } from "framer-motion";
import { pageTransitionVariants } from "../../app/motionConfig";

export function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageTransitionVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{
        width: "100%",
        minHeight: "calc(100vh - 80px)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {children}
    </motion.div>
  );
}
