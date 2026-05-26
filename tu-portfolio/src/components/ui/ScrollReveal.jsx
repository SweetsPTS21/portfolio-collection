import { motion, useReducedMotion } from 'framer-motion';
import { motionConfig } from '../../app/motionConfig.js';

export default function ScrollReveal({ as = 'div', className, delay = 0, children }) {
  const Component = motion[as] || motion.div;
  const prefersReducedMotion = useReducedMotion();

  return (
    <Component
      className={className}
      variants={motionConfig.revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        ...motionConfig.defaultTransition,
        delay: prefersReducedMotion ? 0 : delay,
      }}
    >
      {children}
    </Component>
  );
}
