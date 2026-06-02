import { Brain, Flag, ShieldCheck, Trophy } from 'lucide-react';
import { portfolioData } from '../data/portfolioData.js';
import PrincipleSlab from '../features/content/PrincipleSlab.jsx';
import RecapTimelineCard from '../features/motion-cards/RecapTimelineCard.jsx';

export default function FinalWhistleRoute() {
  const challengeSection = portfolioData.recapSections.find((section) =>
    section.title.includes('thách thức')
  );
  const finalSectionIndex = portfolioData.recapSections.length - 1;
  const statCards = [
    {
      label: 'Mục tổng kết',
      value: String(portfolioData.recapSections.length).padStart(2, '0'),
      icon: Trophy,
    },
    {
      label: 'Thách thức',
      value: String(challengeSection?.items.length ?? 0).padStart(2, '0'),
      icon: ShieldCheck,
    },
    {
      label: 'Nguyên tắc AI',
      value: '01',
      icon: Brain,
      title: portfolioData.aiPrinciple,
    },
  ];

  return (
    <div className="route-stack recap-route final-whistle-route">
      <section className="final-scoreboard">
        <div className="final-scoreboard-copy">
          <p className="section-kicker">Trang Tổng kết (Conclusion)</p>
          <h1>Tổng kết</h1>
          <p>{portfolioData.conclusion}</p>
        </div>

        <aside className="final-scoreboard-panel" aria-label="Bảng tổng kết">
          <div className="final-panel-topline">
            <span>Final Whistle</span>
            <Flag size={22} />
          </div>
          <div className="final-stat-grid">
            {statCards.map(({ label, value, icon: Icon, title }) => (
              <div className="final-stat-card" title={title} key={label}>
                <Icon size={22} />
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </aside>
      </section>

      <PrincipleSlab />

      <section className="recap-play-grid" aria-label="Các mục tổng kết">
        {portfolioData.recapSections.map((section, index) => (
          <RecapTimelineCard
            title={section.title}
            items={section.items}
            index={index}
            featured={index === finalSectionIndex}
            key={section.title}
          />
        ))}
      </section>
    </div>
  );
}
