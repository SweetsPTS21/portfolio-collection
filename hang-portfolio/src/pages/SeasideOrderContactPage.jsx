import { motion } from 'framer-motion';
import MarketButton from '../components/ui/MarketButton.jsx';
import PriceTag from '../components/ui/PriceTag.jsx';
import { conclusion } from '../data/portfolioData.js';

export default function SeasideOrderContactPage() {
  return (
    <section className="market-section order-section" id="order">
      <motion.div
        className="order-card"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <PriceTag tone="pink">Seaside order</PriceTag>
        <h2>{conclusion.title}</h2>
        <p>{conclusion.body}</p>
        <blockquote>{conclusion.highlight}</blockquote>
        <MarketButton href="#market">Quay lại đầu chợ</MarketButton>
      </motion.div>
    </section>
  );
}
