import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { conclusionCards, conclusionIntro } from '../data/portfolioData.js';
import { pageReveal } from '../app/motionConfig.js';

export default function ConclutionsPage() {
  return (
    <section className="market-section route-page order-section conclutions-route">
      <motion.div className="section-heading route-heading" variants={pageReveal} initial="hidden" animate="visible">
        <span className="section-kicker">Conclutions</span>
        <h1>Trang tổng kết</h1>
        <p>{conclusionIntro}</p>
      </motion.div>

      <div className="conclusion-card-grid">
        {conclusionCards.map((card, index) => (
          <motion.article
            className="content-card conclusion-card"
            key={card.title}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
          >
            <PriceTag tone={index % 2 === 0 ? 'gold' : 'mint'}>{card.eyebrow}</PriceTag>
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </motion.article>
        ))}
      </div>

      <div className="route-actions">
        <MarketButton href="/about" variant="light">Quay lại About</MarketButton>
        <MarketButton href="/projects">Xem lại Projects</MarketButton>
      </div>
    </section>
  );
}
