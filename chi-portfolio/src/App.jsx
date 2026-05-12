import { ConfigProvider } from "antd";
import blob from "./assets/fashion-editorial/editorial-blob-shapes.svg";
import grain from "./assets/fashion-editorial/grain-pattern.svg";
import AboutSection from "./components/sections/AboutSection.jsx";
import ConclusionSection from "./components/sections/ConclusionSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import ToolsSection from "./components/sections/ToolsSection.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import { theme } from "./theme.js";

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="fashion-app">
        <img className="app-blob one" src={blob} alt="" aria-hidden="true" />
        <img className="app-blob two" src={blob} alt="" aria-hidden="true" />
        <img className="grain-layer" src={grain} alt="" aria-hidden="true" />
        <Header />
        <main aria-label="Portfolio của Vũ Huyền Chi">
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ToolsSection />
          <ConclusionSection />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
