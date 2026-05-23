import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const links = ['Về Tôi', 'Dự Án', 'Tổng Kết', 'Tầm nhìn'];

export default function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    const behavior = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches
      ? 'auto'
      : 'smooth';
    if (el) el.scrollIntoView({ behavior });
  };

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
        {links.map((link, i) => (
          <motion.button
            key={link}
            onClick={() =>
              scrollTo(['about', 'projects', 'mindset', 'conclusion'][i])
            }
            whileHover={{ y: -2 }}
            type="button"
          >
            {link}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
}
