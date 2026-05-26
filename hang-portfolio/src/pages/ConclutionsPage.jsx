import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { conclusionCards, conclusionIntro } from '../data/portfolioData.js';
import { cardHoverMotion, dynamicCardReveal, pageReveal } from '../app/motionConfig.js';

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
            className={`content-card content-card--${card.layout} conclusion-card conclusion-card--${card.decor} decor-${card.decor}`}
            key={card.title}
            custom={index}
            variants={dynamicCardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.24 }}
            whileHover={cardHoverMotion.whileHover}
            whileTap={cardHoverMotion.whileTap}
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
