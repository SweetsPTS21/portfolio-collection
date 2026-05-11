export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--color-border)",
        paddingTop: 32,
        paddingBottom: 32,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 15,
              color: "var(--color-ink)",
            }}
          >
            Phạm Thanh Trà
          </span>
          <span
            className="editorial-label"
            style={{ color: "var(--color-muted)" }}
          >
            Luật học — Đại học Luật ĐHQGHN
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            gap: 2,
          }}
        >
          <span className="page-num">Vol. I — 2026</span>
          <span
            className="editorial-label"
            style={{ color: "var(--color-muted)", fontSize: 9 }}
          >
            © 2026 • Digital Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
}
