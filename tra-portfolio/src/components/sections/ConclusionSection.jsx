import { conclusionData } from "../../data/portfolioData";
import EditorialLabel from "../ui/EditorialLabel";
import PullQuote from "../ui/PullQuote";
import RevealText from "../ui/RevealText";

export default function ConclusionSection() {
  return (
    <section
      id="conclusion"
      className="section"
    >
      <div className="container">
        {/* Section label */}
        <div style={{ marginBottom: "clamp(40px, 7vw, 80px)" }}>
          <EditorialLabel section="04" title="Reflection" />
        </div>

        {/* Pull Quote — centered, large */}
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            marginBottom: "clamp(56px, 9vw, 96px)",
          }}
        >
          <PullQuote
            quote={conclusionData.pullQuote}
            attribution="Phạm Thanh Trà — Vol. I, 2026"
          />
        </div>

        {/* Two-column reflection */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "clamp(32px, 8vw, 96px)",
            marginBottom: "clamp(48px, 8vw, 80px)",
          }}
        >
          {/* Left — Reflection paragraph */}
          <RevealText animClass="fade-up" delay="delay-1">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  color: "var(--color-accent)",
                  marginBottom: 14,
                  letterSpacing: "0.05em",
                }}
              >
                Nhìn lại hành trình
              </p>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.85,
                  color: "var(--color-muted)",
                }}
              >
                {conclusionData.reflection}
              </p>
            </div>
          </RevealText>

          {/* Right — Core growth list */}
          <RevealText animClass="fade-up" delay="delay-2">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: "clamp(13px, 1.4vw, 15px)",
                  color: "var(--color-accent)",
                  marginBottom: 20,
                  letterSpacing: "0.05em",
                }}
              >
                Kỹ năng cốt lõi đã phát triển
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {conclusionData.coreGrowth.map((item, i) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "18px 0",
                      borderTop: "1px solid var(--color-border)",
                      display: "grid",
                      gridTemplateColumns: "28px 1fr",
                      gap: 14,
                      alignItems: "start",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontStyle: "italic",
                        fontSize: 11,
                        color: "var(--color-accent)",
                        paddingTop: 3,
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 700,
                          fontSize: 14,
                          color: "var(--color-ink)",
                          marginBottom: 5,
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          fontSize: 13,
                          lineHeight: 1.7,
                          color: "var(--color-muted)",
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <div style={{ borderTop: "1px solid var(--color-border)" }} />
              </div>
            </div>
          </RevealText>
        </div>

        {/* Next steps — horizontal list */}
        <RevealText animClass="fade-up" delay="delay-3">
          <div
            style={{
              borderTop: "1.5px solid var(--color-ink)",
              paddingTop: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 24,
              }}
            >
              <span
                className="editorial-label"
                style={{ color: "var(--color-accent)" }}
              >
                §
              </span>
              <span className="editorial-label">Định hướng tiếp theo</span>
            </div>

            <div
              style={{
                display: "flex",
                gap: 0,
                flexWrap: "wrap",
              }}
            >
              {conclusionData.nextSteps.map((step, i) => (
                <div
                  key={step}
                  style={{
                    flex: "1 1 240px",
                    padding: "16px 24px 16px 0",
                    borderRight:
                      i < conclusionData.nextSteps.length - 1
                        ? "1px solid var(--color-border)"
                        : "none",
                    paddingRight: 32,
                    marginRight: 32,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "2rem",
                      lineHeight: 1,
                      color: "var(--color-border)",
                      display: "block",
                      marginBottom: 8,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "var(--color-ink)",
                      margin: 0,
                    }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </RevealText>
      </div>
    </section>
  );
}
