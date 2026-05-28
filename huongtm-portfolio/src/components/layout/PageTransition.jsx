import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../../app/motionConfig";

export const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};
