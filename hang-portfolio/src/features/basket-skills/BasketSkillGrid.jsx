import { motion } from 'framer-motion';
import { skillGroups } from '../../data/portfolioData.js';
import MarketItemBadge from './MarketItemBadge.jsx';

export default function BasketSkillGrid() {
  return (
    <div className="basket-skill-grid">
      {skillGroups.map((group, index) => (
        <motion.article
          className="basket-skill-card"
          key={group.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: index * 0.08 }}
        >
          <h3>{group.title}</h3>
          <div className="badge-row">
            {group.items.map((item) => (
              <MarketItemBadge key={item}>{item}</MarketItemBadge>
            ))}
          </div>
        </motion.article>
      ))}
    </div>
  );
}
