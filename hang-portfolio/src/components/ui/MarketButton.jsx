import { motion } from 'framer-motion';

export default function MarketButton({ href, children, variant = 'primary' }) {
  return (
    <motion.a
      className={`market-button market-button-${variant}`}
      href={href}
      whileHover={{ y: -3, scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
    >
      <span className="button-icon" aria-hidden="true" />
      {children}
    </motion.a>
  );
}
