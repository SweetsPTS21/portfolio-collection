import { Button, Tag } from "antd";
import { ArrowDown, BookOpenText, Cloud, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { hero, personalInfo } from "../../data/portfolioData.js";
import SeaCaseHero from "../sea/SeaCaseHero.jsx";
import PearlParticles from "../sea/PearlParticles.jsx";

export default function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <PearlParticles />
      <div className="hero-background-assets" aria-hidden="true">
        <SeaCaseHero />
      </div>
      <div className="hero-section__content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.62, ease: [0.22, 1, 0.36, 1] }}
          className="hero-copy"
        >
          <Tag className="hero-copy__tag" icon={<Sparkles size={14} />}>
            {personalInfo.style}
          </Tag>
          <h1>{personalInfo.name}</h1>
          <blockquote>{hero.quote}</blockquote>
          <p>{hero.intro}</p>
          <div className="hero-copy__facts">
            <span>
              <BookOpenText size={17} />
              {personalInfo.major}
            </span>
            <span>
              <Cloud size={17} />
              {personalInfo.university}
            </span>
          </div>
          <div className="hero-copy__actions">
            <Button type="primary" size="large" href="#projects">
              Dự án
            </Button>
            <Button size="large" href="#about" icon={<ArrowDown size={17} />}>
              Giới thiệu
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="hero-visual"
        >
          <div className="hero-avatar-card">
            <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
            <div>
              <strong>{personalInfo.name}</strong>
              <span>{personalInfo.major}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
