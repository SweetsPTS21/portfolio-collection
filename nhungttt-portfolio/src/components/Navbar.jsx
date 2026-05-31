import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const pages = [
  { id: 'home', label: 'Trang chính' },
  { id: 'projects', label: 'Dự án' },
  { id: 'conclusion', label: 'Kết luận' },
];

export default function Navbar({ activePage, onPageChange }) {
  return (
    <motion.nav
      className="site-nav"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="site-nav__brand">
        <Sparkles size={18} />
        <span>Thúy Nhung</span>
      </div>
      <div className="site-nav__links">
        {pages.map((page) => (
          <motion.button
            key={page.id}
            className={activePage === page.id ? 'is-active' : undefined}
            onClick={() => onPageChange(page.id)}
            whileHover={{ y: -2 }}
            type="button"
            aria-current={activePage === page.id ? 'page' : undefined}
          >
            {page.label}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
