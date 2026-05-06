import {
  Target,
  Brain,
  Cpu,
  Clock,
  CheckSquare,
  FileText,
  ArrowRight,
} from "lucide-react";
import {
  reflections,
  lessons,
  conclusionText,
  finalConclusion,
  futureGoals,
  personalInfo,
} from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";
import ScrollReveal from "../ui/ScrollReveal";

const ICON_MAP = { Target, Brain, Cpu, Clock, CheckSquare, FileText };

// ── Timeline item ─────────────────────────────────────────
function TimelineItem({ id, title, desc, icon, index, isLast }) {
  const Icon = ICON_MAP[icon] || Target;

  return (
    <ScrollReveal delay={index * 120} direction="up">
      <div style={{ display: "flex", gap: 20, position: "relative" }}>
        {/* Line connector */}
        {!isLast && (
          <div
            style={{
              position: "absolute",
              left: 19,
              top: 40,
              bottom: -20,
              width: 1,
              background: "var(--color-border)",
            }}
          />
        )}

        {/* Circle indicator */}
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: "1.5px solid var(--color-primary)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            background: "#fff",
            zIndex: 1,
          }}
        >
          <Icon
            size={15}
            strokeWidth={1.5}
            style={{ color: "var(--color-primary)" }}
          />
        </div>

        {/* Content */}
        <div style={{ paddingBottom: 32 }}>
          <span
            style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "var(--color-primary)",
              opacity: 0.7,
            }}
          >
            {id}
          </span>
          <h3
            style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 16,
              color: "var(--color-text)",
              margin: "4px 0 8px",
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: 14,
              color: "var(--color-muted)",
              lineHeight: 1.75,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ── Lesson Card ───────────────────────────────────────────
function LessonCard({ title, desc, icon, index }) {
  const Icon = ICON_MAP[icon] || Clock;

  return (
    <ScrollReveal delay={index * 100} direction="up">
      <div
        style={{
          display: "flex",
          gap: 16,
          padding: "20px 24px",
          border: "1px solid var(--color-border)",
          borderRadius: 4,
          background: "rgba(27, 58, 92, 0.03)",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "var(--color-primary)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "var(--color-border)";
        }}
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 4,
            border: "1px solid rgba(27,58,92,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Icon
            size={16}
            strokeWidth={1.5}
            style={{ color: "var(--color-primary)" }}
          />
        </div>
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: "var(--color-text)",
              marginBottom: 6,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: 13,
              color: "var(--color-muted)",
              lineHeight: 1.7,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

// ── Main ──────────────────────────────────────────────────
export default function ConclusionSection() {
  return (
    <section
      id="conclusion"
      style={{
        padding: "80px 0",
        background: "#fff",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Conclusion overview */}
        <ScrollReveal>
          <SectionTitle
            number="05"
            title="Kết luận"
            subtitle="Nhìn lại hành trình học tập và những bài học rút ra"
          />
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <p
            style={{
              fontSize: 15,
              lineHeight: 1.9,
              color: "var(--color-text)",
              maxWidth: 720,
              marginBottom: 64,
              whiteSpace: "pre-line",
            }}
          >
            {conclusionText}
          </p>
        </ScrollReveal>

        {/* Two column */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 64,
            marginBottom: 64,
          }}
        >
          {/* Reflections timeline */}
          <div>
            <ScrollReveal>
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  marginBottom: 32,
                }}
              >
                Những thay đổi nhận thấy
              </h3>
            </ScrollReveal>
            {reflections.map((r, i) => (
              <TimelineItem
                key={r.id}
                {...r}
                index={i}
                isLast={i === reflections.length - 1}
              />
            ))}
          </div>

          {/* Lessons */}
          <div>
            <ScrollReveal>
              <h3
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  marginBottom: 32,
                }}
              >
                Kinh nghiệm rút ra
              </h3>
            </ScrollReveal>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {lessons.map((l, i) => (
                <LessonCard key={i} index={i} {...l} />
              ))}
            </div>
          </div>
        </div>

        {/* Future goals */}
        <ScrollReveal>
          <div
            style={{
              borderTop: "1px solid var(--color-border)",
              paddingTop: 40,
              marginBottom: 48,
            }}
          >
            <h3
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.15em",
                color: "var(--color-muted)",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Hướng phát triển
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {futureGoals.map((goal, i) => (
                <div
                  key={i}
                  style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                >
                  <ArrowRight
                    size={14}
                    strokeWidth={2}
                    style={{
                      color: "var(--color-primary)",
                      marginTop: 3,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontSize: 14,
                      color: "var(--color-text)",
                      lineHeight: 1.6,
                    }}
                  >
                    {goal}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Final conclusion block */}
        <ScrollReveal>
          <div
            style={{
              borderLeft: "3px solid var(--color-primary)",
              paddingLeft: 28,
              paddingTop: 4,
              paddingBottom: 4,
            }}
          >
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.9,
                color: "var(--color-text)",
                fontStyle: "italic",
              }}
            >
              {finalConclusion}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
