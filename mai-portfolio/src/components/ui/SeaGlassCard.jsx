import { motion } from "motion/react";
import { cardHover } from "../../app/motionConfig.js";

export default function SeaGlassCard({ children, className = "" }) {
  return (
    <motion.article whileHover={cardHover} className={`sea-card ${className}`}>
      {children}
    </motion.article>
  );
}
