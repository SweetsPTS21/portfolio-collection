import React from "react";
import { motion } from "framer-motion";

export default function JellyStrengthStrip({ items }) {
  return (
    <section className="two-column" style={{ marginTop: '24px' }}>
      {items.map((item, index) => (
        <motion.article
          className="info-badge"
          key={item}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08, type: "spring", stiffness: 120 }}
          style={{ minHeight: '110px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', border: '1px dashed var(--unicorn-pink)' }}
        >
          <span style={{ fontSize: '1.8rem', fontFamily: 'Quicksand, sans-serif', color: 'var(--unicorn-pink)' }}>
            0{index + 1}
          </span>
          <p style={{ margin: 0, fontWeight: '700', color: 'var(--bubble-indigo)', fontSize: '0.94rem', lineHeight: '1.5' }}>
            {item}
          </p>
        </motion.article>
      ))}
    </section>
  );
}
