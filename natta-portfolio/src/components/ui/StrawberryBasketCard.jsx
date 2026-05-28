import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import LeafBadge from './LeafBadge';
import SeedSparkle from './SeedSparkle';

export default function StrawberryBasketCard({ project, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="basket-card"
      initial={{ opacity: 0, y: 40, scale: 0.93 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Dew drops on hover */}
      <div className={`card-dew-drops ${isHovered ? 'active' : ''}`}>
        <div className="card-dew" style={{ left: '20%', animationDelay: '0s' }} />
        <div className="card-dew" style={{ left: '55%', animationDelay: '0.3s' }} />
        <div className="card-dew" style={{ left: '80%', animationDelay: '0.6s' }} />
      </div>

      {/* Seed sparkle particles */}
      <SeedSparkle isActive={isHovered} />

      {/* Ribbon bow SVG */}
      <div className="basket-ribbon">
        <svg width="28" height="20" viewBox="0 0 28 20" className={`ribbon-bow ${isHovered ? 'animate' : ''}`}>
          <path d="M14 10 C10 4, 2 4, 4 10 C2 16, 10 16, 14 10" fill="var(--berry-blush)" stroke="var(--berry-pink)" strokeWidth="0.5" />
          <path d="M14 10 C18 4, 26 4, 24 10 C26 16, 18 16, 14 10" fill="var(--berry-blush)" stroke="var(--berry-pink)" strokeWidth="0.5" />
          <circle cx="14" cy="10" r="2.5" fill="var(--berry-pink)" />
        </svg>
        <span className="ribbon-line"></span>
        <svg width="28" height="20" viewBox="0 0 28 20" className={`ribbon-bow ${isHovered ? 'animate' : ''}`}>
          <path d="M14 10 C10 4, 2 4, 4 10 C2 16, 10 16, 14 10" fill="var(--berry-blush)" stroke="var(--berry-pink)" strokeWidth="0.5" />
          <path d="M14 10 C18 4, 26 4, 24 10 C26 16, 18 16, 14 10" fill="var(--berry-blush)" stroke="var(--berry-pink)" strokeWidth="0.5" />
          <circle cx="14" cy="10" r="2.5" fill="var(--berry-pink)" />
        </svg>
      </div>

      <div className="basket-glass">
        <div className="basket-header">
          <span className="basket-number">#{project.id}</span>
          <LeafBadge>{project.chapter}</LeafBadge>
        </div>
        <h3 className="basket-title">{project.title}</h3>
        <p className="basket-desc">{project.description}</p>
        {project.pdf && (
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="basket-link"
          >
            <FileText size={16} />
            Xem bài tập
          </a>
        )}
      </div>

      <div className="basket-weave"></div>

      <style>{`
        .basket-card {
          position: relative;
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--bg-glass);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid var(--border-glass);
          transition: box-shadow 0.3s ease;
        }
        .basket-card:hover {
          box-shadow: 0 20px 50px rgba(255, 160, 171, 0.25);
        }
        .basket-card:hover .basket-weave {
          opacity: 0.7;
        }

        /* Dew drops on hover */
        .card-dew-drops {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }
        .card-dew {
          position: absolute;
          top: -8px;
          width: 4px;
          height: 12px;
          background: linear-gradient(180deg, rgba(157,228,255,0.7) 0%, rgba(157,228,255,0.1) 100%);
          border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
          opacity: 0;
          transform: translateY(0);
          transition: none;
        }
        .card-dew-drops.active .card-dew {
          animation: cardDewFall 1.5s ease-in forwards;
        }
        @keyframes cardDewFall {
          0% { opacity: 0; transform: translateY(0) scaleY(0.8); }
          15% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(120px) scaleY(1.3); }
        }

        /* Ribbon bow */
        .basket-ribbon {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          background: rgba(255, 209, 216, 0.3);
          border-bottom: 1px solid var(--border-glass);
        }
        .ribbon-bow {
          transition: transform 0.3s ease;
        }
        .ribbon-bow.animate {
          animation: bowWiggle 0.6s ease-in-out;
        }
        @keyframes bowWiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        .ribbon-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--berry-blush), transparent);
          border-radius: 1px;
        }

        .basket-glass {
          padding: 24px;
        }
        .basket-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }
        .basket-number {
          font-family: 'Comfortaa', sans-serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--berry-pink);
        }
        .basket-title {
          font-size: 1.1rem;
          margin-bottom: 10px;
          color: var(--text-primary);
        }
        .basket-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 16px;
        }
        .basket-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 16px;
          background: rgba(255, 160, 171, 0.1);
          color: var(--berry-rose);
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.82rem;
          transition: background 0.3s ease;
        }
        .basket-link:hover {
          background: rgba(255, 160, 171, 0.2);
        }
        .basket-weave {
          height: 20px;
          background: repeating-linear-gradient(
            45deg,
            transparent,
            transparent 6px,
            rgba(255, 209, 216, 0.3) 6px,
            rgba(255, 209, 216, 0.3) 8px
          );
          opacity: 0.4;
          transition: opacity 0.3s ease;
        }
      `}</style>
    </motion.div>
  );
}
