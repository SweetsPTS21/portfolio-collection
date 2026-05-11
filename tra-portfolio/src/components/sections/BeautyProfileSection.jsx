import { CheckCircle2 } from "lucide-react";
import GlassCard from "../kbeauty/GlassCard.jsx";
import ScrollReveal from "../ui/ScrollReveal.jsx";
import {
  about,
  developmentDirection,
  portfolioPurpose,
} from "../../data/portfolioData.js";

export default function BeautyProfileSection() {
  return (
    <section className="section-shell" id="profile">
      <ScrollReveal>
        <p className="section-kicker">✦ Beauty Profile</p>
        <h2 className="section-title">Về tôi</h2>
        <p className="section-lead">{developmentDirection.intro}</p>
      </ScrollReveal>

      <div className="profile-grid">
        <ScrollReveal>
          <GlassCard className="content-card" accent="pink">
            <h3>{about.title}</h3>
            <dl className="profile-list">
              {about.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal>
          <GlassCard className="content-card" accent="lavender">
            <h3>{developmentDirection.title}</h3>
            <p>{developmentDirection.focus}</p>
            <ul>
              {developmentDirection.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p style={{ marginTop: "14px" }}>{developmentDirection.longTerm}</p>
          </GlassCard>
        </ScrollReveal>

        <ScrollReveal className="profile-grid-span">
          <GlassCard className="content-card" accent="sky">
            <h3>{portfolioPurpose.title}</h3>
            <p>{portfolioPurpose.intro}</p>
            <SequenceFlow value={portfolioPurpose.sequence} />
            <ul style={{ marginTop: "14px" }}>
              {portfolioPurpose.benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}

function SequenceFlow({ value }) {
  const steps = value.split("→").map((s) => s.trim());
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        alignItems: "center",
        margin: "14px 0 0",
      }}
    >
      {steps.map((step, i) => (
        <span
          key={step}
          style={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <span
            style={{
              padding: "5px 14px",
              borderRadius: "999px",
              background: "rgba(184,216,245,0.2)",
              border: "1px solid rgba(184,216,245,0.45)",
              fontSize: ".82rem",
              fontWeight: 600,
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              color: "var(--text)",
            }}
          >
            <CheckCircle2
              size={13}
              strokeWidth={2.2}
              aria-hidden="true"
              style={{
                display: "inline",
                marginRight: "5px",
                verticalAlign: "-2px",
                color: "var(--sky)",
              }}
            />
            {step}
          </span>
          {i < steps.length - 1 && (
            <span style={{ color: "var(--text-muted)", fontSize: ".9rem" }}>
              →
            </span>
          )}
        </span>
      ))}
    </div>
  );
}
