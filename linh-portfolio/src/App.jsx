import { ConfigProvider } from 'antd';
import CandyBackground from './components/candy/CandyBackground.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import SkillsSection from './components/sections/SkillsSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ConclusionSection from './components/sections/ConclusionSection.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="candy-app">
        <CandyBackground />
        <HeroSection />
        <main className="candy-main" aria-label="Linh portfolio">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <footer className="candy-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
