import { motion } from 'framer-motion';
import BasketSkillGrid from '../features/basket-skills/BasketSkillGrid.jsx';
import { personalInfo } from '../data/portfolioData.js';
import { pageReveal } from '../app/motionConfig.js';

export default function BasketSkillsPage() {
  return (
    <section className="market-section basket-section" id="basket">
      <motion.div className="section-heading" variants={pageReveal} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <span className="section-kicker">Basket skills</span>
        <h2>Giỏ kỹ năng số</h2>
        <p>{personalInfo.tools}</p>
      </motion.div>
      <BasketSkillGrid />
    </section>
  );
}
