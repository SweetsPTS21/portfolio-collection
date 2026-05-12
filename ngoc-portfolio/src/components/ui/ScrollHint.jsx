// src/components/ui/ScrollHint.jsx
import styles from './ScrollHint.module.css';

export default function ScrollHint() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <span className={styles.label}>Scroll</span>
      <div className={styles.arrow}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M10 4 L10 16 M5 11 L10 16 L15 11"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
