import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../../app/motionConfig";

export function Page({ className = "", children }) {
  return (
    <motion.section
      className={`page ${className}`}
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.section>
  );
}
