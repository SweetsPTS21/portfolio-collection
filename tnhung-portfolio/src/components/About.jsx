import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Heart, User } from 'lucide-react';
import { person } from '../data/portfolio';

const infoItems = [
  { icon: User, label: 'Họ và tên', value: person.name },
  { icon: GraduationCap, label: 'Ngành học', value: person.major },
  { icon: BookOpen, label: 'Trường', value: person.school },
  { icon: Heart, label: 'Sở thích', value: person.hobbies },
  { icon: Heart, label: 'Phong cách cá nhân', value: person.style },
];

function scrollToProjects() {
  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
}

export default function About({ onNavigate }) {
  const handleProjectsClick = () => {
    if (onNavigate) {
      onNavigate('projects');
      return;
    }

    scrollToProjects();
  };

  return (
    <section id="about" className="page-section about-section">
      <div className="about-grid">
        <motion.div
          className="about-copy glass-panel"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="hud-title about-kicker">
            <span>Về tôi</span>
            <span className="hud-star">✦</span>
          </div>
          <h1 className="about-heading">
            <span>Welcome to</span>
            <strong>My Digital Space</strong>
          </h1>
          <p className="about-quote">"{person.quote}"</p>
          <motion.button
            className="glass-cta"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={handleProjectsClick}
          >
            Khám phá hành trình <span aria-hidden="true">→</span>
          </motion.button>
          <div className="decor-dot-grid about-copy__dots" />
        </motion.div>

        <motion.div
          className="about-profile glass-panel"
          initial={{ opacity: 0, x: 36 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="about-avatar-wrap">
            <div className="about-avatar__ring" />
            <div className="about-avatar">
              <img src="/avatar.jpg" alt="Thúy Nhung" />
            </div>
            <div className="about-avatar__spark" aria-hidden="true">✦</div>
          </div>

          <div className="about-info-list">
            {infoItems.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                className="about-info"
                key={label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.08 }}
                whileHover={{ x: 5 }}
              >
                <div className="about-info__icon">
                  <Icon size={28} strokeWidth={1.6} />
                </div>
                <div>
                  <div className="about-info__label">{label}</div>
                  <div className="about-info__value">{value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="home-story-flow">
        {person.homeStoryCards.map((card, index) => (
          <motion.article
            className="home-info-card glass-card"
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 + index * 0.08 }}
          >
            <span className="home-info-card__index">{String(index + 1).padStart(2, '0')}</span>
            <h2>{card.title}</h2>
            <p>{card.content}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
