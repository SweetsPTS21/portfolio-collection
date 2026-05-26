import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, BookOpen, Scale, Activity, Bot, Music } from "lucide-react";
import {
  personalInfo,
  orientationDisplay,
  portfolioMission,
  coreSkills,
  toolsets,
} from "../data/khanhData";
import CloudCard from "../components/ui/CloudCard";


const pageTransition = {
  initial: { opacity: 0, scale: 0.96, y: 15 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -15 },
  transition: { type: "spring", stiffness: 220, damping: 20 },
};

export default function AboutPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-shell"
    >
      <header style={{ marginBottom: "32px" }}>
        <span className="eyebrow">{personalInfo.tagline}</span>
        <h1 className="page-title">Đào Ngọc Khánh</h1>
      </header>

      {/* Hero Bio Grid */}
      <section className="about-hero" style={{ marginBottom: "40px" }}>
        {/* Real Portrait with rotating starry decorations */}
        <div className="avatar-container">
          <div className="avatar-border-deco" />
          <img
            src={personalInfo.avatarUrl}
            className="avatar-image"
            alt={personalInfo.name}
          />
        </div>

        {/* Introduction and motto */}
        <div style={{ flex: 1 }}>
          <p className="about-intro-text">{personalInfo.motto}</p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div>
              <strong>Ngành học:</strong> {personalInfo.major}
            </div>
            <div>
              <strong>Trường học:</strong> {personalInfo.university}
            </div>
            <div>
              <strong>Phong cách:</strong> {personalInfo.style}
            </div>
          </div>

          <div style={{ marginTop: "20px" }}>
            <h3
              style={{
                fontSize: "1rem",
                fontWeight: "700",
                marginBottom: "8px",
                color: "var(--deep-navy)",
              }}
            >
              Sở thích của mình:
            </h3>
            <div className="about-style-box">
              <span className="badge-cloud"><Activity size={14} /> Cầu lông</span>
              <span className="badge-cloud"><Bot size={14} /> Nghiên cứu AI &amp; Luật</span>
              <span className="badge-cloud"><Music size={14} /> Thư giãn với Âm nhạc</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Grid: Orientation vs Mission */}
      <div className="deck-grid">
        {/* Orientation — visual step list */}
        <CloudCard delay={0.1} variant="mint">
          <div className="panel-header">
            <Cpu size={18} />
            <h2>Mục tiêu học tập &amp; Định hướng</h2>
          </div>
          <div>
            {orientationDisplay.map((step, idx) => (
              <div key={idx} className="orientation-step">
                <step.Icon size={22} className="orientation-step-icon" />
                <div>
                  <div className="orientation-step-headline">{step.headline}</div>
                  <div className="orientation-step-detail">{step.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </CloudCard>

        {/* Portfolio Mission — bullet points */}
        <CloudCard delay={0.2} variant="peach">
          <div className="panel-header">
            <Layers size={18} />
            <h2>{portfolioMission.title}</h2>
          </div>
          <ul className="panel-list">
            {portfolioMission.points.map((point, idx) => (
              <li key={idx} className="panel-list-item">{point}</li>
            ))}
          </ul>
        </CloudCard>
      </div>

      {/* Core Principles — with emoji icons */}
      <section className="principles-container" style={{ marginBottom: "40px" }}>
        <CloudCard delay={0.3}>
          <h2 className="principles-title">
            <Scale size={18} style={{ display: "inline", verticalAlign: "middle", marginRight: "6px" }} />
            {coreSkills.title}
          </h2>
          <p
            style={{
              textAlign: "center",
              marginBottom: "24px",
              color: "var(--deep-navy)",
              opacity: 0.85,
            }}
          >
            {coreSkills.intro}
          </p>
          <div className="principles-grid">
            {coreSkills.items.map((item, idx) => (
              <div key={idx} className="principle-card">
                <div className="principle-icon">
                  <item.Icon size={28} />
                </div>
                <div className="principle-num">0{idx + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </CloudCard>
      </section>

      {/* Toolsets — icon chip grid */}
      <section style={{ marginBottom: "20px" }}>
        <CloudCard delay={0.4} variant="gold">
          <div className="panel-header" style={{ marginBottom: "20px" }}>
            <BookOpen size={18} />
            <h2>{toolsets.title}</h2>
          </div>
          <div className="tool-chip-grid">
            {toolsets.items.map((tool, idx) => (
              <div key={idx} className="tool-chip">
                <tool.Icon size={20} className="tool-chip-icon" />
                <div>
                  <div className="tool-chip-title">{tool.title}</div>
                  <div className="tool-chip-pills">
                    {tool.tools.map((t) => (
                      <span key={t} className="tool-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CloudCard>
      </section>

    </motion.div>
  );
}
