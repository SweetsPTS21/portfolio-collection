import { FileText, Goal, Sparkles } from 'lucide-react';
import { projects } from '../../data/portfolioData.js';
import HoloButton from '../ui/HoloButton.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import StickerBadge from '../ui/StickerBadge.jsx';
import GlassCard from '../y2k/GlassCard.jsx';

export default function StickerProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <ScrollReveal className="section-heading">
        <StickerBadge tone="blue">Trang Dự án</StickerBadge>
        <h2>Trang Dự án</h2>
      </ScrollReveal>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ScrollReveal key={project.title}>
            <GlassCard className="project-card">
              <span className="project-card__number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{project.title}</h3>
              <div className="project-card__row">
                <Goal size={18} aria-hidden="true" />
                <p>{project.goal}</p>
              </div>
              <div className="project-card__row">
                <Sparkles size={18} aria-hidden="true" />
                <p>{project.action}</p>
              </div>
              <div className="project-card__product">
                <FileText size={18} aria-hidden="true" />
                <span>{project.product}</span>
              </div>
              <HoloButton href={project.file}>Xem</HoloButton>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
