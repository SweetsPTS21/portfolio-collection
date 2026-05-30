import {
  Camera,
  GraduationCap,
  Heart,
  Scale,
  Sparkles,
  Target,
  BookOpen,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { portfolioContent } from "./portfolioContent";
import { FlowerWindowBadge } from "../../components/ui/FlowerWindowBadge";
import { RailTag } from "../../components/ui/RailTag";
import { SparkleDivider } from "../../components/ui/SparkleDivider";
import avatar from "../../../docs/avatar.jpg";

function InfoCard({ icon: Icon, label, tone, children }) {
  return (
    <div className={`about-info-card about-info-card--${tone ?? "default"}`}>
      <div className="about-info-card__header">
        {Icon && <Icon size={16} className="about-info-card__icon" />}
        <span className="about-info-card__label">{label}</span>
      </div>
      <div className="about-info-card__body">{children}</div>
    </div>
  );
}

export function AboutJourneyPanel() {
  const about = portfolioContent.about;

  return (
    <div className="about-grid">
      {/* ── Profile ticket ── */}
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

      {/* ── Personal info ── */}
      <section className="station-card glass-surface static-card">
        <span className="card-shine" aria-hidden="true" />
        <RailTag tone="gold">Thông tin cá nhân</RailTag>
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
        <div className="about-cards-stack">
          <InfoCard icon={Heart} label="Sở thích" tone="rose">
            {about.interests}
          </InfoCard>
          <InfoCard icon={Camera} label="Phong cách" tone="mint">
            {about.style}
          </InfoCard>
        </div>
      </section>

      {/* ── Goals ── */}
      <section className="station-card glass-surface wide-card static-card">
        <span className="card-shine" aria-hidden="true" />
        <RailTag>Định hướng &amp; Mục tiêu</RailTag>
        <div className="about-cards-stack">
          <InfoCard icon={Target} label="Mục tiêu học tập và định hướng phát triển" tone="gold">
            {about.goals}
          </InfoCard>
          <InfoCard icon={BookOpen} label="Mục tiêu của Portfolio" tone="rose">
            {about.portfolioGoal}
          </InfoCard>
        </div>
      </section>

      {/* ── Principles & Tools ── */}
      <section className="station-card glass-surface wide-card static-card">
        <span className="card-shine" aria-hidden="true" />
        <RailTag tone="mint">Nguyên tắc &amp; Công cụ</RailTag>
        <div className="about-cards-stack">
          <InfoCard icon={ShieldCheck} label="Nguyên tắc thực hiện bài tập" tone="mint">
            {about.principle}
          </InfoCard>
          <InfoCard icon={Wrench} label="Các công cụ đã sử dụng" tone="default">
            <ul className="tool-list">
              {about.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </InfoCard>
        </div>
      </section>
    </div>
  );
}
