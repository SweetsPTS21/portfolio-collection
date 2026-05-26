import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { aboutCards, personalInfo } from '../data/portfolioData.js';
import { cardHoverMotion, dynamicCardReveal, pageReveal } from '../app/motionConfig.js';

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
            className={`content-card content-card--${card.layout} decor-${card.decor}`}
            key={card.title}
            custom={index}
            variants={dynamicCardReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.24 }}
            whileHover={cardHoverMotion.whileHover}
            whileTap={cardHoverMotion.whileTap}
          >
            <span className="section-kicker section-kicker-card">{card.eyebrow}</span>
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
