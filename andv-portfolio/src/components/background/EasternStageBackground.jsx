import { motion } from 'framer-motion';

const dust = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${(index * 53) % 100}%`,
  delay: (index % 8) * 0.3,
  scale: 0.65 + (index % 5) * 0.16,
}));

export default function EasternStageBackground() {
  return (
    <div className="eastern-stage" aria-hidden="true">
      <div className="stage-gradient" />
      <div className="silk-texture" />
      <motion.img
        className="dragon-hero-bg"
        src="/assets/mascots/dragon-hero.png"
        alt=""
        initial={{ opacity: 0, x: 80, rotate: -4 }}
        animate={{ opacity: 0.42, x: 0, rotate: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.img
        className="dragon-corner-bg"
        src="/assets/mascots/dragon-corner.png"
        alt=""
        animate={{ y: [0, -16, 0], rotate: [-2, 1, -2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        className="phoenix-accent-bg"
        src="/assets/mascots/phoenix-accent.png"
        alt=""
        animate={{ y: [0, 18, 0], opacity: [0.42, 0.68, 0.42] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="ink-cloud cloud-one" />
      <div className="ink-cloud cloud-two" />
      <div className="lantern-glow glow-one" />
      <div className="lantern-glow glow-two" />
      <div className="gold-dust">
        {dust.map((particle) => (
          <span
            key={particle.id}
            style={{ left: particle.left, top: particle.top, animationDelay: `${particle.delay}s`, scale: particle.scale }}
          />
        ))}
      </div>
    </div>
  );
}
