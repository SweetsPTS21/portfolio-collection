// src/components/ui/MenuCard.jsx
import { Button } from "antd";
import { Eye } from "lucide-react";
import { Motion, spring } from "react-motion";
import styles from "./MenuCard.module.css";

export default function MenuCard({
  number,
  title,
  goal,
  process,
  product,
  highlight,
  onView,
  delay = 0,
}) {
  return (
    <Motion
      defaultStyle={{ opacity: 0, y: 28 }}
      style={{
        opacity: spring(1, { stiffness: 80, damping: 18 }),
        y: spring(0, { stiffness: 80, damping: 18 }),
      }}
    >
      {({ opacity, y }) => (
        <article
          className={styles.card}
          style={{
            opacity,
            transform: `translateY(${y}px)`,
            transitionDelay: `${delay}ms`,
          }}
        >
          <div className={styles.header}>
            <span className={styles.number} aria-hidden="true">
              § {number}
            </span>
            <h3 className={styles.title}>{title}</h3>
          </div>

          <div className={styles.body}>
            <p className={styles.goalText}>{goal}</p>
            <p className={styles.processText}>{process}</p>
          </div>

          {highlight && (
            <blockquote className={styles.highlight}>
              <span className={styles.quoteIcon}>"</span>
              {highlight}
            </blockquote>
          )}

          <div className={styles.footer}>
            <Button
              className={styles.viewButton}
              icon={<Eye size={16} strokeWidth={1.8} />}
              onClick={onView}
              type="primary"
            >
              Xem
            </Button>
          </div>
        </article>
      )}
    </Motion>
  );
}
