import { BookOpen, GraduationCap, UserRound } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData.js';
import SparkleText from '../ui/SparkleText.jsx';
import StickerBadge from '../ui/StickerBadge.jsx';
import GlassCard from '../y2k/GlassCard.jsx';

export default function Y2KHeroSection() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <StickerBadge>Portfolio</StickerBadge>
        <SparkleText as="h1">{personalInfo.heroTitle}</SparkleText>
        <p>{personalInfo.intro}</p>
        <div className="hero-section__badges" aria-label="Thông tin cá nhân">
          <span>
            <UserRound size={18} aria-hidden="true" />
            {personalInfo.nameFromDocs}
          </span>
          <span>
            <BookOpen size={18} aria-hidden="true" />
            {personalInfo.major}
          </span>
          <span>
            <GraduationCap size={18} aria-hidden="true" />
            {personalInfo.school}
          </span>
        </div>
      </div>

      <GlassCard className="hero-card">
        <div className="hero-card__avatar">
          <img src={personalInfo.avatar} alt={personalInfo.imageNote} />
        </div>
        <p>{personalInfo.fullName}</p>
      </GlassCard>
    </section>
  );
}
