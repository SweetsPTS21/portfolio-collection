import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Music, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { path: '/', label: 'About' },
  { path: '/projects', label: 'Projects' },
  { path: '/conclusion', label: 'Conclusion' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '12px 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '3px solid transparent',
        borderImage: 'var(--gradient-accent) 1',
      }}
    >
      {/* Logo — boxed */}
      <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div
          style={{
            width: 36,
            height: 36,
            background: 'var(--gradient-accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Music size={18} color="white" strokeWidth={2.5} />
        </div>
        <span
          style={{
            fontFamily: "'Baloo 2', sans-serif",
            fontSize: 20,
            fontWeight: 700,
            color: 'var(--color-text)',
          }}
        >
          P.Anh
        </span>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: 28, alignItems: 'center' }} className="nav-links">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                textDecoration: 'none',
                fontWeight: 600,
                fontSize: 15,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                position: 'relative',
                paddingBottom: 4,
              }}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="nav-indicator"
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    background: 'var(--color-primary)',
                  }}
                />
              )}
            </Link>
          );
        })}
      </div>

      {/* Mobile toggle */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 4,
        }}
        className="nav-toggle"
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={24} color="var(--color-text)" /> : <MenuIcon size={24} color="var(--color-text)" />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'white',
              padding: '20px 32px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              borderBottom: '3px solid transparent',
              borderImage: 'var(--gradient-accent) 1',
              boxShadow: '0 8px 32px rgba(45, 32, 64, 0.08)',
            }}
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  textDecoration: 'none',
                  fontWeight: 600,
                  fontSize: 16,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: location.pathname === item.path ? 'var(--color-primary)' : 'var(--color-text)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-links { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
