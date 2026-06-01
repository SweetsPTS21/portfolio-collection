import React from 'react';
import { motion } from 'framer-motion';

export default function ChipBucket({ items }) {
  return (
    <div className="chip-bucket">
      {items.map((item, index) => (
        <motion.span
          key={item}
          initial={{ opacity: 0, y: 14, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.035 }}
          whileHover={{ y: -4, rotate: index % 2 ? -2 : 2 }}
        >
          {item}
        </motion.span>
      ))}
    </div>
  );
}
