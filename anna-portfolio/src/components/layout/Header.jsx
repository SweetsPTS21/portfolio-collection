import { useState, useEffect } from "react";
import { useActiveSection } from "../../hooks/useActiveSection";

const NAV_LINKS = [
  { href: "#hero", label: "Giới thiệu" },
  { href: "#skills", label: "Năng lực" },
  { href: "#tools", label: "Công cụ" },
  { href: "#projects", label: "Dự án" },
  { href: "#conclusion", label: "Kết luận" },
];

const SECTION_IDS = ["hero", "skills", "tools", "projects", "conclusion"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        background: scrolled
          ? "rgba(250,250,247,0.96)"
          : "rgba(250,250,247,0.80)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${scrolled ? "var(--color-border)" : "transparent"}`,
        transition: "border-color 0.3s, background 0.3s",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo / Name */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 16,
            fontWeight: 700,
            color: "var(--color-text)",
            letterSpacing: "-0.01em",
            textDecoration: "none",
          }}
        >
          T.T. An Na
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex" style={{ gap: 32, display: "flex" }}>
          {NAV_LINKS.map(({ href, label }) => {
            const sectionId = href.replace("#", "");
            const isActive = active === sectionId;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                style={{
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive
                    ? "var(--color-primary)"
                    : "var(--color-muted)",
                  textDecoration: "none",
                  letterSpacing: "0.04em",
                  paddingBottom: 4,
                  borderBottom: isActive
                    ? "1.5px solid var(--color-primary)"
                    : "1.5px solid transparent",
                  transition: "color 0.2s, border-color 0.2s, font-weight 0.2s",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          className="md:hidden"
          id="mobile-menu-btn"
        >
          <div
            style={{
              width: 22,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: 1.5,
                  background: "var(--color-text)",
                  width: i === 1 ? 16 : 22,
                  transition: "width 0.2s",
                }}
              />
            ))}
          </div>
        </button>
      </div>

      {/* Mobile nav dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            background: "var(--color-bg)",
            borderBottom: "1px solid var(--color-border)",
            padding: "16px 24px",
          }}
        >
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              style={{
                display: "block",
                padding: "10px 0",
                fontSize: 14,
                color: "var(--color-text)",
                textDecoration: "none",
                borderBottom: "1px solid var(--color-border)",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
