import React from "react";
import { motion } from "framer-motion";
import { Award, Compass, ShieldAlert, Sparkles } from "lucide-react";
import { conclusion } from "../data/khanhData";
import CloudCard from "../components/ui/CloudCard";


const pageTransition = {
  initial: { opacity: 0, scale: 0.96, y: 15 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -15 },
  transition: { type: "spring", stiffness: 220, damping: 20 },
};

export default function ConclusionPage() {
  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-shell"
    >
      <header style={{ marginBottom: "24px" }}>
        <span className="eyebrow">HÀNH TRÌNH KHÉP LẠI</span>
        <h1 className="page-title">Tổng Kết & Tri Ân</h1>
      </header>

      {/* Summary box */}
      <section className="conclusion-summary-box" style={{ marginBottom: "40px" }}>
        <CloudCard>
          <p style={{ color: "var(--deep-navy)", opacity: 0.9, lineHeight: "1.8", margin: 0 }}>
            {conclusion.summary}
          </p>
        </CloudCard>
      </section>

      {/* Dynamic Grid: Skills vs Highlights */}
      <div className="deck-grid" style={{ marginBottom: "30px" }}>
        {/* Key skills — chip list */}
        <CloudCard delay={0.1} variant="mint">
          <div className="panel-header">
            <Award size={18} />
            <h2>Kiến thức &amp; Kỹ năng quan trọng nhất</h2>
          </div>
          <div className="skill-chip-grid">
            {conclusion.skills.map((skill, idx) => (
              <div key={idx} className="skill-chip">
                <span className="skill-chip-dot" aria-hidden="true" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </CloudCard>

        {/* Heart Highlights — chip list */}
        <CloudCard delay={0.2} variant="peach">
          <div className="panel-header">
            <Sparkles size={18} />
            <h2>Những điểm mình tâm đắc nhất</h2>
          </div>
          <div className="skill-chip-grid">
            {conclusion.highlights.map((highlight, idx) => (
              <div key={idx} className="skill-chip">
                <span className="skill-chip-dot highlight-chip-dot" aria-hidden="true" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </CloudCard>
      </div>

      {/* Deep Reflection — Challenge bullet points */}
      <section style={{ marginBottom: "30px" }}>
        <CloudCard delay={0.3} variant="gold">
          <div className="panel-header">
            <ShieldAlert size={20} style={{ color: "var(--starlight-gold)" }} />
            <h2 style={{ fontSize: "1.05rem", fontWeight: "700" }}>
              Thách thức &amp; Phản xạ đối phó "AI ảo giác luật"
            </h2>
          </div>
          <div>
            {conclusion.challengePoints.map((cp, idx) => (
              <div key={idx} className="challenge-point">
                <cp.Icon size={20} className="challenge-point-icon" />
                <div>
                  <div className="challenge-point-label">{cp.label}</div>
                  <div className="challenge-point-text">{cp.text}</div>
                </div>
              </div>
            ))}
          </div>
        </CloudCard>
      </section>

      {/* Future Directions */}
      <section style={{ marginBottom: "40px" }}>
        <CloudCard delay={0.4}>
          <div className="panel-header">
            <Compass size={18} />
            <h2>Định hướng tương lai</h2>
          </div>
          <div className="panel-list">
            {conclusion.future.map((goal, idx) => (
              <p key={idx} className="panel-list-item" style={{ fontSize: "0.95rem" }}>
                {goal}
              </p>
            ))}
          </div>
        </CloudCard>
      </section>

      {/* Tri ân & Thank you Tulips */}
      <section>
        <CloudCard delay={0.5} className="acknowledgement-card">
          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: "700", marginBottom: "16px", color: "var(--deep-navy)" }}>
            Lời Tri Ân
          </h2>
          <p style={{ fontSize: "0.95rem", lineHeight: "1.8", opacity: 0.9, maxWidth: "680px", margin: "0 auto 24px" }}>
            {conclusion.acknowledgement}
          </p>

          {/* Adorable custom Tulip basket with shuttlecock SVG drawing */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <svg viewBox="0 0 200 150" width="180" className="conclusion-tulips-img" aria-label="Giỏ hoa tulip tri ân">
              {/* Basket Body */}
              <path d="M60,90 Q100,120 140,90 L130,130 Q100,145 70,130 Z" fill="#EAD4C3" stroke="#B08D73" strokeWidth="2.5" />
              {/* Basket weaving lines */}
              <path d="M70,95 L80,132 M100,102 L100,138 M130,95 L120,132 M75,110 Q100,125 125,110 M70,120 Q100,135 130,120" stroke="#B08D73" strokeWidth="1.5" fill="none" />
              <path d="M50,90 Q100,105 150,90" stroke="#B08D73" strokeWidth="3" fill="none" />
              {/* Basket Handle */}
              <path d="M60,90 C40,40 160,40 140,90" stroke="#B08D73" strokeWidth="3.5" fill="none" />
              {/* Tulip Leaves */}
              <path d="M45,95 Q30,60 55,65 Q70,70 65,95 Z" fill="#8AEED2" />
              <path d="M155,95 Q170,60 145,65 Q130,70 135,95 Z" fill="#8AEED2" />
              <path d="M95,100 Q100,60 90,70 Q80,80 85,100 Z" fill="#8AEED2" />

              {/* Tulip Flower 1 (Peach) */}
              <g transform="translate(60, 50)">
                <path d="M0,0 C-10,-10 -15,-25 -5,-35 C2,-42 12,-30 0,0" fill="#FFAEBE" />
                <path d="M0,0 C10,-10 15,-25 5,-35 C-2,-42 -12,-30 0,0" fill="#FFAEBE" />
                <path d="M0,0 C-5,-15 5,-30 0,-38 C-5,-30 5,-15 0,0" fill="#FFC5D0" />
              </g>

              {/* Tulip Flower 2 (Soft Pink) */}
              <g transform="translate(140, 50)">
                <path d="M0,0 C-10,-10 -15,-25 -5,-35 C2,-42 12,-30 0,0" fill="#FFAEBE" />
                <path d="M0,0 C10,-10 15,-25 5,-35 C-2,-42 -12,-30 0,0" fill="#FFAEBE" />
                <path d="M0,0 C-5,-15 5,-30 0,-38 C-5,-30 5,-15 0,0" fill="#FFC5D0" />
              </g>

              {/* Tulip Flower 3 (Gold) */}
              <g transform="translate(100, 40)">
                <path d="M0,0 C-10,-10 -15,-25 -5,-35 C2,-42 12,-30 0,0" fill="#FFE27A" />
                <path d="M0,0 C10,-10 15,-25 5,-35 C-2,-42 -12,-30 0,0" fill="#FFE27A" />
                <path d="M0,0 C-5,-15 5,-30 0,-38 C-5,-30 5,-15 0,0" fill="#FFF0B2" />
              </g>

              {/* Cute Shuttlecock tucked inside the tulip basket */}
              <g transform="translate(100, 85) scale(0.65)">
                {/* Feathers */}
                <path d="M-30,-40 L-10,0 L10,0 L30,-40 L15,-40 L0,-15 L-15,-40 Z" fill="#ffffff" stroke="#89CFF0" strokeWidth="1.5" />
                <path d="M-20,-40 L-8,-5 L8,-5 L20,-40" stroke="#89CFF0" strokeWidth="1" fill="none" />
                <line x1="-15" y1="-20" x2="15" y2="-20" stroke="#89CFF0" strokeWidth="1.5" />
                {/* Shuttlecock Base */}
                <path d="M-12,0 C-12,18 12,18 12,0 Z" fill="#89CFF0" stroke="#569EC2" strokeWidth="1.5" />
                <path d="M-12,0 L12,0" stroke="#FF8AA8" strokeWidth="2" />
              </g>

              {/* Silk Bow tied to the handle */}
              <path d="M100,45 C90,35 70,35 85,50 C95,60 100,50 100,50 C100,50 105,60 115,50 C130,35 110,35 100,45" fill="#89CFF0" stroke="#569EC2" strokeWidth="1" />
              <path d="M88,52 Q70,75 55,80" stroke="#89CFF0" strokeWidth="2.5" fill="none" />
              <path d="M112,52 Q130,75 145,80" stroke="#89CFF0" strokeWidth="2.5" fill="none" />
            </svg>
          </div>
        </CloudCard>
      </section>

    </motion.div>
  );
}
