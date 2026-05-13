// src/components/sections/HeroSection.jsx
import { Motion, spring } from 'react-motion';
import StarSparkleIllustration from '../ui/StarSparkleIllustration';
import ScrollHint from '../ui/ScrollHint';
import { personalInfo } from '../../data/portfolioData';
import styles from './HeroSection.module.css';
import heroBg from '../../assets/bg2.jpg';

// 2 shooting stars – each on a 10s cycle, staggered so one appears every ~5s
const METEORS = [
  { startX: '22%', startY: '-90px', angle: '30deg', dur: '10s', delay: '1s' },
  { startX: '70%', startY: '-100px', angle: '28deg', dur: '10s', delay: '6s' },
];

export default function HeroSection() {
  return (
    <section
      className={`slide ${styles.hero}`}
      id="slide-hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Decorative corner flourishes */}
      <svg
        className={styles.cornerTL}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 4 L4 40 Q4 76 40 76"
          stroke="rgba(212,160,86,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="4" cy="4" r="3" fill="rgba(212,160,86,0.5)" />
      </svg>
      <svg
        className={styles.cornerBR}
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M76 76 L76 40 Q76 4 40 4"
          stroke="rgba(212,160,86,0.35)"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="76" cy="76" r="3" fill="rgba(212,160,86,0.5)" />
      </svg>

      {/* Meteor shower */}
      <div className={styles.meteorField} aria-hidden="true">
        {METEORS.map((m, i) => (
          <span
            key={i}
            className={styles.meteor}
            style={{
              '--startX': m.startX,
              '--startY': m.startY,
              '--angle': m.angle,
              '--dur': m.dur,
              '--delay': m.delay,
            }}
          />
        ))}
      </div>

      {/* Sparkle decorations */}
      <div className={styles.sparkleField} aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className={`${styles.sparkle} twinkle-anim`}
            style={{
              left: `${[12, 25, 68, 80, 35, 55, 15, 75][i]}%`,
              top: `${[20, 75, 18, 60, 45, 80, 55, 30][i]}%`,
              animationDelay: `${i * 0.3}s`,
              fontSize: `${[28, 22, 36, 24, 32, 20, 28, 22][i]}px`,
            }}
          >
            ✦
          </span>
        ))}
      </div>

      <div className={styles.content}>
        {/* Coffee illustration */}
        <Motion
          defaultStyle={{ opacity: 0, scale: 0.7 }}
          style={{
            opacity: spring(1, { stiffness: 60, damping: 14 }),
            scale: spring(1, { stiffness: 60, damping: 14 }),
          }}
        >
          {({ opacity, scale }) => (
            <div
              className={`${styles.illustrationWrapper} float-anim`}
              style={{ opacity, transform: `scale(${scale})` }}
            >
              <StarSparkleIllustration size={160} />
            </div>
          )}
        </Motion>

        {/* Text block */}
        <div className={styles.textBlock}>
          {/* Handwritten welcome */}
          <Motion
            defaultStyle={{ opacity: 0, y: -20 }}
            style={{
              opacity: spring(1, { stiffness: 70, damping: 16 }),
              y: spring(0, { stiffness: 70, damping: 16 }),
            }}
          >
            {({ opacity, y }) => (
              <p
                className={styles.welcomeLabel}
                style={{ opacity, transform: `translateY(${y}px)` }}
              >
                {personalInfo.heroTitle}
              </p>
            )}
          </Motion>

          {/* Main name */}
          <Motion
            defaultStyle={{ opacity: 0, y: 40 }}
            style={{
              opacity: spring(1, { stiffness: 55, damping: 14 }),
              y: spring(0, { stiffness: 55, damping: 14 }),
            }}
          >
            {({ opacity, y }) => (
              <h1
                className={styles.name}
                style={{ opacity, transform: `translateY(${y}px)` }}
              >
                {personalInfo.name}
              </h1>
            )}
          </Motion>

          {/* Subtitle */}
          <Motion
            defaultStyle={{ opacity: 0, y: 25 }}
            style={{
              opacity: spring(1, { stiffness: 60, damping: 18 }),
              y: spring(0, { stiffness: 60, damping: 18 }),
            }}
          >
            {({ opacity, y }) => (
              <p
                className={styles.subtitle}
                style={{ opacity, transform: `translateY(${y}px)` }}
              >
                {personalInfo.heroSubtitle}
              </p>
            )}
          </Motion>

          {/* Info pills */}
          <Motion
            defaultStyle={{ opacity: 0 }}
            style={{ opacity: spring(1, { stiffness: 50, damping: 18 }) }}
          >
            {({ opacity }) => (
              <div className={styles.infoPills} style={{ opacity }}>
                <span className={styles.pill}>⚖️ Luật học</span>
                <span className={styles.pill}>🏛️ ĐHQGHN</span>
                <span className={styles.pill}>🌱 Năm 2</span>
              </div>
            )}
          </Motion>
        </div>
      </div>

      {/* Scroll hint */}
      <div className={styles.scrollHintWrapper}>
        <ScrollHint />
      </div>
    </section>
  );
}
