import { Anchor, Heart, ShipWheel, Waves } from 'lucide-react';
import bottle from '../assets/bottle.png';
import conclutionBg from '../assets/conclution-bg.png';
import footerBg from '../assets/footer.png';
import wave from '../assets/wave.png';
import PageTransition from '../components/ui/PageTransition.jsx';
import WoodButton from '../components/ui/WoodButton.jsx';
import { conclusion, profile } from '../data/portfolioData.js';

export default function ConclutionsPage() {
  const icons = [ShipWheel, Heart, Waves];

  return (
    <PageTransition
      className="conclutions-page"
      style={{ backgroundImage: `url(${conclutionBg})` }}
    >
      <section className="conclusion-harbor">
        <div className="conclusion-copy">
          <h1>Tổng kết</h1>
          <div className="board-wave" aria-hidden="true" />
          <p>{conclusion.summary}</p>
        </div>

        <div className="conclusion-highlights">
          {conclusion.highlights.map((item, index) => {
            const Icon = icons[index] ?? Anchor;
            return (
              <article className="highlight-card" key={item.title}>
                <Icon size={34} strokeWidth={1.7} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>

        <p className="solution-note">{conclusion.solution}</p>
      </section>
      <footer className="harbor-footer">
        <div>
          <strong>{profile.displayName}</strong>
          <p>Sinh viên ngành {profile.major}</p>
          <p>{profile.university}</p>
        </div>
        <p>Portfolio hoc tap - Law x Technology</p>
      </footer>
    </PageTransition>
  );
}
