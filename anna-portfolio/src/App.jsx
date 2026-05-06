import { ConfigProvider } from "antd";
import { theme } from "./theme";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HeroSection from "./components/sections/HeroSection";
import SkillsSection from "./components/sections/SkillsSection";
import ToolsSection from "./components/sections/ToolsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import ConclusionSection from "./components/sections/ConclusionSection";

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
        <Header />
        <main>
          <HeroSection />
          <SkillsSection />
          <ToolsSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
