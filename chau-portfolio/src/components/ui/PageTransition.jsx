import { motion } from "framer-motion";

export default function PageTransition({ children, className = "" }) {
  return (
    <motion.section
      className={`page-card ${className}`}
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
