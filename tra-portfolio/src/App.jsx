import { ConfigProvider } from "antd";
import { theme } from "./theme";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import SkillsSection from "./components/sections/SkillsSection";
import ConclusionSection from "./components/sections/ConclusionSection";

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ConclusionSection />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
