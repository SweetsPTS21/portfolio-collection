import { ArrowDown, Sparkles } from 'lucide-react';
import { about, personalInfo } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function HeroSection() {
  return (
    <header className="hero-sky">
      <ScrollReveal>
        <div className="hero-copy">
          <p className="hero-kicker">
            <Sparkles size={18} strokeWidth={2.3} />
            {about.title}
          </p>
          <h1>{personalInfo.name}</h1>
          <p className="hero-subtitle">{about.intro}</p>
          <div className="hero-tags" aria-label="Thông tin cá nhân">
            <span>{personalInfo.major}</span>
            <span>{personalInfo.university}</span>
            <span>{personalInfo.style}</span>
          </div>
        </div>
      </ScrollReveal>
      <div className="hero-avatar-wrap">
        <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
      </div>
      <a className="sky-scroll-cue" href="#about" aria-label="Xuống ABOUT ME">
        <ArrowDown size={20} />
      </a>
    </header>
  );
}
