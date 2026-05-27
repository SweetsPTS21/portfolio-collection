import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 35, scale: 0.95 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  },
  exit: { 
    opacity: 0, 
    y: -25, 
    scale: 0.98,
    transition: { duration: 0.25 }
  },
};

export default function PageShell({ eyebrow, title, children }) {
  return (
    <motion.main
      className="page-shell"
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.p 
        className="eyebrow"
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 }
        }}
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        variants={{
          initial: { opacity: 0, y: -20 },
          animate: { opacity: 1, y: 0 }
        }}
      >
        {title}
      </motion.h1>
      {children}
    </motion.main>
  );
}
