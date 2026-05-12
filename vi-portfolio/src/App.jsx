import { ConfigProvider } from 'antd';
import FloralBackground from './components/floral/FloralBackground.jsx';
import VineDivider from './components/floral/VineDivider.jsx';
import BouquetProjectsSection from './components/sections/BouquetProjectsSection.jsx';
import FloristAboutSection from './components/sections/FloristAboutSection.jsx';
import MarketSkillsSection from './components/sections/MarketSkillsSection.jsx';
import ReflectionSection from './components/sections/ReflectionSection.jsx';
import ShopHeroSection from './components/sections/ShopHeroSection.jsx';
import { personalInfo } from './data/portfolioData.js';
import { theme } from './theme.js';

const navLinks = [
  ['#hero', 'Gian hoa'],
  ['#about', 'Câu chuyện'],
  ['#skills', 'Năng lực'],
  ['#projects', 'Bó hoa bài tập'],
  ['#reflection', 'Kết luận'],
];

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <div className="flower-market-app">
        <FloralBackground />
        <nav className="market-nav" aria-label="Điều hướng portfolio">
          {navLinks.map(([href, label]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
        <main className="market-main" aria-label="Portfolio của Phạm Yến Vi">
          <ShopHeroSection />
          <VineDivider />
          <FloristAboutSection />
          <VineDivider compact />
          <MarketSkillsSection />
          <BouquetProjectsSection />
          <ReflectionSection />
        </main>
        <footer className="market-footer">{personalInfo.footer}</footer>
      </div>
    </ConfigProvider>
  );
}
