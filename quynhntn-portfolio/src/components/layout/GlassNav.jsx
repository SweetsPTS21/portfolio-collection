import { NavLink } from 'react-router-dom';
import { Home, FolderOpen, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { path: '/', label: 'Giới thiệu', Icon: Home },
  { path: '/projects', label: 'Dự án', Icon: FolderOpen },
  { path: '/summary', label: 'Tổng kết', Icon: Sparkles },
];

export default function GlassNav() {
  return (
    <>
      {/* Desktop nav */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex gap-2 px-3 py-2 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 4px 24px rgba(255, 182, 217, 0.1)',
        }}
      >
        {navItems.map(({ path, label, Icon }) => (
          <NavLink key={path} to={path}>
            {({ isActive }) => (
              <motion.div
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-white/20 shadow-[0_0_15px_rgba(255,142,199,0.3)]'
                    : 'hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon
                  size={20}
                  className={isActive ? 'text-pastel-pink' : 'text-text-secondary'}
                />
                <span
                  className={`text-base font-heading font-semibold ${
                    isActive ? 'text-text-primary' : 'text-text-secondary'
                  }`}
                >
                  {label}
                </span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Mobile bottom nav */}
      <nav
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex md:hidden gap-1 px-3 py-2 rounded-full"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.25)',
          boxShadow: '0 4px 24px rgba(255, 182, 217, 0.12)',
        }}
      >
        {navItems.map(({ path, label, Icon }) => (
          <NavLink key={path} to={path}>
            {({ isActive }) => (
              <motion.div
                className={`flex flex-col items-center px-4 py-1.5 rounded-full transition-all ${
                  isActive
                    ? 'bg-white/20 shadow-[0_0_12px_rgba(255,142,199,0.3)]'
                    : 'hover:bg-white/10'
                }`}
                whileTap={{ scale: 0.9 }}
              >
                <Icon
                  size={22}
                  className={isActive ? 'text-pastel-pink' : 'text-text-secondary'}
                />
                <span className="text-xs font-heading font-medium text-text-secondary mt-0.5">
                  {label}
                </span>
              </motion.div>
            )}
          </NavLink>
        ))}
      </nav>
    </>
  );
}
