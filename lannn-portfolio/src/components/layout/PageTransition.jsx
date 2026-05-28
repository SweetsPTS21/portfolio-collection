import { motion } from "framer-motion";
import { pageTransition } from "../../app/motionConfig";

export function PageTransition({ children, className = "" }) {
  return (
    <motion.section className={`pageTransition ${className}`} {...pageTransition}>
      {children}
    </motion.section>
  );
}
