import { useEffect, useRef, useState } from "react";
import { aboutData, avatarPath } from "../../data/portfolioData";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        paddingTop: 80,
        paddingBottom: "clamp(48px, 8vw, 96px)",
        borderBottom: "1px solid var(--color-border)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        {/* Issue label row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: "clamp(32px, 5vw, 56px)",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.5s ease 0.1s",
          }}
        >
          <span
            className="editorial-label"
            style={{ color: "var(--color-accent)" }}
          >
            Portfolio
          </span>
          <span
            style={{
              flex: 1,
              maxWidth: 64,
              height: 1,
              background: "var(--color-border-strong)",
            }}
          />
          <span className="editorial-label">Vol. I — 2026</span>
        </div>

        {/* Main grid — asymmetric: text left | portrait right */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr clamp(200px, 28vw, 400px)",
            gap: "clamp(32px, 6vw, 80px)",
            alignItems: "flex-end",
          }}
        >
          {/* LEFT — Name + info column */}
          <div>
            {/* "Phạm Thanh" sub-label */}
            <p
              className="editorial-label"
              style={{
                color: "var(--color-muted)",
                marginBottom: 10,
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(10px)",
                transition: "all 0.5s ease 0.25s",
              }}
            >
              Phạm&nbsp;Thanh
            </p>

            {/* HUGE name */}
            <h1
              className="display-xl"
              style={{
                clipPath: mounted ? "inset(0 0% 0 0)" : "inset(0 100% 0 0)",
                transition:
                  "clip-path 1s cubic-bezier(0.77, 0, 0.18, 1) 0.3s",
              }}
            >
              Trà
            </h1>

            {/* Tagline */}
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontSize: "clamp(0.9rem, 2vw, 1.35rem)",
                fontWeight: 400,
                color: "var(--color-muted)",
                marginTop: "clamp(12px, 2vw, 20px)",
                opacity: mounted ? 1 : 0,
                transform: mounted ? "none" : "translateY(12px)",
                transition: "all 0.6s ease 0.85s",
              }}
            >
              {aboutData.tagline}
            </p>

            {/* Info row — school + scroll */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginTop: "clamp(24px, 4vw, 48px)",
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s ease 1s",
              }}
            >
              <div>
                <p
                  className="editorial-label"
                  style={{ color: "var(--color-muted)", lineHeight: 2.2 }}
                >
                  {aboutData.major}
                </p>
                <p
                  className="editorial-label"
                  style={{ color: "var(--color-muted)", lineHeight: 1.8 }}
                >
                  {aboutData.university}
                </p>
              </div>

              {/* Scroll indicator */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span className="page-num">Scroll</span>
                <div
                  style={{
                    width: 1,
                    height: 40,
                    background: "var(--color-ink)",
                    animation: "scrollPulse 2s ease-in-out infinite",
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT — Portrait photo editorial style */}
          <div
            style={{
              position: "relative",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "none" : "translateY(24px)",
              transition: "all 0.8s ease 0.6s",
            }}
          >
            {/* "No. 01" gallery label above photo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                marginBottom: 12,
              }}
            >
              <span
                className="editorial-label"
                style={{ color: "var(--color-accent)" }}
              >
                Portrait
              </span>
              <span
                style={{
                  flex: 1,
                  height: 1,
                  background: "var(--color-border)",
                }}
              />
            </div>

            {/* Photo frame */}
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                aspectRatio: "4 / 5",
                background: "var(--color-surface)",
              }}
            >
              <img
                src={avatarPath}
                alt="Phạm Thanh Trà"
                onLoad={() => setImgLoaded(true)}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                  opacity: imgLoaded ? 1 : 0,
                  transition: "opacity 0.6s ease",
                  filter: "grayscale(8%) contrast(1.03)",
                }}
              />

              {/* Subtle overlay for editorial feel */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(247,244,238,0.18) 100%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Caption below photo */}
            <p
              className="editorial-label"
              style={{
                color: "var(--color-muted)",
                marginTop: 10,
                textAlign: "right",
              }}
            >
              Phạm Thanh Trà, 2026
            </p>
          </div>
        </div>

        {/* Bottom horizontal rule */}
        <hr
          className="divider"
          style={{
            marginTop: "clamp(32px, 6vw, 64px)",
            transformOrigin: "left",
            transform: mounted ? "scaleX(1)" : "scaleX(0)",
            transition: "transform 1s cubic-bezier(0.77, 0, 0.18, 1) 1.1s",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
        @media (max-width: 640px) {
          section > .container > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
          section > .container > div:nth-child(2) > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
