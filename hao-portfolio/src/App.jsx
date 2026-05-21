import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Sidebar from './components/layout/Sidebar';
import SettingsSidebar from './components/layout/SettingsSidebar';
import MusicPlayer from './components/layout/MusicPlayer';
import MainHeader from './components/layout/MainHeader';
import AboutView from './pages/AboutView';
import ProjectsContainer from './pages/ProjectsContainer';
import CourseView from './pages/CourseView';
import SeasonalScene from './components/layout/SeasonalScene';

const pageVariants = {
  initial: { opacity: 0, y: 20, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -15, scale: 0.99 },
};

const pageTransition = { duration: 0.35, ease: 'easeOut' };

export default function App() {
  const [activeView, setActiveView] = useState('about');
  const [activeProject, setActiveProject] = useState(null);
  const [theme, setTheme] = useState('spring');

  // Apply theme to <html> so CSS variables cascade to body and all children
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const handleViewChange = (view, projectId = null) => {
    setActiveView(view);
    if (projectId !== null) setActiveProject(projectId);
  };

  // Unique key for AnimatePresence
  const viewKey = activeView === 'project' ? `project-${activeProject}` : activeView;

  return (
    <div className="app">
      <SeasonalScene theme={theme} />
      <div className="container">
        <div className="sidebar-wrapper">
          <Sidebar
            activeView={activeView}
            activeProject={activeProject}
            onNavigate={handleViewChange}
          />
          <SettingsSidebar theme={theme} onThemeChange={setTheme} />
          <MusicPlayer />
        </div>
        <main>
          <MainHeader activeView={activeView} />
          <AnimatePresence mode="wait">
            <motion.div
              key={viewKey}
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={pageTransition}
            >
              {activeView === 'course' && <CourseView active />}
              {activeView === 'project' && (
                <ProjectsContainer
                  active
                  activeProject={activeProject}
                  onNavigate={handleViewChange}
                />
              )}
              {activeView === 'about' && (
                <AboutView active onNavigate={handleViewChange} />
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
