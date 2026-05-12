// src/components/sections/ProjectsSection.jsx
import { projects } from '../../data/portfolioData';
import MenuCard from '../ui/MenuCard';
import styles from './ProjectsSection.module.css';

export default function ProjectsSection() {
  const left = projects.slice(0, 3);
  const right = projects.slice(3, 6);

  return (
    <section className={`slide paper-texture ${styles.projects}`} id="slide-projects">
      {/* Header */}
      <header className={styles.header}>
        {/* Decorative flourish */}
        <svg className={styles.flourishLeft} width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden="true">
          <path d="M60 12 Q45 4 30 12 Q15 20 0 12" stroke="var(--caramel)" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
        <div className={styles.headerText}>
          <p className={styles.menuLabel}>— Our Menu —</p>
          <h2 className={styles.menuTitle}>Các Bài Tập</h2>
        </div>
        <svg className={styles.flourishRight} width="60" height="24" viewBox="0 0 60 24" fill="none" aria-hidden="true">
          <path d="M0 12 Q15 4 30 12 Q45 20 60 12" stroke="var(--caramel)" strokeWidth="1.5" fill="none" opacity="0.6"/>
        </svg>
      </header>

      {/* Menu divider */}
      <div className={styles.divider} aria-hidden="true">
        <span className={styles.dividerDot}/>
        <span className={styles.dividerLine}/>
        <span className={styles.dividerDot}/>
        <span className={styles.dividerLine}/>
        <span className={styles.dividerDot}/>
      </div>

      {/* Cards grid */}
      <div className={styles.grid}>
        <div className={styles.col}>
          {left.map((p, i) => (
            <MenuCard key={p.id} {...p} delay={i * 100} />
          ))}
        </div>
        <div className={styles.col}>
          {right.map((p, i) => (
            <MenuCard key={p.id} {...p} delay={(i + 3) * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
