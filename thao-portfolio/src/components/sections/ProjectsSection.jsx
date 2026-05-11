import { useState } from "react";
import { projectsData } from "../../data/portfolioData";
import EditorialLabel from "../ui/EditorialLabel";
import RevealText from "../ui/RevealText";

export default function ProjectsSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id="projects"
      className="section"
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      <div className="container">
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "clamp(40px, 7vw, 72px)",
            gap: 24,
          }}
        >
          <EditorialLabel section="02" title="Works" />
          <span
            className="editorial-label"
            style={{ color: "var(--color-muted)" }}
          >
            6 bài tập — Tin học đại cương
          </span>
        </div>

        {/* Projects list — editorial spread style */}
        <div>
          {projectsData.map((project, i) => (
            <RevealText
              key={project.id}
              animClass="fade-up"
              delay={`delay-${(i % 3) + 1}`}
            >
              <article
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  display: "grid",
                  gridTemplateColumns: "120px 1fr auto",
                  gap: "clamp(16px, 4vw, 48px)",
                  alignItems: "start",
                  padding: "clamp(24px, 4vw, 40px) 0",
                  borderTop: "1px solid var(--color-border)",
                  cursor: "default",
                  transition: "background 0.25s ease",
                  background:
                    hoveredId === project.id
                      ? "var(--color-surface)"
                      : "transparent",
                  marginLeft: "clamp(-24px, -5vw, -80px)",
                  marginRight: "clamp(-24px, -5vw, -80px)",
                  paddingLeft: "clamp(24px, 5vw, 80px)",
                  paddingRight: "clamp(24px, 5vw, 80px)",
                }}
              >
                {/* Big editorial number */}
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 900,
                    fontSize: "clamp(3rem, 6vw, 5.5rem)",
                    lineHeight: 1,
                    color:
                      hoveredId === project.id
                        ? "var(--color-accent)"
                        : "var(--color-border-strong)",
                    transition: "color 0.3s ease",
                    userSelect: "none",
                    letterSpacing: "-0.02em",
                    paddingTop: 4,
                  }}
                >
                  {project.id}
                </div>

                {/* Content */}
                <div>
                  {/* Category tag */}
                  <span
                    className="editorial-label"
                    style={{
                      color: "var(--color-accent)",
                      marginBottom: 8,
                      display: "block",
                    }}
                  >
                    {project.category}
                  </span>

                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.1rem, 2.5vw, 1.75rem)",
                      fontWeight: 700,
                      lineHeight: 1.25,
                      marginBottom: 12,
                      color: "var(--color-ink)",
                    }}
                  >
                    {project.title}
                  </h3>

                  {/* Italic English subtitle */}
                  <p
                    style={{
                      fontFamily: "var(--font-display)",
                      fontStyle: "italic",
                      fontWeight: 400,
                      fontSize: 13,
                      color: "var(--color-muted)",
                      marginBottom: 14,
                    }}
                  >
                    {project.subtitle}
                  </p>

                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "var(--color-muted)",
                      maxWidth: 600,
                      opacity: hoveredId === project.id ? 1 : 0.75,
                      transition: "opacity 0.25s ease",
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Right — PDF link */}
                <div
                  style={{
                    paddingTop: 6,
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  {project.pdf && (
                    <a
                      href={project.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        fontFamily: "var(--font-body)",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        color:
                          hoveredId === project.id
                            ? "var(--color-accent)"
                            : "var(--color-muted)",
                        textDecoration: "none",
                        borderBottom: "1px solid currentColor",
                        paddingBottom: 2,
                        transition: "color 0.25s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Xem bài
                      <span style={{ fontSize: 12 }}>↗</span>
                    </a>
                  )}
                </div>
              </article>
            </RevealText>
          ))}

          {/* Final bottom border */}
          <div
            style={{
              borderTop: "1px solid var(--color-border)",
              paddingTop: 24,
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <span className="page-num">Bài 01 – 06 / Tất cả</span>
          </div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            article { grid-template-columns: 72px 1fr !important; }
            article > div:last-child { display: none !important; }
          }
        `}</style>
      </div>
    </section>
  );
}
