import { ConfigProvider } from "antd";
import { theme } from "./theme.js";
import { useLenis } from "./hooks/useLenis.js";
import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import GlobalSummerBackground from "./components/sea/GlobalSummerBackground.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import AboutSection from "./components/sections/AboutSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import ConclusionSection from "./components/sections/ConclusionSection.jsx";

export default function App() {
  useLenis();

  return (
    <ConfigProvider theme={theme}>
      <div className="app-shell">
        <GlobalSummerBackground />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ConclusionSection />
        </main>
        <Footer />
      </div>
    </ConfigProvider>
  );
}
