import { motion } from 'framer-motion';
import {
  CheckCircle,
  Home,
  Lightbulb,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import JamJarCard from '../components/ui/JamJarCard';
import { conclusion } from '../data/portfolioData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const jamSections = [
  {
    number: '01',
    tone: 'changes',
    Icon: CheckCircle,
    title: 'Những thay đổi nhận thấy',
    bullet: '🍓',
    items: conclusion.changes,
  },
  {
    number: '02',
    tone: 'lessons',
    Icon: Lightbulb,
    title: 'Kinh nghiệm rút ra',
    bullet: '🌿',
    items: conclusion.lessons,
  },
  {
    number: '03',
    tone: 'future',
    Icon: TrendingUp,
    title: 'Hướng phát triển',
    bullet: '✨',
    items: conclusion.future,
  },
];

const conclusionChips = ['Có hệ thống', 'Có kiểm chứng', 'Có trách nhiệm'];

export default function JamFactoryPage() {
  return (
    <div className="jam-page">
      {/* Header */}
      <motion.div
        className="jam-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.div
          className="jam-jar-icon"
          aria-hidden="true"
          animate={{ rotate: [0, 3, -3, 0], y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          🫙
        </motion.div>
        <h1 className="jam-title">Hũ mứt dâu kết luận</h1>
        <p className="jam-subtitle">Ngọt ngào từ quá trình học tập</p>
        <p className="jam-insight">
          Tổng kết quá trình học: làm việc có kế hoạch hơn, dùng AI có trách
          nhiệm hơn và trình bày rõ trọng tâm hơn.
        </p>
      </motion.div>

      {/* Summary in Jam Jar Card */}
      <JamJarCard label="Tổng kết quá trình">
        <p className="jam-summary">{conclusion.summary}</p>
      </JamJarCard>

      {jamSections.map(({ number, tone, Icon, title, bullet, items }) => (
        <section key={tone} className={`jam-section jam-section--${tone}`}>
          <motion.h2
            className="jam-section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="jam-section-number">{number}</span>
            <Icon size={20} className="section-icon" />
            {title}
          </motion.h2>
          <motion.ul
            className="jam-list"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {items.map((item, i) => (
              <motion.li
                key={i}
                className="jam-list-item"
                variants={itemVariants}
              >
                <span className="jam-bullet" aria-hidden="true">
                  {bullet}
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </section>
      ))}

      {/* Final note in Jam Jar */}
      <JamJarCard label="Lời kết" className="jam-jar-card--final">
        <div className="jam-final">
          <Sparkles size={20} className="section-icon" />
          <div>
            <p>
              Portfolio này là minh chứng thực tiễn cho khả năng làm chủ công
              nghệ: Khai thác AI một cách có chiến lược, có kiểm chứng và hoàn
              toàn chịu trách nhiệm về tính liêm chính học thuật.
            </p>
            <div
              className="jam-conclusion-chips"
              aria-label="Điểm nhấn kết luận"
            >
              {conclusionChips.map((chip) => (
                <span key={chip} className="jam-conclusion-chip">
                  {chip}
                </span>
              ))}
            </div>
            <div className="jam-final-actions">
              <a
                className="jam-final-link jam-final-link--primary"
                href="/projects"
              >
                <Sparkles size={16} />
                Xem bài tập
              </a>
              <a className="jam-final-link" href="/">
                <Home size={16} />
                Trang chủ
              </a>
            </div>
          </div>
        </div>
      </JamJarCard>

      <style>{`
        .jam-page {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }
        .jam-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .jam-jar-icon {
          font-size: 3.25rem;
          margin-bottom: 12px;
          display: inline-block;
        }
        .jam-title {
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .jam-subtitle {
          font-size: 1.05rem;
          color: var(--text-secondary);
          font-style: italic;
        }
        .jam-insight {
          max-width: 620px;
          margin: 14px auto 0;
          color: var(--text-primary);
          font-size: 1.02rem;
          line-height: 1.7;
          font-weight: 600;
        }
        .jam-summary {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--text-primary);
          position: relative;
          z-index: 1;
        }
        .jam-section {
          margin: 40px 0;
        }
        .jam-section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.35rem;
          color: var(--text-primary);
          margin-bottom: 20px;
        }
        .jam-section-number {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 42px;
          height: 34px;
          border-radius: 12px;
          background: var(--section-soft, rgba(255, 160, 171, 0.14));
          color: var(--section-accent, var(--berry-rose));
          font-size: 0.9rem;
          font-weight: 700;
          font-family: 'Comfortaa', sans-serif;
        }
        .section-icon {
          color: var(--section-accent, var(--berry-pink));
          flex-shrink: 0;
        }
        .jam-section--changes {
          --section-accent: var(--leaf-green);
          --section-soft: rgba(132, 226, 168, 0.16);
        }
        .jam-section--lessons {
          --section-accent: var(--honey-yellow);
          --section-soft: rgba(255, 225, 122, 0.2);
        }
        .jam-section--future {
          --section-accent: var(--berry-rose);
          --section-soft: rgba(255, 138, 154, 0.15);
        }
        .jam-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .jam-list-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 14px 20px;
          background: var(--bg-glass);
          backdrop-filter: blur(8px);
          border: 1px solid var(--border-glass);
          border-left: 4px solid var(--section-accent, var(--berry-rose));
          border-radius: 16px;
          font-size: 1.02rem;
          line-height: 1.6;
          color: var(--text-primary);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .jam-list-item:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 16px rgba(255, 160, 171, 0.1);
        }
        .jam-bullet {
          flex-shrink: 0;
          font-size: 1.1rem;
        }
        .jam-final {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        .jam-final p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--text-primary);
          font-weight: 500;
        }
        .jam-jar-card--final .jar-body {
          border-color: rgba(255, 138, 154, 0.34);
        }
        .jam-conclusion-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 18px;
        }
        .jam-conclusion-chip {
          display: inline-flex;
          align-items: center;
          min-height: 34px;
          padding: 6px 12px;
          border-radius: 12px;
          background: rgba(132, 226, 168, 0.14);
          color: #3d8b5e;
          font-size: 0.9rem;
          font-weight: 700;
        }
        .jam-final-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }
        .jam-final-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 42px;
          padding: 10px 16px;
          border-radius: 14px;
          border: 1px solid var(--border-glass);
          background: rgba(255, 255, 255, 0.42);
          color: var(--berry-rose);
          font-family: 'Comfortaa', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .jam-final-link--primary {
          background: linear-gradient(135deg, var(--berry-pink), var(--berry-rose));
          color: white;
          border-color: transparent;
        }
        .jam-final-link:hover {
          transform: translateY(-2px);
          background: rgba(255, 160, 171, 0.16);
        }
        .jam-final-link--primary:hover {
          background: linear-gradient(135deg, var(--berry-pink), var(--berry-rose));
        }
        @media (max-width: 768px) {
          .jam-page {
            padding: 30px 20px 72px;
          }
          .jam-header {
            margin-bottom: 32px;
          }
          .jam-insight {
            font-size: 0.98rem;
            line-height: 1.6;
          }
          .jam-summary {
            line-height: 1.65;
          }
          .jam-section {
            margin: 32px 0;
          }
          .jam-section-title {
            align-items: flex-start;
            gap: 8px;
          }
          .jam-list-item {
            padding: 14px 16px;
          }
          .jam-final {
            gap: 10px;
          }
          .jam-final-actions {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
