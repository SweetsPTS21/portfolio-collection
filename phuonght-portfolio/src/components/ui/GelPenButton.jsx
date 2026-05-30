import React from 'react';
import { motion } from 'framer-motion';

export default function GelPenButton({ children, onClick, className = '', type = 'button', href, download }) {
  const isLink = !!href;
  const Component = isLink ? 'a' : 'button';

  const props = isLink 
    ? { href, download, className: `spell-action primary ${className}` } 
    : { onClick, type, className: `spell-action primary ${className}` };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ display: 'inline-block' }}
    >
      <Component {...props}>
        {children}
      </Component>
    </motion.div>
  );
}
