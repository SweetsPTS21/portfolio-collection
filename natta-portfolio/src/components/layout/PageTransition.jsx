import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, filter: 'blur(8px)', scale: 0.96 },
  animate: { opacity: 1, filter: 'blur(0px)', scale: 1 },
  exit: { opacity: 0, filter: 'blur(4px)', scale: 1.02 },
};

const pageTransition = {
  duration: 0.6,
  ease: [0.4, 0, 0.2, 1],
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
}
