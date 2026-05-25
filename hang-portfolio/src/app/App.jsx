import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { defaultRoute, routes } from './routes.js';
import { useLenis } from './lenisSetup.js';
import AboutPage from '../pages/AboutPage.jsx';
import ProjectsPage from '../pages/ProjectsPage.jsx';
import ConclutionsPage from '../pages/ConclutionsPage.jsx';
import BeachMarketBackground from '../features/market-scene/BeachMarketBackground.jsx';
import { personalInfo } from '../data/portfolioData.js';
import { theme } from './theme.js';

const pages = {
  about: AboutPage,
  projects: ProjectsPage,
  conclutions: ConclutionsPage,
};

function normalizePath(pathname) {
  return routes.some((route) => route.path === pathname) ? pathname : defaultRoute.path;
}

export default function App() {
  useLenis();
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    if (window.location.pathname !== pathname) {
      window.history.replaceState({}, '', pathname);
    }

    const handlePopState = () => setPathname(normalizePath(window.location.pathname));
    const handleClick = (event) => {
      const anchor = event.target.closest('a[href^="/"]');
      if (!anchor || anchor.target || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const nextPath = normalizePath(new URL(anchor.href).pathname);
      event.preventDefault();
      window.history.pushState({}, '', nextPath);
      setPathname(nextPath);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      document.removeEventListener('click', handleClick);
    };
  }, [pathname]);

  const activeRoute = useMemo(
    () => routes.find((route) => route.path === pathname) ?? defaultRoute,
    [pathname],
  );
  const ActivePage = pages[activeRoute.id] ?? AboutPage;

  return (
    <div className="beach-market-app" data-theme={theme.id}>
      <BeachMarketBackground />
      <header className="market-header">
        <a className="brand-mark" href="/about" aria-label="Hoàng Thúy Hằng home">
          <span>HH</span>
        </a>
        <nav aria-label="Portfolio routes">
          {routes.map((route) => (
            <a
              key={route.id}
              href={route.path}
              aria-current={route.id === activeRoute.id ? 'page' : undefined}
            >
              {route.label}
            </a>
          ))}
        </nav>
      </header>
      <motion.main
        key={activeRoute.id}
        className="market-main"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
      >
        <ActivePage />
      </motion.main>
      <footer className="market-footer">{personalInfo.footer}</footer>
    </div>
  );
}
