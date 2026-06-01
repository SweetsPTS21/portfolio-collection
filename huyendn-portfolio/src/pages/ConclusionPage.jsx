import React from 'react';
import { Compass, Sparkles, Waves } from 'lucide-react';
import BeachMail from '../components/conclusion/BeachMail';
import PageShell from '../components/layout/PageShell';
import BeachPanel from '../components/ui/BeachPanel';
import { conclusion } from '../data/portfolioData';

export default function ConclusionPage() {
  return (
    <PageShell eyebrow="shell mail" title="Tổng kết hành trình">
      <BeachMail summary={conclusion.summary} change={conclusion.change} skills={conclusion.skills} />
      <section className="panel-grid three-column reflection-lists">
        <BeachPanel title="Điểm tâm đắc" icon={<Sparkles size={22} />}>
          <ul>
            {conclusion.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </BeachPanel>
        <BeachPanel title="Thách thức" icon={<Waves size={22} />}>
          <ul>
            {conclusion.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </BeachPanel>
        <BeachPanel title="Định hướng" icon={<Compass size={22} />}>
          <p>{conclusion.direction}</p>
          <p>{conclusion.thanks}</p>
        </BeachPanel>
      </section>
    </PageShell>
  );
}
