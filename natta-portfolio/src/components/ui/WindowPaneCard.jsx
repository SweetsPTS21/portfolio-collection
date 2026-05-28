import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const paneVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function WindowPaneCard({ children, className = '' }) {
  // children should be an array of 4 pane contents
  const panes = Array.isArray(children) ? children : [children];

  return (
    <motion.div
      className={`window-pane-card ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Frame top bar */}
      <div className="window-frame-top">
        <div className="frame-dot" />
        <div className="frame-dot" />
        <div className="frame-dot" />
        <span className="frame-title">🍓 Nhà kính thông tin</span>
      </div>

      {/* Panes grid */}
      <div className="window-panes-grid">
        {panes.map((pane, i) => (
          <motion.div key={i} className="window-pane" variants={paneVariants}>
            {/* Dew drops decoration */}
            <div className="pane-dew">
              <div className="pane-dew-drop" style={{ top: '15%', left: '80%', animationDelay: '0s' }} />
              <div className="pane-dew-drop" style={{ top: '40%', left: '90%', animationDelay: '1.5s' }} />
            </div>
            <div className="pane-content">
              {pane}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .window-pane-card {
          border-radius: var(--radius);
          overflow: hidden;
          background: var(--bg-glass);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border: 2px solid rgba(132, 226, 168, 0.3);
          box-shadow: 0 8px 32px rgba(132, 226, 168, 0.1);
        }
        .window-frame-top {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 10px 16px;
          background: rgba(132, 226, 168, 0.12);
          border-bottom: 2px solid rgba(132, 226, 168, 0.2);
        }
        .frame-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--berry-blush);
        }
        .frame-dot:nth-child(2) { background: var(--honey-yellow); }
        .frame-dot:nth-child(3) { background: var(--leaf-green); }
        .frame-title {
          margin-left: 10px;
          font-family: 'Comfortaa', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
        }
        .window-panes-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .window-pane {
          position: relative;
          padding: 24px;
          border: 1px solid rgba(132, 226, 168, 0.15);
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .window-pane:hover {
          background: rgba(255, 255, 255, 0.4);
        }
        .window-pane:hover .pane-dew-drop {
          animation-play-state: running;
        }
        .pane-dew {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .pane-dew-drop {
          position: absolute;
          width: 4px;
          height: 8px;
          background: linear-gradient(180deg, rgba(157,228,255,0.5) 0%, rgba(157,228,255,0.1) 100%);
          border-radius: 50% 50% 50% 50% / 30% 30% 70% 70%;
          animation: dewSlide 5s ease-in infinite;
          animation-play-state: paused;
          opacity: 0.6;
        }
        .pane-content {
          position: relative;
          z-index: 1;
        }
        @media (max-width: 768px) {
          .window-panes-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </motion.div>
  );
}
