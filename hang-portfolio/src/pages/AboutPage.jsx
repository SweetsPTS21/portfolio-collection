import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { aboutCards, personalInfo } from '../data/portfolioData.js';
import { pageReveal } from '../app/motionConfig.js';

export default function AboutPage() {
  return (
    <section className="market-section route-page about-route">
      <motion.div className="route-hero" variants={pageReveal} initial="hidden" animate="visible">
        <div>
          <PriceTag tone="gold">About me</PriceTag>
          <h1>{personalInfo.name}</h1>
          <p>{aboutCards[0].body}</p>
        </div>
        <div className="avatar-wrap route-avatar">
          <img src={personalInfo.avatarUrl} alt="Hoàng Thúy Hằng" />
        </div>
      </motion.div>

      <div className="content-card-grid about-card-grid">
        {aboutCards.slice(1).map((card, index) => (
          <motion.article
            className="content-card"
            key={card.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06 }}
          >
            <span className="section-kicker">{card.eyebrow}</span>
            <h2>{card.title}</h2>
            {card.body ? <p>{card.body}</p> : null}
            {card.facts ? (
              <dl className="fact-list">
                {card.facts.map(([label, value]) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {card.items ? (
              <div className="principle-list">
                {card.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            ) : null}
          </motion.article>
        ))}
      </div>

      <div className="route-actions">
        <MarketButton href="/projects">Xem dự án</MarketButton>
        <MarketButton href="/conclutions" variant="light">Đọc tổng kết</MarketButton>
      </div>
    </section>
  );
}
