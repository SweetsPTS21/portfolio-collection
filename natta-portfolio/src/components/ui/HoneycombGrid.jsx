import { motion } from 'framer-motion';

const hexVariants = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] },
  }),
};

export default function HoneycombGrid({ items }) {
  return (
    <div className="honeycomb-grid">
      {items.map((item, i) => (
        <motion.div
          key={item.category}
          className="hex-cell"
          custom={i}
          variants={hexVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, y: -4 }}
        >
          <div className="hex-inner">
            <span className="hex-category">{item.category}</span>
            <div className="hex-items">
              {item.items.map((name) => (
                <span key={name} className="hex-chip">{name}</span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      <style>{`
        .honeycomb-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .hex-cell {
          position: relative;
          width: 140px;
          padding: 20px 14px;
          background: rgba(255, 225, 122, 0.08);
          border: 1px solid rgba(255, 225, 122, 0.25);
          border-radius: 16px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          transition: background 0.3s ease;
        }
        .hex-cell:hover {
          background: rgba(255, 225, 122, 0.15);
        }
        .hex-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
        }
        .hex-category {
          font-family: 'Comfortaa', sans-serif;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--text-primary);
        }
        .hex-items {
          display: flex;
          flex-wrap: wrap;
          gap: 3px;
          justify-content: center;
        }
        .hex-chip {
          padding: 2px 6px;
          background: rgba(132, 226, 168, 0.15);
          border-radius: 8px;
          font-size: 0.75rem;
          color: #3d8b5e;
          font-weight: 500;
        }
        @media (max-width: 768px) {
          .hex-cell {
            width: 120px;
            padding: 16px 10px;
          }
        }
      `}</style>
    </div>
  );
}
