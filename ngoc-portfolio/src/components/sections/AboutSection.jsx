// src/components/sections/AboutSection.jsx
import { Motion, spring } from 'react-motion';
import { Music, Globe, Cat, BookOpen, Target, Lightbulb } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import styles from './AboutSection.module.css';
import avatarImg from '../../assets/avatar.jpg';
import bg1Img from '../../assets/bg1.jpg';

const hobbyIcons = {
  Hát: Music,
  'Chơi nhạc cụ': Music,
  'Đi du lịch': Globe,
  'Nuôi mèo': Cat,
};

// Avatar dùng ảnh thực
function Avatar() {
  return (
    <div className={styles.avatarFrame}>
      <img
        src={avatarImg}
        alt="Ảnh cá nhân của Lê Phương Bảo Ngọc"
        className={styles.avatarImg}
      />
      <p className={styles.avatarCaption}>Lê Phương Bảo Ngọc</p>
    </div>
  );
}

export default function AboutSection() {
  return (
    <section
      className={`slide slide--scrollable ${styles.about}`}
      id="slide-about"
      style={{ backgroundImage: `url(${bg1Img})` }}
    >
      {/* Section label */}
      <div className={styles.sectionLabel} aria-hidden="true">
        <span className={styles.labelLine} />
        <span className={styles.labelText}>Chef Story</span>
        <span className={styles.labelLine} />
      </div>

      <div className={styles.grid}>
        {/* Left: Avatar + basic info */}
        <Motion
          defaultStyle={{ opacity: 0, x: -40 }}
          style={{
            opacity: spring(1, { stiffness: 65, damping: 16 }),
            x: spring(0, { stiffness: 65, damping: 16 }),
          }}
        >
          {({ opacity, x }) => (
            <aside
              className={styles.leftCol}
              style={{ opacity, transform: `translateX(${x}px)` }}
            >
              <Avatar />

              {/* Info card */}
              <div className={styles.infoCard}>
                <h2 className={styles.infoName}>{personalInfo.name}</h2>

                <div className={styles.infoRow}>
                  <BookOpen
                    size={15}
                    strokeWidth={1.8}
                    color="var(--milk-brown)"
                  />
                  <span>{personalInfo.major}</span>
                </div>
                <div className={styles.infoRow}>
                  <Globe
                    size={15}
                    strokeWidth={1.8}
                    color="var(--milk-brown)"
                  />
                  <span>{personalInfo.university}</span>
                </div>

                {/* Hobbies */}
                <div className={styles.hobbies}>
                  {personalInfo.hobbies.map((h) => {
                    const Icon = hobbyIcons[h] || Music;
                    return (
                      <span key={h} className={styles.hobbyTag}>
                        <Icon size={12} strokeWidth={2} />
                        {h}
                      </span>
                    );
                  })}
                </div>
              </div>
            </aside>
          )}
        </Motion>

        {/* Right: Goals */}
        <Motion
          defaultStyle={{ opacity: 0, x: 40 }}
          style={{
            opacity: spring(1, { stiffness: 65, damping: 16 }),
            x: spring(0, { stiffness: 65, damping: 16 }),
          }}
        >
          {({ opacity, x }) => (
            <div
              className={styles.rightCol}
              style={{ opacity, transform: `translateX(${x}px)` }}
            >
              <p className={styles.intro}>{personalInfo.intro}</p>

              <div className={styles.goalBlock}>
                <div className={styles.goalHeader}>
                  <Target size={16} strokeWidth={2} color="var(--caramel)" />
                  <h3 className={styles.goalTitle}>
                    Mục tiêu học tập & Định hướng
                  </h3>
                </div>
                <blockquote className={styles.goalQuote}>
                  {personalInfo.learningGoal}
                </blockquote>
              </div>

              <div className={styles.goalBlock}>
                <div className={styles.goalHeader}>
                  <Lightbulb size={16} strokeWidth={2} color="var(--matcha)" />
                  <h3 className={styles.goalTitle}>Mục tiêu của Portfolio</h3>
                </div>
                <blockquote
                  className={`${styles.goalQuote} ${styles.goalQuoteGreen}`}
                >
                  {personalInfo.portfolioGoal}
                </blockquote>
              </div>
            </div>
          )}
        </Motion>
      </div>
    </section>
  );
}
