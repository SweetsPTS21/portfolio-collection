import { AnimatePresence, motion } from 'framer-motion';
import { NavLink, Route, Routes, useLocation } from 'react-router-dom';
import { CheckCircle2, FolderKanban, ScrollText } from 'lucide-react';
import EasternStageBackground from './components/background/EasternStageBackground.jsx';
import AboutPage from './routes/AboutPage.jsx';
import ProjectsPage from './routes/ProjectsPage.jsx';
import ConclusionPage from './routes/ConclusionPage.jsx';
import { useLenis } from './hooks/useLenis.js';

const navItems = [
  { to: '/', label: 'About', icon: ScrollText },
  { to: '/projects', label: 'Projects', icon: FolderKanban },
  { to: '/conclusion', label: 'Conclusion', icon: CheckCircle2 },
];

function Header() {
  return (
    <header className="site-header" aria-label="Điều hướng chính">
      <a className="brand-mark" href="/" aria-label="Đào Việt An portfolio">
        <span>ANDV</span>
      </a>
      <nav className="route-nav">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `route-link${isActive ? ' active' : ''}`}>
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

function AnimatedPage({ children }) {
  return (
    <motion.main
      className="page-shell"
      initial={{ opacity: 0, y: 18, filter: 'blur(10px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -14, filter: 'blur(8px)' }}
      transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.main>
  );
}

export default function App() {
  useLenis();
  const location = useLocation();

  return (
    <div className="app-root">
      <EasternStageBackground />
      <Header />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
          <Route path="/projects" element={<AnimatedPage><ProjectsPage /></AnimatedPage>} />
          <Route path="/conclusion" element={<AnimatedPage><ConclusionPage /></AnimatedPage>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
