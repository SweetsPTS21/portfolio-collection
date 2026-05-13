// src/components/sections/ConclusionSection.jsx
import { Motion, spring } from 'react-motion';
import { Sparkles, BookHeart, Trophy } from 'lucide-react';
import { conclusion } from '../../data/portfolioData';
import styles from './ConclusionSection.module.css';

// SVG Recipe card frame decoration
function RecipeFrame({ children, className = '' }) {
  return (
    <div className={`${styles.recipeCard} ${className}`}>
      {/* Corner accents */}
      <svg
        className={styles.cornerAccent}
        style={{ top: 6, left: 6 }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 18 L2 2 L18 2"
          stroke="var(--caramel)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
      <svg
        className={styles.cornerAccent}
        style={{ top: 6, right: 6, transform: 'rotate(90deg)' }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 18 L2 2 L18 2"
          stroke="var(--caramel)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
      <svg
        className={styles.cornerAccent}
        style={{ bottom: 6, left: 6, transform: 'rotate(-90deg)' }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 18 L2 2 L18 2"
          stroke="var(--caramel)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
      <svg
        className={styles.cornerAccent}
        style={{ bottom: 6, right: 6, transform: 'rotate(180deg)' }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 18 L2 2 L18 2"
          stroke="var(--caramel)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
      {children}
    </div>
  );
}

const panels = [
  {
    icon: Sparkles,
    color: 'var(--caramel)',
    label: conclusion.experience.label,
    text: conclusion.experience.text,
  },
  {
    icon: BookHeart,
    color: 'var(--matcha)',
    label: conclusion.knowledge.label,
    text: conclusion.knowledge.text,
  },
  {
    icon: Trophy,
    color: 'var(--mocha-pink)',
    label: conclusion.challenge.label,
    text: `${conclusion.challenge.challengeText}\n\n${conclusion.challenge.highlightText}`,
  },
];

export default function ConclusionSection() {
  return (
    <section
      className={`slide chalkboard-texture ${styles.conclusion}`}
      id="slide-conclusion"
    >
      {/* Header */}
      <Motion
        defaultStyle={{ opacity: 0, y: -20 }}
        style={{
          opacity: spring(1, { stiffness: 60, damping: 15 }),
          y: spring(0, { stiffness: 60, damping: 15 }),
        }}
      >
        {({ opacity, y }) => (
          <header
            className={styles.header}
            style={{ opacity, transform: `translateY(${y}px)` }}
          >
            <p className={styles.sectionLabel}>— Closing Chapter —</p>
            <h2 className={styles.title}>Tổng kết hành trình</h2>
          </header>
        )}
      </Motion>

      {/* 3 Recipe panels */}
      <div className={styles.panels}>
        {panels.map(({ icon: Icon, color, label, text }, i) => (
          <Motion
            key={i}
            defaultStyle={{ opacity: 0, y: 30 }}
            style={{
              opacity: spring(1, { stiffness: 65, damping: 16 }),
              y: spring(0, { stiffness: 65, damping: 16 }),
            }}
          >
            {({ opacity, y }) => (
              <RecipeFrame>
                <div
                  className={styles.panel}
                  style={{
                    opacity,
                    transform: `translateY(${y}px)`,
                    transitionDelay: `${i * 150}ms`,
                  }}
                >
                  <div className={styles.panelIcon} style={{ color }}>
                    <Icon size={22} strokeWidth={1.8} />
                  </div>
                  <h3 className={styles.panelLabel}>{label}</h3>
                  <p className={styles.panelText}>{text}</p>
                </div>
              </RecipeFrame>
            )}
          </Motion>
        ))}
      </div>

      {/* Closing quote */}
      <Motion
        defaultStyle={{ opacity: 0, y: 20 }}
        style={{
          opacity: spring(1, { stiffness: 50, damping: 18 }),
          y: spring(0, { stiffness: 50, damping: 18 }),
        }}
      >
        {({ opacity, y }) => (
          <div
            className={styles.closingQuote}
            style={{ opacity, transform: `translateY(${y}px)` }}
          >
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              fill="none"
              aria-hidden="true"
              className={styles.quoteDecor}
            >
              <path
                d="M0 24 Q0 12 12 12 Q8 0 0 0"
                fill="var(--caramel)"
                opacity="0.2"
              />
              <path
                d="M16 24 Q16 12 28 12 Q24 0 16 0"
                fill="var(--caramel)"
                opacity="0.2"
              />
            </svg>
            <blockquote className={styles.quoteText}>
              Công nghệ là đòn bẩy — Kiến thức chuyên môn - Luật là điểm tựa.
            </blockquote>
          </div>
        )}
      </Motion>

      {/* Footer */}
      <footer className={styles.footer}>
        <span className={styles.footerText}>✦ Bảo Ngọc Portfolio ✦</span>
      </footer>
    </section>
  );
}
