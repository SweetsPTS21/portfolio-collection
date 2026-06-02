import { motion } from 'framer-motion';
import heroScene from '../../assets/stadium-ocean-motion/stadium-ocean-hero.png';
import filmMusicStrip from '../../assets/stadium-ocean-motion/film-music-strip.svg';
import waveParticles from '../../assets/stadium-ocean-motion/wave-particle-field.svg';

export default function StadiumOceanBackground({ routeKey }) {
  return (
    <div className="stadium-bg" aria-hidden="true">
      <motion.img
        key={routeKey}
        className="stadium-hero-art"
        src={heroScene}
        alt=""
        initial={{ scale: 1.05, opacity: 0.72 }}
        animate={{ scale: 1, opacity: 0.98 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      />
      <div className="spotlight spotlight-a" />
      <div className="spotlight spotlight-b" />
      <div className="wave-layer wave-layer-a" />
      <div className="wave-layer wave-layer-b" />
      <img className="particle-field" src={waveParticles} alt="" />
      <img className="film-strip" src={filmMusicStrip} alt="" />
      <div className="score-glow" />
    </div>
  );
}
