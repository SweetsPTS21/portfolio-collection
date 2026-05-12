// src/components/layout/SlideNav.jsx
import styles from './SlideNav.module.css';

const SLIDE_LABELS = ['Hero', 'About', 'Projects', 'Conclusion'];

export default function SlideNav({ currentSlide, onNavigate }) {
  return (
    <nav className={styles.nav} aria-label="Slide navigation">
      {SLIDE_LABELS.map((label, i) => (
        <button
          key={i}
          id={`slide-nav-${i}`}
          className={`${styles.dot} ${currentSlide === i ? styles.active : ''}`}
          onClick={() => onNavigate(i)}
          aria-label={`Đến phần ${label}`}
          title={label}
        >
          <span className={styles.tooltip}>{label}</span>
        </button>
      ))}
    </nav>
  );
}
