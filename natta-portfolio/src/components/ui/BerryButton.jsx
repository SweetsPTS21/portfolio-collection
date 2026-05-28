import { motion } from 'framer-motion';

export default function BerryButton({ children, href, onClick, ...props }) {
  const Component = href ? motion.a : motion.button;

  return (
    <Component
      className="berry-button"
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: '0 8px 28px rgba(255, 138, 154, 0.4)' }}
      whileTap={{ scale: 0.92 }}
      transition={{ type: 'spring', stiffness: 400, damping: 12, mass: 0.8 }}
      {...props}
    >
      {children}

      <style>{`
        .berry-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          background: linear-gradient(135deg, var(--berry-pink), var(--berry-rose));
          color: white;
          border: none;
          border-radius: 16px;
          font-family: 'Comfortaa', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          cursor: pointer;
          text-decoration: none;
          box-shadow: 0 4px 16px rgba(255, 138, 154, 0.3);
          transition: box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .berry-button::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.2) 50%, transparent 60%);
          transform: translateX(-100%);
          transition: transform 0.6s ease;
        }
        .berry-button:hover::after {
          transform: translateX(100%);
        }
      `}</style>
    </Component>
  );
}
