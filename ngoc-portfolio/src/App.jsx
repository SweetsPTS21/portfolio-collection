// src/App.jsx
import { ConfigProvider } from 'antd';
import { theme } from './theme';
import { useSlideScroll } from './hooks/useSlideScroll';
import SlideNav from './components/layout/SlideNav';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ConclusionSection from './components/sections/ConclusionSection';

const TOTAL_SLIDES = 4;

export default function App() {
  const { currentSlide, scrollToSlide, viewportRef } = useSlideScroll(TOTAL_SLIDES);

  return (
    <ConfigProvider theme={theme}>
      {/* Dot navigation */}
      <SlideNav currentSlide={currentSlide} onNavigate={scrollToSlide} />

      {/* Slide viewport */}
      <div className="slide-viewport" ref={viewportRef}>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ConclusionSection />
      </div>
    </ConfigProvider>
  );
}
