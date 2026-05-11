import { useState, useEffect } from "react";
import { aboutData } from "../../data/portfolioData";

const NAV_LINKS = [
  { label: "About", href: "#about", num: "01" },
  { label: "Works", href: "#projects", num: "02" },
  { label: "Capabilities", href: "#skills", num: "03" },
  { label: "Contact", href: "#conclusion", num: "04" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "rgba(247, 244, 238, 0.96)"
          : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--color-border)"
          : "1px solid transparent",
        transition: "all 0.4s cubic-bezier(0.77, 0, 0.18, 1)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo / Name */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 18,
            fontWeight: 700,
            color: "var(--color-ink)",
            letterSpacing: "-0.01em",
            textDecoration: "none",
          }}
        >
          P. T. Trà
        </a>

        {/* Center vol marker */}
        <span
          className="page-num"
          style={{ position: "absolute", left: "50%", transform: "translateX(-50%)" }}
        >
          Vol. I — 2026
        </span>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            gap: 32,
            alignItems: "center",
          }}
          className="desktop-nav"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.num}
              href={link.href}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
                textDecoration: "none",
                color: "var(--color-muted)",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-ink)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-muted)";
              }}
            >
              <span
                style={{
                  fontSize: 9,
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "inherit",
                  opacity: 0.6,
                }}
              >
                {link.num}
              </span>
              <span
                style={{
                  fontSize: 12,
                  fontFamily: "var(--font-body)",
                  fontWeight: 500,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "inherit",
                }}
              >
                {link.label}
              </span>
            </a>
          ))}
        </nav>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </header>
  );
}
