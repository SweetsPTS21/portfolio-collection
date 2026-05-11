import { GraduationCap, Sparkles } from "lucide-react";
import PastelTag from "../kbeauty/PastelTag.jsx";
import ScrollReveal from "../ui/ScrollReveal.jsx";
import { personalInfo } from "../../data/portfolioData.js";

export default function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      {/* ── Decorative SVGs – scattered behind content ── */}
      <img
        className="hero-deco hero-deco--tl"
        src="/assets/cherry-blossom.svg"
        alt=""
        aria-hidden="true"
      />
      <img
        className="hero-deco hero-deco--br"
        src="/assets/cherry-blossom.svg"
        alt=""
        aria-hidden="true"
      />

      {/* ── Left column ── */}
      <ScrollReveal className="hero-copy">
        <p className="section-kicker">✦ Digital Portfolio</p>
        <h1 className="hero-title">
          <strong>{personalInfo.displayName}</strong>
        </h1>
        <div className="hero-tags">
          <PastelTag icon={GraduationCap} color="pink">
            {personalInfo.major}
          </PastelTag>
          <PastelTag color="lavender">
            {personalInfo.university.split("–")[0].trim()}
          </PastelTag>
          <PastelTag icon={Sparkles} color="sky">
            Luật &amp; Công nghệ
          </PastelTag>
        </div>

        {/* Stat pills */}
        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat__num">6</span>
            <span className="hero-stat__label">Bài tập</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat__num">3</span>
            <span className="hero-stat__label">Công cụ AI</span>
          </div>
          <div className="hero-stat-divider" />
          <div className="hero-stat">
            <span className="hero-stat__num">5</span>
            <span className="hero-stat__label">Nền tảng</span>
          </div>
        </div>
      </ScrollReveal>

      {/* ── Right column ── */}
      <ScrollReveal className="hero-visual">
        {/* Illustration — top-right of visual column */}
        <img
          className="hero-illus-float"
          src="/assets/undraw-study.svg"
          alt="Minh họa học tập"
        />

        {/* Avatar */}
        <div className="avatar-frame">
          <img src={personalInfo.avatar} alt={personalInfo.displayName} />
        </div>

        {/* Floating info card */}
        <div className="beauty-label">
          <small>Trường</small>
          {personalInfo.university}
        </div>

        {/* Serum drop decoration */}
        <div className="serum-drop" aria-hidden="true" />
      </ScrollReveal>
    </section>
  );
}
