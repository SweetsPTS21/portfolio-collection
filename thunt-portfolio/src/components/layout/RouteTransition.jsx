import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const PAGE_VARIANTS = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: 3,
    filter: 'blur(4px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
  },
  exit: {
    opacity: 0,
    y: -16,
    rotateX: -2,
    filter: 'blur(2px)',
  },
};

/**
 * RouteTransition — wraps page content with Framer Motion page-flip animation.
 * Simulates turning a diary page on the ocean background.
 */
export default function RouteTransition({ children }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={PAGE_VARIANTS}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        style={{ perspective: 1200 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
