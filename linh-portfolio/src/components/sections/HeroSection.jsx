import { ArrowDown, Heart, Sparkles } from 'lucide-react';
import { about, personalInfo } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function HeroSection() {
  return (
    <header className="candy-hero">
      <ScrollReveal>
        <div className="hero-bubble">
          <p className="hero-kicker">
            <Sparkles size={18} strokeWidth={2.4} />
            Candy Pop Portfolio
          </p>
          <h1>{personalInfo.name}</h1>
          <p className="hero-subtitle">{about.kicker}</p>
          <div className="hero-tags" aria-label="Thông tin cá nhân">
            <span>{personalInfo.major}</span>
            <span>{personalInfo.university}</span>
            <span>{personalInfo.style}</span>
          </div>
        </div>
      </ScrollReveal>
      <div className="hero-avatar-card">
        <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
        <div className="hero-avatar-badge" aria-hidden="true">
          <Heart size={22} fill="currentColor" />
        </div>
      </div>
      <a className="scroll-candy" href="#about" aria-label="Xuống VỀ TÔI">
        <ArrowDown size={20} />
      </a>
    </header>
  );
}
