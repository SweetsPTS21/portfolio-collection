import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="site-footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <div className="site-footer__brand">
        <Sparkles size={15} />
        <span>Trịnh Thị Thúy Nhung</span>
      </div>
      <span className="site-footer__meta">
        Portfolio · Nhập môn Công nghệ số & Ứng dụng AI · 2026
      </span>
    </motion.footer>
  );
}
