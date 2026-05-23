import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Target, TrendingUp, Zap } from 'lucide-react';
import { conclusion } from '../data/portfolio';

const skillIcons = [BookOpen, Zap, TrendingUp];

export default function Conclusion() {
  return (
    <section id="conclusion" className="page-section conclusion-section">
      <motion.div
        className="section-frame conclusion-panel"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
      >
        <div className="hud-title">
          <span>Tổng kết</span>
          <span className="hud-star">✦</span>
        </div>

        <div className="conclusion-flow-stack">
          <section className="conclusion-flow-section conclusion-flow-section--intro">
            <div className="conclusion-section-heading">
              <span>01</span>
              <h2>Nhìn lại hành trình</h2>
            </div>
            <div className="conclusion-thought-stream">
              {conclusion.summaryParts.map((item, index) => (
                <motion.article
                  className="conclusion-thought-card glass-card"
                  key={item}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                >
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="conclusion-flow-section conclusion-flow-section--skills">
            <div className="conclusion-section-heading">
              <span>02</span>
              <h2>Kỹ năng cốt lõi</h2>
            </div>
            <div className="conclusion-skill-ladder">
              {conclusion.coreSkills.map(({ title, desc }, i) => {
                const Icon = skillIcons[i] ?? BookOpen;

                return (
                <motion.div
                  className="conclusion-skill"
                  key={title}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -18 : 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.12 + i * 0.08 }}
                >
                  <div className="conclusion-skill__icon">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                </motion.div>
                );
              })}
            </div>
          </section>

          <section className="conclusion-flow-section conclusion-flow-section--reflection">
            <div className="conclusion-section-heading">
              <span>03</span>
              <h2>Điểm tâm đắc & thách thức</h2>
            </div>
            <div className="conclusion-split-flow">
              <div className="conclusion-mini-card conclusion-mini-card--soft">
                <Target size={22} strokeWidth={1.7} />
                <h3>{conclusion.highlightLabel}</h3>
                <div className="mini-point-list">
                  {conclusion.highlightParts.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="conclusion-mini-card conclusion-mini-card--soft">
                <Target size={22} strokeWidth={1.7} />
                <h3>{conclusion.challengeLabel}</h3>
                <div className="mini-point-list">
                  {conclusion.challengeParts.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="conclusion-flow-section conclusion-flow-section--direction">
            <div className="conclusion-section-heading">
              <span>04</span>
              <h2>{conclusion.directionLabel}</h2>
            </div>
            <div className="direction-ribbon">
              {conclusion.directionParts.map((item, index) => (
                <div className="direction-ribbon__item" key={item}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="conclusion-quote">
              "{conclusion.quote}"
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
}
