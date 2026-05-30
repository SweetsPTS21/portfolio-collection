import { useMemo, useState } from 'react';
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from 'framer-motion';
import { pageConfig } from './app/pageConfig.js';
import { motionConfig } from './app/motionConfig.js';
import AppShell from './components/layout/AppShell.jsx';
import AboutPage from './components/pages/AboutPage.jsx';
import ProjectsPage from './components/pages/ProjectsPage.jsx';
import ConclusionPage from './components/pages/ConclusionPage.jsx';

const pages = {
  about: AboutPage,
  projects: ProjectsPage,
  conclusion: ConclusionPage,
};

export default function App() {
  const [activePage, setActivePage] = useState(pageConfig[0].id);
  const prefersReducedMotion = useReducedMotion();
  const ActiveComponent = pages[activePage];

  const transition = useMemo(
    () => (prefersReducedMotion ? { duration: 0.01 } : motionConfig.defaultTransition),
    [prefersReducedMotion],
  );

  return (
    <MotionConfig reducedMotion={motionConfig.reducedMotion}>
      <AppShell activePage={activePage} onNavigate={setActivePage}>
        <AnimatePresence mode="wait">
          <motion.main
            key={activePage}
            className="page-main"
            variants={motionConfig.pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
          >
            <ActiveComponent />
          </motion.main>
        </AnimatePresence>
      </AppShell>
    </MotionConfig>
  );
}
