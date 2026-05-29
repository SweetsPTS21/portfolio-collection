import { Camera, GraduationCap, Heart, Scale, Sparkles } from "lucide-react";
import { portfolioContent } from "./portfolioContent";
import { FlowerWindowBadge } from "../../components/ui/FlowerWindowBadge";
import { RailTag } from "../../components/ui/RailTag";
import { SparkleDivider } from "../../components/ui/SparkleDivider";
import avatar from "../../../docs/avatar.jpg";

export function AboutJourneyPanel() {
  const about = portfolioContent.about;

  return (
    <div className="about-grid">
      <section className="profile-ticket glass-surface">
        <div className="avatar-window">
          <img src={avatar} alt="Đỗ Thị Huyền Mai" />
        </div>
        <div>
          <RailTag>{about.eyebrow}</RailTag>
          <h1>{about.name}</h1>
          <p>{about.greeting}</p>
          <div className="badge-row">
            <FlowerWindowBadge icon={GraduationCap}>{about.major}</FlowerWindowBadge>
            <FlowerWindowBadge icon={Scale}>{about.school}</FlowerWindowBadge>
          </div>
        </div>
      </section>

      <section className="station-card glass-surface static-card">
        <span className="card-shine" aria-hidden="true" />
        <RailTag tone="gold">Họ và tên</RailTag>
        <dl className="info-list">
          <div>
            <dt>Mã sinh viên</dt>
            <dd>{about.studentId}</dd>
          </div>
          <div>
            <dt>Ngành học</dt>
            <dd>{about.major}</dd>
          </div>
          <div>
            <dt>Trường</dt>
            <dd>{about.school}</dd>
          </div>
        </dl>
        <SparkleDivider />
        <div className="text-stack">
          <FlowerWindowBadge icon={Heart}>Sở thích</FlowerWindowBadge>
          <p>{about.interests}</p>
          <FlowerWindowBadge icon={Camera}>Phong cách</FlowerWindowBadge>
          <p>{about.style}</p>
        </div>
      </section>

      <section className="station-card glass-surface wide-card static-card">
        <span className="card-shine" aria-hidden="true" />
        <RailTag>Mục tiêu học tập và định hướng phát triển</RailTag>
        <p>{about.goals}</p>
        <SparkleDivider />
        <RailTag tone="rose">Mục tiêu của Portfolio</RailTag>
        <p>{about.portfolioGoal}</p>
      </section>

      <section className="station-card glass-surface wide-card static-card">
        <span className="card-shine" aria-hidden="true" />
        <RailTag tone="mint">Nguyên tắc thực hiện bài tập</RailTag>
        <p>{about.principle}</p>
        <SparkleDivider />
        <FlowerWindowBadge icon={Sparkles}>Các công cụ đã sử dụng</FlowerWindowBadge>
        <ul className="tool-list">
          {about.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

