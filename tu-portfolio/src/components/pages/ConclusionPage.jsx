import { HeartHandshake } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData.js';
import IconBadge from '../ui/IconBadge.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import SoftCard from '../ui/SoftCard.jsx';

export default function ConclusionPage() {
  const { conclusion, visualAssets } = portfolioData;

  return (
    <div className="portfolio-page conclusion-page">
      <section className="content-section content-section--hero">
        <SectionTitle eyebrow="Conclusion" title="Khép lại một chặng đường đầy màu sắc" icon="HeartHandshake">
          {conclusion.opening}
        </SectionTitle>
        <ScrollReveal className="conclusion-panel" delay={0.08}>
          <img src={visualAssets.conclusionPanel} alt="" aria-hidden="true" />
          <div className="conclusion-panel__copy">
            <span>Reflective note</span>
            <strong>Luật, công nghệ và cách kể chuyện gần gũi có thể đi cùng nhau.</strong>
          </div>
        </ScrollReveal>
      </section>

      <section className="reflection-layout">
        <ScrollReveal>
          <SoftCard className="reflection-card" icon="Sparkles" title="Kỹ năng quan trọng nhất">
            <ul>
              {conclusion.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </SoftCard>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <SoftCard className="reflection-card" icon="BadgeCheck" title="Điều tâm đắc">
            <ul>
              {conclusion.proudPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </SoftCard>
        </ScrollReveal>

        <ScrollReveal delay={0.12}>
          <SoftCard className="reflection-card" icon="ShieldCheck" title="Thách thức đã gặp">
            <ul>
              {conclusion.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </SoftCard>
        </ScrollReveal>

        <ScrollReveal className="reflection-layout__wide" delay={0.16}>
          <SoftCard className="future-card" icon="HeartHandshake" title="Định hướng tương lai">
            <p>{conclusion.futureDirection}</p>
          </SoftCard>
        </ScrollReveal>
      </section>

      <ScrollReveal className="thank-you-strip" delay={0.1}>
        <IconBadge icon="HeartHandshake" />
        <div>
          <h2>Lời cảm ơn</h2>
          <p>{conclusion.thanks}</p>
        </div>
        <HeartHandshake size={34} strokeWidth={1.5} />
      </ScrollReveal>
    </div>
  );
}
