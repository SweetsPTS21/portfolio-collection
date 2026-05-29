import { motion } from "framer-motion";
import { pageTransition } from "../../app/motionConfig";

export function StationTransition({ children }) {
  return (
    <motion.div
      className="station-transition"
      initial={pageTransition.initial}
      animate={pageTransition.animate}
      exit={pageTransition.exit}
      transition={pageTransition.transition}
    >
      {children}
    </motion.div>
  );
}

