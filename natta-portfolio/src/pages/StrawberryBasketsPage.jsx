import { motion } from 'framer-motion';
import { FolderOpen } from 'lucide-react';
import StrawberryBasketCard from '../components/ui/StrawberryBasketCard';
import { projects } from '../data/portfolioData';

export default function StrawberryBasketsPage() {
  return (
    <div className="baskets-page">
      <motion.div
        className="baskets-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <motion.span
          className="baskets-icon"
          animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          🧺
        </motion.span>
        <h1 className="baskets-title">Giỏ dâu tây bài tập</h1>
        <p className="baskets-subtitle">
          <FolderOpen size={16} style={{ verticalAlign: 'middle' }} />{' '}
          6 bài tập — Click để xem chi tiết từng bài
        </p>
      </motion.div>

      <div className="baskets-grid">
        {projects.map((project, index) => (
          <StrawberryBasketCard key={project.id} project={project} index={index} />
        ))}
      </div>

      <style>{`
        .baskets-page {
          max-width: 1100px;
          margin: 0 auto;
          padding: 40px 20px 80px;
        }
        .baskets-header {
          text-align: center;
          margin-bottom: 48px;
        }
        .baskets-icon {
          display: inline-block;
          font-size: 2.5rem;
          margin-bottom: 12px;
        }
        .baskets-title {
          font-size: clamp(1.6rem, 4vw, 2.2rem);
          color: var(--text-primary);
          margin-bottom: 12px;
        }
        .baskets-subtitle {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }
        .baskets-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }
        @media (max-width: 768px) {
          .baskets-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
}
