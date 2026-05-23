import React from 'react';
import { motion } from 'framer-motion';
import { Star, Target } from 'lucide-react';
import { projections } from '../data/portfolio';
import planetPink from '../assets/planet-pink-ring.png';
import planetPurple from '../assets/planet-purple-orbit.png';

export default function Mindset() {
  const [direction, ending] = projections;

  return (
    <section id="mindset" className="page-section summary-section">
      <motion.div
        className="section-frame summary-frame"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="hud-title">
          <span>Tổng kết</span>
          <span className="hud-star">✦</span>
        </div>

        <div className="summary-grid">
          <motion.article className="summary-card glass-card" whileHover={{ y: -6 }}>
            <div className="summary-card__heading">
              <Target size={30} strokeWidth={1.6} />
              <h3>Định hướng</h3>
            </div>
            <p>{direction.content}</p>
            <img className="summary-card__planet summary-card__planet--pink" src={planetPink} alt="" aria-hidden="true" />
          </motion.article>

          <motion.article className="summary-card glass-card" whileHover={{ y: -6 }}>
            <div className="summary-card__heading">
              <Star size={30} strokeWidth={1.6} />
              <h3>Kết luận</h3>
            </div>
            <p>{ending.content}</p>
            <img className="summary-card__planet summary-card__planet--purple" src={planetPurple} alt="" aria-hidden="true" />
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}
