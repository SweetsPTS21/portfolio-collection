import React, { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Background from './components/Background';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Mindset from './components/Mindset';
import Conclusion from './components/Conclusion';
import Footer from './components/Footer';
import './App.css';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
};

export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <MotionConfig reducedMotion="user">
      <div className="app-shell">
        <Background />
        <div className="app-content">
          <Navbar activePage={activePage} onPageChange={setActivePage} />
          <main>
            <AnimatePresence mode="wait">
              <motion.div
                key={activePage}
                className="portfolio-page"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.42, ease: 'easeOut' }}
              >
                {activePage === 'home' && <About onNavigate={setActivePage} />}
                {activePage === 'projects' && <Projects />}
                {activePage === 'conclusion' && (
                  <>
                    <Mindset />
                    <Conclusion />
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </main>
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
