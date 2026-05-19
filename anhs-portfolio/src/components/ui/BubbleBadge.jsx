import { motion } from 'framer-motion';
import { bubblePop } from '../../app/motionConfig';

export default function BubbleBadge({ children, className = '', delay = 0 }) {
  return (
    <motion.span
      variants={bubblePop}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, type: 'spring', stiffness: 300 }}
      className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--deep-aqua)]/10 text-[var(--deep-aqua)] text-base font-medium border border-[var(--deep-aqua)]/20 ${className}`}
    >
      {children}
    </motion.span>
  );
}
