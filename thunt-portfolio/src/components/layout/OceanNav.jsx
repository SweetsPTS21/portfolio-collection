import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Waves, BookOpen, Anchor, Feather, Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { to: '/',           label: 'Bờ Biển',     icon: Anchor,   title: 'Trang giới thiệu — Ocean Intro' },
  { to: '/projects',   label: 'Nhật Ký',     icon: BookOpen, title: 'Dự án — Diary Projects' },
  { to: '/reflection', label: 'Suy Ngẫm',   icon: Feather,  title: 'Tổng kết — Shore Reflection' },
];

export default function OceanNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      role="banner"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 'var(--z-nav)',
        padding: scrolled ? 'var(--space-2) var(--space-6)' : 'var(--space-4) var(--space-6)',
        transition: 'padding var(--transition-base), background var(--transition-base)',
      }}
    >
      {/* Nav dock */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        aria-label="Main navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          maxWidth: 900,
          margin: '0 auto',
          padding: 'var(--space-3) var(--space-6)',
          background: scrolled
            ? 'rgba(238,249,255,0.90)'
            : 'rgba(251,254,255,0.75)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderRadius: 'var(--radius-full)',
          border: '1.5px solid rgba(191,234,248,0.7)',
          boxShadow: scrolled
            ? '0 8px 32px rgba(47,143,200,0.15), 0 2px 8px rgba(24,56,74,0.08)'
            : '0 4px 16px rgba(124,205,242,0.18)',
        }}
      >
        {/* Logo/brand */}
        <NavLink
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', textDecoration: 'none' }}
          aria-label="Trang chủ"
          id="nav-logo"
        >
          <motion.div whileHover={{ rotate: 15 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Waves size={22} color="var(--color-ocean-blue)" strokeWidth={2.5} />
          </motion.div>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--weight-bold)',
              fontSize: 'var(--text-base)',
              color: 'var(--color-deep-navy)',
              letterSpacing: '-0.01em',
            }}
          >
            Thu<span style={{ color: 'var(--color-ocean-blue)' }}>.</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul
          role="list"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            listStyle: 'none',
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {NAV_ITEMS.map(({ to, label, icon: Icon, title }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                id={`nav-${label.toLowerCase().replace(/\s/g, '-')}`}
                title={title}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  padding: 'var(--space-2) var(--space-4)',
                  borderRadius: 'var(--radius-full)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: 'var(--text-sm)',
                  color: isActive ? 'var(--color-deep-blue)' : 'var(--color-deep-navy)',
                  background: isActive ? 'rgba(124,205,242,0.2)' : 'transparent',
                  border: isActive ? '1.5px solid var(--color-ocean-blue)' : '1.5px solid transparent',
                  transition: 'all var(--transition-base)',
                })}
              >
                {({ isActive }) => (
                  <>
                    <Icon size={16} strokeWidth={isActive ? 2.5 : 2} />
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-dot"
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: '50%',
                          background: 'var(--color-ocean-blue)',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-toggle"
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="nav-mobile-toggle"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 'var(--space-2)',
            color: 'var(--color-deep-navy)',
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 'var(--space-6)',
              right: 'var(--space-6)',
              background: 'rgba(238,249,255,0.97)',
              backdropFilter: 'blur(16px)',
              borderRadius: 'var(--radius-xl)',
              border: '1.5px solid rgba(191,234,248,0.7)',
              boxShadow: 'var(--shadow-lg)',
              padding: 'var(--space-4)',
              zIndex: 200,
              marginTop: 'var(--space-2)',
            }}
            id="nav-mobile-menu"
          >
            {NAV_ITEMS.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-3)',
                  padding: 'var(--space-3) var(--space-4)',
                  borderRadius: 'var(--radius-lg)',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 'var(--weight-semibold)',
                  fontSize: 'var(--text-base)',
                  color: isActive ? 'var(--color-deep-blue)' : 'var(--color-deep-navy)',
                  background: isActive ? 'rgba(124,205,242,0.15)' : 'transparent',
                  marginBottom: 'var(--space-1)',
                })}
              >
                <Icon size={18} />
                {label}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 640px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
