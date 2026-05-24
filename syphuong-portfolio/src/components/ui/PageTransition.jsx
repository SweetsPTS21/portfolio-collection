import { motion, useReducedMotion } from "framer-motion";

export default function PageTransition({ children, className = "", ...props }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
      exit={reduceMotion ? {} : { opacity: 0, y: -14 }}
      transition={{ duration: 0.36, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.main>
  );
}
