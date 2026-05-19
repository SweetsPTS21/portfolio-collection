import { motion } from 'framer-motion';

export default function PearlButton({ children, href, className = '', ...props }) {
  const baseClass = `inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[var(--coral-pink)] to-[var(--jellyfish-pink)] text-white font-heading font-semibold shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`;

  const MotionTag = href ? motion.a : motion.button;

  return (
    <MotionTag
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      className={baseClass}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
