import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import InteractiveBackground from './components/InteractiveBackground';
import About from './pages/About';
import Projects from './pages/Projects';
import Conclusion from './pages/Conclusion';

export default function App() {
  // Simple state router: 'about' | 'projects' | 'conclusion'
  const [currentRoute, setCurrentRoute] = useState(() => {
    const hash = window.location.hash.substring(1);
    if (['about', 'projects', 'conclusion'].includes(hash)) {
      return hash;
    }
    return 'about';
  });

  // Track hash changes for back-forward browser navigation support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (['about', 'projects', 'conclusion'].includes(hash)) {
        setCurrentRoute(hash);
      } else {
        setCurrentRoute('about');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when routing changes inside navbar triggers
  const handleRouteChange = (newRoute) => {
    setCurrentRoute(newRoute);
    window.location.hash = newRoute;
  };

  // Reusable page slide spring transitions
  const pageVariants = {
    initial: { opacity: 0, y: 35, filter: 'blur(8px)' },
    animate: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { 
        duration: 0.75, 
        ease: [0.16, 1, 0.3, 1] // Out-quint ease curve for modern velocity
      } 
    },
    exit: { 
      opacity: 0, 
      y: -30, 
      filter: 'blur(6px)',
      transition: { 
        duration: 0.45, 
        ease: [0.7, 0, 0.84, 0] // In-exponential exit velocity
      } 
    }
  };

  return (
    <div className="app-container">
      {/* 🌌 High-art layered interactive background wrapped under all sheets */}
      <InteractiveBackground currentRoute={currentRoute} />

      {/* Primary header navbar */}
      <Navbar current={currentRoute} onChange={handleRouteChange} />

      {/* Content Mount node with exit/entrance coordination */}
      <main className="main-content relative z-10">
        <AnimatePresence mode="wait">
          {currentRoute === 'about' && (
            <motion.div
              key="about"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <About />
            </motion.div>
          )}

          {currentRoute === 'projects' && (
            <motion.div
              key="projects"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Projects />
            </motion.div>
          )}

          {currentRoute === 'conclusion' && (
            <motion.div
              key="conclusion"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full"
            >
              <Conclusion />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer copyright */}
      <footer className="w-full py-6 text-center text-[10px] font-mono text-pencil-light border-t border-pencil-light/10 mt-auto relative z-10 pointer-events-none">
        © 2026 Trần Hà Vy. Được thiết kế với tính Liêm chính & Kỷ luật.
      </footer>
    </div>
  );
}
