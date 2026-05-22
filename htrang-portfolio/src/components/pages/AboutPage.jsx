import { Music2, Sparkles, Utensils } from "lucide-react";
import PageTransition from "../ui/PageTransition.jsx";
import DiaryCard from "../ui/DiaryCard.jsx";
import {
  direction,
  portfolioGoal,
  profile,
  strengths,
  tools
} from "../../data/portfolioData.js";

export default function AboutPage() {
  return (
    <PageTransition className="about-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Sunset diary profile</p>
          <h2>{profile.headline}</h2>
          <p className="hero-subtitle">{profile.subtitle}</p>
          <blockquote>“{profile.motto}”</blockquote>
          <dl className="profile-facts">
            <div>
              <dt>Ngành</dt>
              <dd>{profile.major}</dd>
            </div>
            <div>
              <dt>Trường</dt>
              <dd>{profile.university}</dd>
            </div>
            <div>
              <dt>Sở thích</dt>
              <dd>{profile.hobbies}</dd>
            </div>
            <div>
              <dt>Phong cách</dt>
              <dd>{profile.style}</dd>
            </div>
          </dl>
        </div>
        <div className="portrait-wrap">
          <img src={profile.avatarUrl} alt="Đỗ Thị Huyền Trang" />
          <span className="portrait-badge">Ocean Diary</span>
        </div>
      </section>

      <section className="content-grid">
        <DiaryCard title={direction.title} eyebrow="Sunset note">
          <p>{direction.text}</p>
        </DiaryCard>
        <DiaryCard title={portfolioGoal.title} eyebrow="Diary brief">
          <p>{portfolioGoal.text}</p>
        </DiaryCard>
      </section>

      <section className="split-grid">
        <DiaryCard title="Điểm mạnh" eyebrow="Shell highlights">
          <ul className="icon-list">
            {strengths.map((item) => (
              <li key={item}>
                <Sparkles size={16} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </DiaryCard>
        <DiaryCard title="Công cụ và nền tảng sử dụng" eyebrow="Tool tide">
          <div className="tool-grid">
            {tools.map((tool, index) => {
              const Icon = index % 2 === 0 ? Music2 : Utensils;
              return (
                <div className="tool-chip" key={tool.group}>
                  <Icon size={16} aria-hidden="true" />
                  <strong>{tool.group}</strong>
                  <span>{tool.items.join(", ")}</span>
                </div>
              );
            })}
          </div>
        </DiaryCard>
      </section>
    </PageTransition>
  );
}
