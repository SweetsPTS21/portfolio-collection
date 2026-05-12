import { ConfigProvider } from 'antd';
import DreamyAboutSection from './components/sections/DreamyAboutSection.jsx';
import StickerProjectsSection from './components/sections/StickerProjectsSection.jsx';
import ToolsSection from './components/sections/ToolsSection.jsx';
import Y2KContactSection from './components/sections/Y2KContactSection.jsx';
import Y2KHeroSection from './components/sections/Y2KHeroSection.jsx';
import CursorTrail from './components/y2k/CursorTrail.jsx';
import HoloBackground from './components/y2k/HoloBackground.jsx';
import StickerLayer from './components/y2k/StickerLayer.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

const navLinks = [
  { href: '#hero', label: 'About Me' },
  { href: '#about', label: 'Mục tiêu' },
  { href: '#tools', label: 'Công cụ Số' },
  { href: '#projects', label: 'Dự án' },
  { href: '#conclusion', label: 'Tổng kết' },
];

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="dreamy-app">
        <HoloBackground />
        <StickerLayer />
        <CursorTrail />

        <nav className="dreamy-nav" aria-label="Điều hướng portfolio">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <main className="dreamy-main" aria-label={`Portfolio của ${personalInfo.fullName}`}>
          <Y2KHeroSection />
          <DreamyAboutSection />
          <ToolsSection />
          <StickerProjectsSection />
          <Y2KContactSection />
        </main>
      </div>
    </ConfigProvider>
  );
}
