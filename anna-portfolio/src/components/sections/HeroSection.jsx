import { useSpring, animated } from "@react-spring/web";
import {
  Feather,
  BookOpen,
  Film,
  MapPin,
  Scale,
  BookMarked,
  Network,
} from "lucide-react";
import {
  personalInfo,
  hobbies,
  workingPrinciples,
} from "../../data/portfolioData";
import ScrollReveal from "../ui/ScrollReveal";

const HOBBY_ICONS = { Feather, BookOpen, Film, MapPin };

function HobbyTag({ label, icon }) {
  const Icon = HOBBY_ICONS[icon] || Feather;
  return (
    <span
      className="tag-pill"
      style={{ display: "inline-flex", alignItems: "center", gap: 6 }}
    >
      <Icon size={12} strokeWidth={2} />
      {label}
    </span>
  );
}

function PrincipleItem({ title, desc, index }) {
  return (
    <ScrollReveal delay={index * 120} direction="left">
      <div
        style={{
          display: "flex",
          gap: 16,
          padding: "14px 0",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <span
          style={{
            minWidth: 28,
            fontSize: 11,
            fontWeight: 600,
            color: "var(--color-muted)",
            letterSpacing: "0.1em",
            paddingTop: 2,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div>
          <p
            style={{
              fontWeight: 600,
              fontSize: 14,
              color: "var(--color-text)",
              marginBottom: 4,
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: 13,
              color: "var(--color-muted)",
              lineHeight: 1.6,
            }}
          >
            {desc}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function HeroSection() {
  const labelSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 100,
    config: { tension: 160, friction: 28 },
  });

  const nameSpring = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 250,
    config: { tension: 160, friction: 26 },
  });

  const avatarSpring = useSpring({
    from: { opacity: 0, transform: "translateY(16px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 400,
    config: { tension: 140, friction: 28 },
  });

  const contentSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 600,
    config: { tension: 160, friction: 28 },
  });

  return (
    <section
      id="hero"
      style={{
        paddingTop: 104,
        paddingBottom: 80,
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Top label */}
        <animated.div style={labelSpring}>
          <span
            className="section-number"
            style={{ marginBottom: 40, display: "block" }}
          >
            Digital Persona · Portfolio 2026
          </span>
        </animated.div>

        {/* ── Main layout: [Left text] [Center avatar] [Right card] ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: "48px 56px",
            alignItems: "start",
          }}
          className="hero-grid"
        >
          {/* ── Col 1: Tên + mô tả + sở thích ── */}
          <div>
            <animated.h1
              style={{
                ...nameSpring,
                fontFamily: "'Libre Baskerville', serif",
                lineHeight: 1.15,
                marginBottom: 20,
              }}
            >
              Tống Thị
              <br />
              <span style={{ color: "var(--color-primary)" }}>An Na</span>
            </animated.h1>

            <animated.div style={contentSpring}>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--color-muted)",
                  fontStyle: "italic",
                  marginBottom: 20,
                }}
              >
                Sinh viên ngành {personalInfo.major}
              </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  marginBottom: 28,
                  color: "var(--color-muted)",
                  fontSize: 13,
                }}
              >
                <Scale size={13} strokeWidth={1.5} />
                <span>{personalInfo.university}</span>
              </div>

              <p
                style={{
                  fontSize: 14,
                  color: "var(--color-text)",
                  lineHeight: 1.85,
                  marginBottom: 28,
                }}
              >
                {personalInfo.description}
              </p>

              {/* Hobbies */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {hobbies.map((h) => (
                  <HobbyTag key={h.label} {...h} />
                ))}
              </div>
            </animated.div>
          </div>

          {/* ── Col 2: Avatar — trung tâm, nổi bật ── */}
          <animated.div style={avatarSpring}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 0,
              }}
            >
              {/* Frame kiểu hồ sơ pháp lý */}
              <div
                style={{
                  position: "relative",
                  width: 220,
                  flexShrink: 0,
                }}
              >
                {/* Corner accents */}
                {[
                  {
                    top: 0,
                    left: 0,
                    borderTop: "2px solid var(--color-primary)",
                    borderLeft: "2px solid var(--color-primary)",
                  },
                  {
                    top: 0,
                    right: 0,
                    borderTop: "2px solid var(--color-primary)",
                    borderRight: "2px solid var(--color-primary)",
                  },
                  {
                    bottom: 0,
                    left: 0,
                    borderBottom: "2px solid var(--color-primary)",
                    borderLeft: "2px solid var(--color-primary)",
                  },
                  {
                    bottom: 0,
                    right: 0,
                    borderBottom: "2px solid var(--color-primary)",
                    borderRight: "2px solid var(--color-primary)",
                  },
                ].map((s, i) => (
                  <span
                    key={i}
                    style={{
                      position: "absolute",
                      width: 16,
                      height: 16,
                      ...s,
                      zIndex: 2,
                    }}
                  />
                ))}

                {/* Photo */}
                <div
                  style={{
                    margin: 6,
                    overflow: "hidden",
                    borderRadius: 2,
                    background: "var(--color-surface, #F2EFE8)",
                  }}
                >
                  <img
                    src="/assets/avatar.png"
                    alt="Tống Thị An Na"
                    style={{
                      width: "100%",
                      aspectRatio: "3/4",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                    }}
                  />
                </div>
              </div>

              {/* Name tag bên dưới ảnh */}
              <div
                style={{
                  marginTop: 12,
                  padding: "8px 16px",
                  border: "1px solid var(--color-border)",
                  borderRadius: 2,
                  textAlign: "center",
                  background: "#fff",
                  width: 220,
                }}
              >
                <p
                  style={{
                    fontFamily: "'Libre Baskerville', serif",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "var(--color-text)",
                    letterSpacing: "0.03em",
                  }}
                >
                  Tống Thị An Na
                </p>
                <p
                  style={{
                    fontSize: 11,
                    color: "var(--color-muted)",
                    marginTop: 2,
                    letterSpacing: "0.06em",
                  }}
                >
                  {personalInfo.major}
                </p>
              </div>
            </div>
          </animated.div>

          {/* ── Col 3: Identity Card ── */}
          <ScrollReveal delay={500} direction="up">
            <div
              style={{
                borderLeft: "3px solid var(--color-primary)",
                paddingLeft: 28,
              }}
            >
              {/* Profile fields */}
              <div style={{ marginBottom: 28 }}>
                {[
                  {
                    icon: BookMarked,
                    label: "Ngành",
                    value: personalInfo.major,
                  },
                  { icon: Scale, label: "Trường", value: "ĐH Luật – ĐHQGHN" },
                ].map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    style={{
                      display: "flex",
                      gap: 12,
                      padding: "11px 0",
                      borderBottom: "1px solid var(--color-border)",
                      alignItems: "flex-start",
                    }}
                  >
                    <Icon
                      size={14}
                      strokeWidth={1.5}
                      style={{
                        color: "var(--color-primary)",
                        marginTop: 2,
                        flexShrink: 0,
                      }}
                    />
                    <div>
                      <p
                        style={{
                          fontSize: 11,
                          color: "var(--color-muted)",
                          marginBottom: 2,
                          letterSpacing: "0.06em",
                        }}
                      >
                        {label}
                      </p>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "var(--color-text)",
                        }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Working principles */}
              <p
                style={{
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--color-muted)",
                  marginBottom: 12,
                }}
              >
                Nguyên tắc thực hiện
              </p>
              {workingPrinciples.map((p, i) => (
                <PrincipleItem key={i} index={i} {...p} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Responsive: stack on small screens */}
      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
