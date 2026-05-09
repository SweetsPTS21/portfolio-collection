import { ConfigProvider } from 'antd';
import GardenBackground from './components/garden/GardenBackground.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ConclusionSection from './components/sections/ConclusionSection.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="garden-app">
        <GardenBackground />
        <HeroSection />
        <main className="garden-main" aria-label="Hạnh portfolio">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <footer className="garden-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
