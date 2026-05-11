import { skillsData, toolsData } from "../../data/portfolioData";
import EditorialLabel from "../ui/EditorialLabel";
import RevealText from "../ui/RevealText";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="section"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="container">
        {/* Section label */}
        <div style={{ marginBottom: "clamp(40px, 7vw, 72px)" }}>
          <EditorialLabel section="03" title="Capabilities" />
        </div>

        {/* Skills — Table of contents style */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(24px, 6vw, 64px)",
            marginBottom: "clamp(48px, 8vw, 80px)",
          }}
        >
          {skillsData.map((group, gi) => (
            <RevealText
              key={group.area}
              animClass="fade-up"
              delay={`delay-${gi + 1}`}
            >
              <div>
                {/* Area heading */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 20,
                    paddingBottom: 16,
                    borderBottom: "1.5px solid var(--color-ink)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 900,
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      lineHeight: 1,
                      color: "var(--color-border-strong)",
                      letterSpacing: "-0.02em",
                      userSelect: "none",
                    }}
                  >
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(0.95rem, 1.8vw, 1.2rem)",
                      fontWeight: 700,
                      lineHeight: 1.2,
                      margin: 0,
                      color: "var(--color-ink)",
                    }}
                  >
                    {group.area}
                  </h3>
                </div>

                {/* Items list */}
                <ul
                  style={{
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 0,
                  }}
                >
                  {group.items.map((item, ii) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 12,
                        padding: "11px 0",
                        borderBottom: "1px solid var(--color-border)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontStyle: "italic",
                          fontSize: 11,
                          color: "var(--color-accent)",
                          minWidth: 20,
                          userSelect: "none",
                        }}
                      >
                        {String(ii + 1).padStart(2, "0")}
                      </span>
                      <span
                        style={{
                          fontSize: 14,
                          color: "var(--color-ink)",
                          lineHeight: 1.5,
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealText>
          ))}
        </div>

        {/* Tools section */}
        <RevealText animClass="fade-up" delay="delay-1">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginBottom: 28,
              }}
            >
              <span
                className="editorial-label"
                style={{ color: "var(--color-accent)" }}
              >
                §
              </span>
              <span className="editorial-label">Công cụ & Nền tảng</span>
              <span
                style={{
                  flex: 1,
                  height: 1,
                  background: "var(--color-border)",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 0,
              }}
            >
              {toolsData.map((group, gi) => (
                <div
                  key={group.category}
                  style={{
                    flex: "0 0 auto",
                    padding: "16px 24px",
                    borderRight:
                      gi < toolsData.length - 1
                        ? "1px solid var(--color-border)"
                        : "none",
                    borderTop: "1px solid var(--color-border)",
                    minWidth: 160,
                  }}
                >
                  <p
                    className="editorial-label"
                    style={{
                      color: "var(--color-muted)",
                      marginBottom: 8,
                    }}
                  >
                    {group.category}
                  </p>
                  {group.tools.map((tool) => (
                    <p
                      key={tool}
                      style={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "var(--color-ink)",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </RevealText>

        <style>{`
          @media (max-width: 640px) {
            #skills .skill-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
