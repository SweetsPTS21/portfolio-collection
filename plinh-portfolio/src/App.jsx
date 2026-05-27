import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

import BotanicalNav from './components/layout/BotanicalNav';
import NatureFooter from './components/layout/NatureFooter';
import NatureBackground from './components/ui/NatureBackground';

import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ConclusionSection from './components/sections/ConclusionSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const renderActiveSection = () => {
    switch (activeTab) {
      case 'about':
        return <AboutSection />;
      case 'projects':
        return <ProjectsSection />;
      case 'conclusion':
        return <ConclusionSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <ConfigProvider theme={theme}>
      <div className="min-h-screen relative overflow-hidden flex flex-col justify-between z-10 selection:bg-[#588157]/30 selection:text-[#3A5A40]">
        
        {/* Unified nature layers: sunlight dapple, corner branches sway, sparkles and falling leaves */}
        <NatureBackground />

        <div className="relative z-10 flex flex-col justify-between min-h-screen">
          {/* Botanical Navigation Header */}
          <BotanicalNav activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Main Content with framer-motion AnimatePresence for transitions */}
          <main className="flex-grow py-8 relative" aria-label={`Đặng Phương Linh Portfolio - Trang ${activeTab}`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 25, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.99 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full"
              >
                {renderActiveSection()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Botanical Footer */}
          <NatureFooter />
        </div>
      </div>
    </ConfigProvider>
  );
}
