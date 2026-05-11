import { ConfigProvider } from "antd";
import SoftBackground from "./components/kbeauty/SoftBackground.jsx";
import BeautyProfileSection from "./components/sections/BeautyProfileSection.jsx";
import CapabilitiesSection from "./components/sections/CapabilitiesSection.jsx";
import ConclusionSection from "./components/sections/ConclusionSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import ProjectsSection from "./components/sections/ProjectsSection.jsx";
import { personalInfo } from "./data/portfolioData.js";
import { theme } from "./theme.js";

const navLinks = [
  { href: "#hero", label: "Giới thiệu" },
  { href: "#profile", label: "Hồ sơ" },
  { href: "#capabilities", label: "Năng lực" },
  { href: "#projects", label: "Bài tập" },
  { href: "#conclusion", label: "Kết luận" },
];

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="kbeauty-app">
        <SoftBackground />

        <nav className="kb-nav" aria-label="Điều hướng portfolio">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <main
          className="kbeauty-main"
          aria-label="Portfolio của Phạm Thanh Trà"
        >
          <HeroSection />

          <div className="blossom-divider" aria-hidden="true">
            <img src="/assets/cherry-blossom.svg" alt="" />
          </div>

          <BeautyProfileSection />
          <CapabilitiesSection />

          <div className="blossom-divider" aria-hidden="true">
            <img src="/assets/cherry-blossom.svg" alt="" />
          </div>

          <ProjectsSection />
          <ConclusionSection />
        </main>

        <footer className="kbeauty-footer">
          <p className="footer-main">{personalInfo.footer}</p>
        </footer>
      </div>
    </ConfigProvider>
  );
}
