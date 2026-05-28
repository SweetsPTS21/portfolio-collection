import { motion } from 'framer-motion';
import { CheckCircle, Lightbulb, TrendingUp, Sparkles } from 'lucide-react';
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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

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
          animate={{ rotate: [0, 3, -3, 0], y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          🫙
        </motion.div>
        <h1 className="jam-title">Hũ mứt dâu kết luận</h1>
        <p className="jam-subtitle">Ngọt ngào từ quá trình học tập</p>
      </motion.div>

      {/* Summary in Jam Jar Card */}
      <JamJarCard label="Tổng kết quá trình">
        <p className="jam-summary">{conclusion.summary}</p>
      </JamJarCard>

      {/* Changes */}
      <section className="jam-section">
        <motion.h2
          className="jam-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <CheckCircle size={20} className="section-icon" />
          Những thay đổi nhận thấy
        </motion.h2>
        <motion.ul
          className="jam-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {conclusion.changes.map((item, i) => (
            <motion.li key={i} className="jam-list-item" variants={itemVariants}>
              <span className="jam-bullet">🍓</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Lessons */}
      <section className="jam-section">
        <motion.h2
          className="jam-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Lightbulb size={20} className="section-icon" />
          Kinh nghiệm rút ra
        </motion.h2>
        <motion.ul
          className="jam-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {conclusion.lessons.map((item, i) => (
            <motion.li key={i} className="jam-list-item" variants={itemVariants}>
              <span className="jam-bullet">🌿</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Future */}
      <section className="jam-section">
        <motion.h2
          className="jam-section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <TrendingUp size={20} className="section-icon" />
          Hướng phát triển
        </motion.h2>
        <motion.ul
          className="jam-list"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {conclusion.future.map((item, i) => (
            <motion.li key={i} className="jam-list-item" variants={itemVariants}>
              <span className="jam-bullet">✨</span>
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </section>

      {/* Final note in Jam Jar */}
      <JamJarCard label="Lời kết">
        <div className="jam-final">
          <Sparkles size={20} className="section-icon" />
          <p>
            Portfolio này là minh chứng thực tiễn cho khả năng làm chủ công nghệ: Khai thác AI một cách có chiến lược, có kiểm chứng và hoàn toàn chịu trách nhiệm về tính liêm chính học thuật.
          </p>
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
          font-size: 3rem;
          margin-bottom: 12px;
          display: inline-block;
        }
        .jam-title {
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .jam-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
          font-style: italic;
        }
        .jam-summary {
          font-size: 1rem;
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
          font-size: 1.2rem;
          color: var(--text-primary);
          margin-bottom: 20px;
        }
        .section-icon {
          color: var(--berry-pink);
          flex-shrink: 0;
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
          border-radius: 16px;
          font-size: 0.92rem;
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
          font-size: 1rem;
        }
        .jam-final {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        .jam-final p {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-primary);
          font-weight: 500;
        }
      `}</style>
    </div>
  );
}
