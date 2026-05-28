import { motion } from 'framer-motion';

export default function JamJarCard({ children, label = 'Mứt dâu ngọt ngào' }) {
  return (
    <motion.div
      className="jam-jar-card"
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Cork cap */}
      <div className="jar-cap">
        <div className="jar-cork">
          <div className="cork-texture" />
          <div className="cork-texture" />
          <div className="cork-texture" />
        </div>
        <div className="jar-rope">
          <svg width="100%" height="12" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
            <path d="M0 6 Q25 0, 50 6 T100 6 T150 6 T200 6" stroke="rgba(180,140,80,0.5)" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Glass body */}
      <div className="jar-body glass">
        <div className="jar-shine" />
        {children}
        {/* Berry decorations */}
        <div className="jar-berries">
          <span className="jar-berry" style={{ left: '10%', animationDelay: '0s' }}>🍓</span>
          <span className="jar-berry" style={{ left: '45%', animationDelay: '0.5s' }}>🍓</span>
          <span className="jar-berry" style={{ left: '80%', animationDelay: '1s' }}>🍓</span>
        </div>
      </div>

      {/* Label */}
      <div className="jar-label">
        <span className="jar-label-text">{label}</span>
      </div>

      <style>{`
        .jam-jar-card {
          position: relative;
          max-width: 700px;
          margin: 0 auto;
        }
        .jar-cap {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: -2px;
        }
        .jar-cork {
          width: 60%;
          height: 24px;
          background: linear-gradient(180deg, #D4A574 0%, #B8845A 100%);
          border-radius: 8px 8px 4px 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 20px;
        }
        .cork-texture {
          width: 100%;
          height: 2px;
          background: rgba(255,255,255,0.2);
          border-radius: 1px;
        }
        .jar-rope {
          width: 70%;
          margin-top: -2px;
        }
        .jar-body {
          position: relative;
          padding: 32px 28px;
          border-radius: 8px 8px var(--radius) var(--radius);
          overflow: hidden;
          min-height: 120px;
        }
        .jar-shine {
          position: absolute;
          top: 0;
          left: 15%;
          width: 3px;
          height: 60%;
          background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, transparent 100%);
          border-radius: 2px;
          transform: skewX(-3deg);
        }
        .jar-berries {
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
          pointer-events: none;
        }
        .jar-berry {
          position: absolute;
          bottom: 0;
          font-size: 1.2rem;
          animation: gentleFloat 3s ease-in-out infinite;
          opacity: 0.6;
        }
        .jar-label {
          display: flex;
          justify-content: center;
          margin-top: -12px;
          position: relative;
          z-index: 2;
        }
        .jar-label-text {
          padding: 6px 20px;
          background: rgba(255, 209, 216, 0.4);
          backdrop-filter: blur(4px);
          border: 1px solid var(--border-glass);
          border-radius: 20px;
          font-family: 'Comfortaa', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--berry-rose);
        }
      `}</style>
    </motion.div>
  );
}
