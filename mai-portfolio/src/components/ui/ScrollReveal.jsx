import { motion } from "motion/react";
import { revealProps } from "../../app/motionConfig.js";

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      {...revealProps}
      transition={{ ...revealProps.transition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
