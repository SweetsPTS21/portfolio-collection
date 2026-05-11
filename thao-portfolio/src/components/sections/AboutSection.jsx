import { aboutData } from "../../data/portfolioData";
import EditorialLabel from "../ui/EditorialLabel";
import RevealText from "../ui/RevealText";

export default function AboutSection() {
  return (
    <section id="about" className="section" style={{ borderBottom: "1px solid var(--color-border)" }}>
      <div className="container">
        {/* Section label */}
        <div style={{ marginBottom: "clamp(40px, 7vw, 72px)" }}>
          <EditorialLabel section="01" title="About" />
        </div>

        {/* Two-column interview layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "clamp(32px, 8vw, 96px)",
            alignItems: "start",
          }}
        >
          {/* Left column — Identity info */}
          <div>
            <RevealText animClass="fade-up" delay="delay-1">
              <h2
                className="display-md"
                style={{ marginBottom: 32 }}
              >
                {aboutData.name}
              </h2>
            </RevealText>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 0,
              }}
            >
              {[
                { label: "Ngành học", value: aboutData.major },
                { label: "Trường", value: aboutData.university },
                { label: "Phong cách", value: aboutData.style },
              ].map(({ label, value }, i) => (
                <RevealText
                  key={label}
                  animClass="fade-up"
                  delay={`delay-${i + 2}`}
                >
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "100px 1fr",
                      gap: 16,
                      padding: "16px 0",
                      borderTop: "1px solid var(--color-border)",
                    }}
                  >
                    <span
                      className="editorial-label"
                      style={{ color: "var(--color-muted)", paddingTop: 2 }}
                    >
                      {label}
                    </span>
                    <span
                      style={{
                        fontSize: 14,
                        color: "var(--color-ink)",
                        lineHeight: 1.65,
                      }}
                    >
                      {value}
                    </span>
                  </div>
                </RevealText>
              ))}

              {/* Interests */}
              <RevealText animClass="fade-up" delay="delay-5">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    gap: 16,
                    padding: "16px 0",
                    borderTop: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="editorial-label"
                    style={{ color: "var(--color-muted)", paddingTop: 2 }}
                  >
                    Sở thích
                  </span>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {aboutData.interests.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontSize: 11,
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                          letterSpacing: "0.06em",
                          padding: "3px 10px",
                          border: "1px solid var(--color-border-strong)",
                          color: "var(--color-ink)",
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </RevealText>
            </div>
          </div>

          {/* Right column — Bio / Vision (interview format) */}
          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            <RevealText animClass="fade-up" delay="delay-2">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.4vw, 15px)",
                    color: "var(--color-accent)",
                    marginBottom: 12,
                    letterSpacing: "0.05em",
                  }}
                >
                  Định hướng phát triển
                </p>
                <p
                  style={{
                    fontSize: 16,
                    lineHeight: 1.85,
                    color: "var(--color-ink)",
                  }}
                >
                  {aboutData.bio}
                </p>
              </div>
            </RevealText>

            <RevealText animClass="fade-up" delay="delay-3">
              <div
                style={{
                  borderLeft: "2px solid var(--color-accent)",
                  paddingLeft: 24,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
                    lineHeight: 1.55,
                    fontWeight: 400,
                    color: "var(--color-ink)",
                    margin: 0,
                  }}
                >
                  "{aboutData.vision}"
                </p>
              </div>
            </RevealText>

            <RevealText animClass="fade-up" delay="delay-4">
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "clamp(13px, 1.4vw, 15px)",
                    color: "var(--color-accent)",
                    marginBottom: 12,
                    letterSpacing: "0.05em",
                  }}
                >
                  Mục đích portfolio
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.8, color: "var(--color-muted)" }}>
                  {aboutData.portfolioPurpose}
                </p>
                <p
                  style={{
                    marginTop: 16,
                    fontSize: 13,
                    color: "var(--color-muted)",
                    fontStyle: "italic",
                  }}
                >
                  Xác định vấn đề → Cách tiếp cận → Kết quả → Minh chứng
                </p>
              </div>
            </RevealText>
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            #about .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
