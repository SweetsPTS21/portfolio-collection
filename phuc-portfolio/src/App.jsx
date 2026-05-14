import { ConfigProvider } from 'antd';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import KawaiiBackground from './components/stationery/KawaiiBackground.jsx';
import HeroSection from './components/sections/HeroSection.jsx';
import AboutSection from './components/sections/AboutSection.jsx';
import ProjectsSection from './components/sections/ProjectsSection.jsx';
import ConclusionSection from './components/sections/ConclusionSection.jsx';
import { personalInfo } from './data/portfolioData.js';
import { useLenis } from './hooks/useLenis.js';
import { theme } from './theme.js';

export default function App() {
  useLenis();

  return (
    <ConfigProvider theme={theme}>
      <LazyMotion features={domAnimation}>
        <motion.div
          className="kawaii-app"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45 }}
        >
          <KawaiiBackground />
          <HeroSection />
          <main className="kawaii-main" aria-label="Phúc portfolio">
            <AboutSection />
            <ProjectsSection />
            <ConclusionSection />
          </main>
          <footer className="kawaii-footer">{personalInfo.footer}</footer>
        </motion.div>
      </LazyMotion>
    </ConfigProvider>
  );
}
