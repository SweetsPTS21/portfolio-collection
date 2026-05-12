import { Heart, Music, Target } from 'lucide-react';
import { goals, personalInfo } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import StickerBadge from '../ui/StickerBadge.jsx';
import GlassCard from '../y2k/GlassCard.jsx';

export default function DreamyAboutSection() {
  return (
    <section id="about" className="section-shell">
      <ScrollReveal className="section-heading">
        <StickerBadge tone="blue">About Me</StickerBadge>
        <h2>Cá tính & Sở thích</h2>
      </ScrollReveal>

      <div className="about-grid">
        <ScrollReveal>
          <GlassCard className="about-card">
            <Music size={28} aria-hidden="true" />
            <p>{personalInfo.personality}</p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="about-card about-card--goal">
            <Heart size={28} aria-hidden="true" />
            <p>{personalInfo.portfolioGoal}</p>
          </GlassCard>
        </ScrollReveal>
      </div>

      <div className="goal-grid">
        {goals.map((goal) => (
          <ScrollReveal key={goal.title}>
            <GlassCard className="goal-card">
              <Target size={24} aria-hidden="true" />
              <h3>{goal.title}</h3>
              <p>{goal.text}</p>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
