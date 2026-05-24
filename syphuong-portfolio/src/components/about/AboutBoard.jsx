import {
  Building2,
  Compass,
  GraduationCap,
  Heart,
  Target,
  UserRound,
} from 'lucide-react';
import aboutFrame from '../../assets/about-frame.png';
import { profile } from '../../data/portfolioData.js';

const items = [
  { icon: UserRound, label: 'Họ và tên', value: profile.displayName },
  { icon: GraduationCap, label: 'Ngành học', value: profile.major },
  { icon: Building2, label: 'Truong', value: profile.university },
  { icon: Heart, label: 'Sở thích', value: profile.interests },
  { icon: Compass, label: 'Phong cach', value: profile.personality },
];

export default function AboutBoard() {
  return (
    <section className="about-board-section">
      <div
        className="about-board"
        style={{ backgroundImage: `url(${aboutFrame})` }}
      >
        <div>
          <div className="about-board-copy">
            <h2>Về tôi</h2>
            <div className="board-wave" aria-hidden="true" />
          </div>

          <div className="identity-grid">
            {items.map((item) => (
              <article className="identity-item" key={item.label}>
                <item.icon size={32} strokeWidth={1.8} />
                <div>
                  <strong>{item.label}:</strong>
                  <p>{item.value}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <article className="goal-card">
          <Target size={36} strokeWidth={1.8} />
          <div>
            <h3>Mục tiêu</h3>
            <p>{profile.goal}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
