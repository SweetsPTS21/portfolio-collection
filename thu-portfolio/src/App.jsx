import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import SettingsSidebar from './components/layout/SettingsSidebar';
import MainHeader from './components/layout/MainHeader';
import AboutView from './pages/AboutView';
import ProjectsContainer from './pages/ProjectsContainer';
import CourseView from './pages/CourseView';
import SeasonalScene from './components/layout/SeasonalScene';

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
        </div>
        <main>
          <MainHeader activeView={activeView} />
          <CourseView active={activeView === 'course'} />
          <ProjectsContainer
            active={activeView === 'project'}
            activeProject={activeProject}
          />
          <AboutView active={activeView === 'about'} />
        </main>
      </div>
    </div>
  );
}
