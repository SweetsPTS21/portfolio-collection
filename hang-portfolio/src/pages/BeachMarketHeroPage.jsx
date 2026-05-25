import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { personalInfo } from '../data/portfolioData.js';
import { pageReveal } from '../app/motionConfig.js';

export default function BeachMarketHeroPage() {
  return (
    <section className="market-section hero-section" id="market">
      <motion.div className="hero-copy" variants={pageReveal} initial="hidden" animate="visible">
        <PriceTag tone="gold">Beach Market Stroll</PriceTag>
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.intro}</p>
        <div className="hero-details">
          <span>{personalInfo.major}</span>
          <span>{personalInfo.school}</span>
          <span>{personalInfo.style}</span>
        </div>
        <div className="hero-actions">
          <MarketButton href="#stalls">Xem bài thực hành</MarketButton>
          <MarketButton href="#order" variant="light">Lời tổng kết</MarketButton>
        </div>
      </motion.div>
      <motion.aside
        className="vendor-profile-card"
        initial={{ opacity: 0, x: 28, rotate: 2 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.7, delay: 0.12 }}
      >
        <div className="avatar-wrap">
          <img src={personalInfo.avatarUrl} alt="Hoàng Thúy Hằng" />
        </div>
        <h2>{personalInfo.greeting}</h2>
        <p>{personalInfo.direction}</p>
        <div className="principle-list">
          {personalInfo.principles.map((principle) => (
            <span key={principle}>{principle}</span>
          ))}
        </div>
      </motion.aside>
    </section>
  );
}
