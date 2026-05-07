import { ConfigProvider } from 'antd';
import SkyBackground from './components/world/SkyBackground.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import AboutIsland from './components/sections/AboutIsland.jsx';
import SkillsIsland from './components/sections/SkillsIsland.jsx';
import ProjectsIsland from './components/sections/ProjectsIsland.jsx';
import ConclusionIsland from './components/sections/ConclusionIsland.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="island-app">
        <SkyBackground />
        <HeroSection />
        <main className="island-journey" aria-label="Mai Hồng Thắm portfolio">
          <AboutIsland />
          <SkillsIsland />
          <ProjectsIsland />
          <ConclusionIsland />
        </main>
        <footer className="island-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
