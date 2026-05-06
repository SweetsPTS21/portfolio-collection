import { personalInfo } from "../../data/portfolioData";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        padding: "40px 24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: 13,
            color: "var(--color-muted)",
            letterSpacing: "0.08em",
          }}
        >
          {personalInfo.copyright}
        </p>
        <p
          style={{
            fontSize: 11,
            color: "var(--color-border)",
            marginTop: 8,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Digital Portfolio · {personalInfo.university}
        </p>
      </div>
    </footer>
  );
}
