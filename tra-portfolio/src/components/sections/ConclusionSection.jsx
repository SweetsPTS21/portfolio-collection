import { CircleCheck } from 'lucide-react';
import GlassCard from '../kbeauty/GlassCard.jsx';
import PastelTag from '../kbeauty/PastelTag.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import { conclusion } from '../../data/portfolioData.js';

export default function ConclusionSection() {
  return (
    <section className="section-shell" id="conclusion">
      <ScrollReveal>
        <p className="section-kicker">✦ Reflection</p>
        <h2 className="section-title">Kết luận &amp; Định hướng</h2>
        <p className="section-lead">{conclusion.intro}</p>
      </ScrollReveal>

      <div className="conclusion-grid">
        <ScrollReveal>
          <GlassCard className="content-card" accent="pink">
            <h3>Những kỹ năng cốt lõi đã phát triển</h3>
            {conclusion.skills.map((skill) => (
              <div key={skill.title} className="skill-item">
                <PastelTag icon={CircleCheck} color="pink">{skill.title}</PastelTag>
                <p>{skill.description}</p>
              </div>
            ))}
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="content-card" accent="lavender">
            <h3>Điểm tâm đắc &amp; Thách thức</h3>
            <p style={{ fontStyle: 'italic', borderLeft: '3px solid var(--pink-light)', paddingLeft: '14px', marginLeft: '2px' }}>
              {conclusion.highlight}
            </p>
            <p style={{ marginTop: '12px' }}>{conclusion.challenge}</p>
            <p style={{ marginTop: '8px', opacity: .75, fontSize: '.88rem' }}>{conclusion.insight}</p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal className="profile-grid-span">
          <GlassCard className="content-card" accent="sky">
            <h3>Định hướng phát triển trong thời gian tới</h3>
            <div className="future-list">
              {conclusion.future.map((item, i) => (
                <div key={item} className="future-item">
                  <span className="future-num">{String(i + 1).padStart(2, '0')}</span>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
