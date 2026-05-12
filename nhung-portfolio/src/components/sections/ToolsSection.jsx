import { Palette, PenLine, UsersRound, WandSparkles } from 'lucide-react';
import { toolGroups } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import StickerBadge from '../ui/StickerBadge.jsx';
import GlassCard from '../y2k/GlassCard.jsx';

const icons = [UsersRound, PenLine, Palette, WandSparkles];

export default function ToolsSection() {
  return (
    <section id="tools" className="section-shell">
      <ScrollReveal className="section-heading">
        <StickerBadge>Hệ sinh thái</StickerBadge>
        <h2>Hệ sinh thái Công cụ Số</h2>
      </ScrollReveal>

      <div className="tools-grid">
        {toolGroups.map((group, index) => {
          const Icon = icons[index];
          return (
            <ScrollReveal key={group.title}>
              <GlassCard className="tool-card">
                <Icon size={25} aria-hidden="true" />
                <h3>{group.title}</h3>
                <div className="tool-card__tags">
                  {group.tools.map((tool) => (
                    <StickerBadge key={tool} tone={index % 2 ? 'blue' : 'pink'}>
                      {tool}
                    </StickerBadge>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
}
