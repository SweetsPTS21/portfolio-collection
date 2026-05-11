import { ConfigProvider } from 'antd';
import ToyBoxScene from './components/playroom/ToyBoxScene.jsx';
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
      <div className="toy-app">
        <ToyBoxScene />
        <HeroSection />
        <main className="toy-main" aria-label="Anh portfolio">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <footer className="toy-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
