import { motion, useReducedMotion } from 'framer-motion';
import { Scale } from 'lucide-react';
import aboutBg from '../../assets/about-bg.png';
import avatarFrame from '../../assets/avatar-frame.png';
import lawTag from '../../assets/law-tag.png';
import avatarSrc from '../../../docs/avatar.png';
import { profile } from '../../data/portfolioData.js';
import WoodButton from '../ui/WoodButton.jsx';

export default function HeroDock() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="hero-dock"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div className="hero-copy">
        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06 }}
        >
          Portfolio học tập
          <span>{profile.displayName}</span>
        </motion.h1>
        <motion.div
          className="major-line"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.38, delay: 0.16 }}
        >
          <Scale size={30} strokeWidth={1.7} />
          <p>
            Sinh viên ngành {profile.major} <br />
            {profile.university}
          </p>
        </motion.div>
        <p className="hero-intro">{profile.intro}</p>

        <div className="hero-actions">
          <WoodButton to="/projects">Dự án</WoodButton>
          <WoodButton to="/conclutions">Tổng kết</WoodButton>
        </div>

        <div className="law-tag-wrap">
          <img className="law-tag" src={lawTag} alt="" aria-hidden="true" />
          <span>{profile.themeTag}</span>
        </div>
      </div>

      <motion.div
        className="avatar-rope-frame"
        initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, delay: 0.12 }}
      >
        <img
          className="avatar-photo"
          src={avatarSrc}
          alt={`Avatar cua ${profile.displayName}`}
        />
        <img
          className="avatar-frame"
          src={avatarFrame}
          alt=""
          aria-hidden="true"
        />
      </motion.div>
    </section>
  );
}
