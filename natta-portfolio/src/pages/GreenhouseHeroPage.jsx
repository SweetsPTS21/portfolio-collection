import { motion } from 'framer-motion';
import { Sparkles, Heart, BookOpen, Cpu, Users, Palette } from 'lucide-react';
import WindowPaneCard from '../components/ui/WindowPaneCard';
import HoneycombGrid from '../components/ui/HoneycombGrid';
import LeafBadge from '../components/ui/LeafBadge';
import BerryButton from '../components/ui/BerryButton';
import { personalInfo, skills, tools, principles } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const toolIcons = [BookOpen, Cpu, Sparkles, Palette, Users];

export default function GreenhouseHeroPage() {
  return (
    <div className="hero-page">
      {/* Hero Section with greenhouse frame */}
      <section className="hero-section">
        {/* Decorative greenhouse frame around hero */}
        <div className="hero-greenhouse-frame">
          <svg viewBox="0 0 600 400" fill="none" className="hero-frame-svg">
            {/* Arch */}
            <path d="M50 380 L50 120 Q300 20 550 120 L550 380" stroke="rgba(132,226,168,0.3)" strokeWidth="2" fill="none" />
            {/* Panes */}
            <line x1="200" y1="80" x2="200" y2="380" stroke="rgba(132,226,168,0.15)" strokeWidth="1" />
            <line x1="400" y1="80" x2="400" y2="380" stroke="rgba(132,226,168,0.15)" strokeWidth="1" />
            <line x1="50" y1="200" x2="550" y2="200" stroke="rgba(132,226,168,0.12)" strokeWidth="1" />
            {/* Corner leaves */}
            <path d="M60 360 C70 340, 90 345, 80 360 C90 355, 95 370, 80 375" fill="rgba(132,226,168,0.3)" />
            <path d="M520 360 C530 340, 550 345, 540 360 C550 355, 555 370, 540 375" fill="rgba(132,226,168,0.3)" />
          </svg>
        </div>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="hero-berry-icon"
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            🍓
          </motion.div>

          {/* Animated name with sparkle trail */}
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="hero-major"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {personalInfo.major} — {personalInfo.school}
          </motion.p>

          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            "{personalInfo.tagline}"
          </motion.p>

          <motion.div
            className="hero-style"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4, type: 'spring', stiffness: 200 }}
          >
            <LeafBadge>{personalInfo.style}</LeafBadge>
          </motion.div>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
          >
            <BerryButton href="/projects">
              <Sparkles size={16} />
              Xem bài tập
            </BerryButton>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section — Glass Window Pane */}
      <section className="about-section">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Về tôi
        </motion.h2>

        <WindowPaneCard>
          {/* Pane 1: Hobbies */}
          <div>
            <h3 className="pane-title">
              <Heart size={18} className="pane-icon" />
              Sở thích
            </h3>
            <div className="hobby-tags">
              {personalInfo.hobbies.map((hobby) => (
                <span key={hobby} className="hobby-tag">{hobby}</span>
              ))}
            </div>
          </div>

          {/* Pane 2: Skills */}
          <div>
            <h3 className="pane-title">
              <Sparkles size={18} className="pane-icon" />
              Năng lực nổi bật
            </h3>
            <ul className="skills-list">
              {skills.map((skill) => (
                <li key={skill.title} className="skill-item">
                  <strong>{skill.title}</strong>
                  <p>{skill.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Pane 3: Principles */}
          <div>
            <h3 className="pane-title">
              <BookOpen size={18} className="pane-icon" />
              Nguyên tắc thực hiện
            </h3>
            <ul className="principles-list">
              {principles.map((p) => (
                <li key={p.title} className="principle-item">
                  <strong>{p.title}</strong>
                  <p>{p.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Pane 4: Tools */}
          <div>
            <h3 className="pane-title">
              <Cpu size={18} className="pane-icon" />
              Công cụ sử dụng
            </h3>
            <HoneycombGrid items={tools} />
          </div>
        </WindowPaneCard>
      </section>

      <style>{`
        .hero-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 20px 60px;
        }

        /* Hero */
        .hero-section {
          position: relative;
          min-height: 65vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 60px 0;
        }
        .hero-greenhouse-frame {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }
        .hero-frame-svg {
          width: min(90%, 600px);
          height: auto;
          opacity: 0.7;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 600px;
        }
        .hero-berry-icon {
          font-size: 3.5rem;
          margin-bottom: 16px;
          display: inline-block;
        }
        .hero-name {
          font-size: clamp(2.2rem, 5vw, 3.2rem);
          color: var(--text-primary);
          margin-bottom: 12px;
          background: linear-gradient(135deg, var(--text-primary) 0%, var(--berry-rose) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-major {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 10px;
        }
        .hero-tagline {
          font-size: 0.95rem;
          color: var(--berry-rose);
          font-weight: 600;
          margin-bottom: 16px;
          font-style: italic;
        }
        .hero-style {
          margin-bottom: 24px;
        }
        .hero-cta {
          margin-top: 8px;
        }

        /* About */
        .about-section {
          padding: 40px 0;
        }
        .section-title {
          font-size: 1.8rem;
          text-align: center;
          margin-bottom: 40px;
          color: var(--text-primary);
        }
        .pane-title {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 1rem;
          margin-bottom: 14px;
          color: var(--berry-rose);
          font-family: 'Comfortaa', sans-serif;
        }
        .pane-icon {
          color: var(--berry-pink);
        }

        /* Hobbies */
        .hobby-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        .hobby-tag {
          padding: 6px 14px;
          background: rgba(255, 160, 171, 0.1);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--text-secondary);
          font-weight: 500;
        }

        /* Skills */
        .skills-list, .principles-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .skill-item strong, .principle-item strong {
          display: block;
          font-size: 0.88rem;
          color: var(--text-primary);
          margin-bottom: 3px;
        }
        .skill-item p, .principle-item p {
          font-size: 0.8rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Tools */
        .tools-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .tool-category {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 600;
          font-size: 0.83rem;
          color: var(--text-primary);
          margin-bottom: 5px;
        }
        .tool-items {
          display: flex;
          flex-wrap: wrap;
          gap: 5px;
        }
        .tool-chip {
          padding: 3px 10px;
          background: rgba(132, 226, 168, 0.12);
          border-radius: 12px;
          font-size: 0.75rem;
          color: #3d8b5e;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 50vh;
            padding: 40px 0;
          }
          .hero-greenhouse-frame {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
