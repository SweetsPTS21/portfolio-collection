import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, FolderOpen, BookHeart } from 'lucide-react';
import { routes } from '../../app/routeConfig';

const icons = [Home, FolderOpen, BookHeart];

export default function Navbar() {
  return (
    <div className="navbar-shell">
      <motion.nav
        className="navbar glass"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="navbar-brand">
          <span className="navbar-logo">🍓</span>
          <span className="navbar-name">An Na</span>
        </div>
        <ul className="navbar-links">
          {routes.map((route, i) => {
            const Icon = icons[i];
            return (
              <li key={route.path}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? 'nav-link--active' : ''}`
                  }
                >
                  <Icon size={18} />
                  <span>{route.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </motion.nav>

      <style>{`
        .navbar-shell {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
          width: min(90vw, 700px);
        }
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 28px;
          width: 100%;
          gap: 20px;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Comfortaa', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          color: var(--berry-rose);
        }
        .navbar-logo {
          font-size: 1.45rem;
        }
        .navbar-links {
          display: flex;
          list-style: none;
          gap: 6px;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 14px;
          text-decoration: none;
          color: var(--text-secondary);
          font-weight: 600;
          font-size: 0.98rem;
          transition: all 0.3s ease;
        }
        .nav-link:hover {
          color: var(--berry-rose);
          background: rgba(255, 160, 171, 0.1);
        }
        .nav-link--active {
          color: var(--berry-rose);
          background: rgba(255, 160, 171, 0.15);
        }
        @media (max-width: 600px) {
          .navbar-shell {
            width: 95vw;
          }
          .navbar {
            padding: 10px 16px;
          }
          .navbar-name {
            display: none;
          }
          .nav-link span {
            display: none;
          }
          .nav-link {
            padding: 8px 12px;
          }
        }
      `}</style>
    </div>
  );
}
