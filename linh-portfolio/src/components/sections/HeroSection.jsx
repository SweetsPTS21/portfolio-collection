import { ArrowDown, Plane, Sparkles } from 'lucide-react';
import { about, personalInfo } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';

export default function HeroSection() {
  return (
    <header className="summer-hero">
      <ScrollReveal>
        <div className="hero-postcard">
          <p className="hero-kicker">
            <Sparkles size={18} strokeWidth={2.4} />
            Tropical Summer Portfolio
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
      <div className="hero-photo">
        <img src={personalInfo.avatarUrl} alt={personalInfo.name} />
        <div className="travel-stamp" aria-hidden="true">
          <Plane size={24} />
        </div>
      </div>
      <a className="scroll-ticket" href="#about" aria-label="Xuống VỀ TÔI">
        <ArrowDown size={20} />
      </a>
    </header>
  );
}
