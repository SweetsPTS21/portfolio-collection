import { CheckCircle2, CircleDot, Gem } from 'lucide-react';
import React from 'react';
import { conclusion } from '../../data/portfolioData.js';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import StickerBadge from '../ui/StickerBadge.jsx';
import GlassCard from '../y2k/GlassCard.jsx';

const blocks = [
  { title: 'Kỹ năng đã đạt được', items: conclusion.achieved, Icon: CheckCircle2 },
  { title: 'Kỹ năng đang phát triển', items: conclusion.developing, Icon: CircleDot },
  { title: 'Bài học & Thách thức', items: conclusion.lessons, Icon: Gem },
];

export default function Y2KContactSection() {
  return (
    <section id="conclusion" className="section-shell conclusion-section">
      <ScrollReveal className="section-heading">
        <StickerBadge>Trang Tổng kết</StickerBadge>
        <h2>Trang Tổng kết</h2>
        <p>{conclusion.opening}</p>
      </ScrollReveal>

      <div className="conclusion-grid">
        {blocks.map(({ title, items, Icon }) => (
          <ScrollReveal key={title}>
            <GlassCard className="conclusion-card">
              {React.createElement(Icon, { size: 25, 'aria-hidden': 'true' })}
              <h3>{title}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
