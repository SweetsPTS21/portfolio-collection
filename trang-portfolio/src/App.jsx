import { ConfigProvider } from 'antd';
import SummerSky from './components/summer/SummerSky.jsx';
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
      <div className="summer-app">
        <SummerSky />
        <HeroSection />
        <main className="summer-main" aria-label="Hoàng Thu Trang portfolio">
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <footer className="summer-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
