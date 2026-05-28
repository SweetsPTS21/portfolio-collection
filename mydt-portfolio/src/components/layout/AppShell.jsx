// src/components/layout/AppShell.jsx
import React from "react";
import { Nav } from "./Nav";
import { useLenis } from "../../app/lenisSetup";
import { EnrichedBackground } from "./EnrichedBackground";
import { Scale } from "lucide-react";

export function AppShell({ children }) {
  // Activate Lenis smooth scroll on mount
  useLenis();

  return (
    <div
      className="routeShell"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        overflowX: "hidden",
        background: "transparent",
        color: "var(--lan-text)",
        fontFamily: "var(--lan-font-body)",
      }}
    >
      {/* Background SVG Scene layer */}
      <EnrichedBackground />

      {/* Navigation Header */}
      <Nav />

      {/* Main Content Area */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 5,
        }}
      >
        {children}
      </main>

      {/* Footer Area */}
      <footer
        style={{
          padding: "32px 40px",
          borderTop: "1px dashed var(--lan-border)",
          background: "rgba(247, 251, 255, 0.6)",
          backdropFilter: "blur(4px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "12px",
          textAlign: "center",
          zIndex: 10,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            color: "var(--lan-blue)",
            fontWeight: "bold",
          }}
        >
          <Scale size={16} />
          <span>Đặng Trà My — MSV 24061293</span>
        </div>
        <p
          style={{
            fontSize: "13px",
            color: "var(--lan-text-muted)",
            margin: 0,
            maxWidth: "600px",
            lineHeight: "1.6",
          }}
        >
          Dự án Portfolio Số hóa Học thuật chuyên ngành Luật. Trường Đại học Luật - Đại học Quốc gia Hà Nội. Độc lập tư
          duy, nghiêm cẩn trong học thuật và liêm chính số.
        </p>
      </footer>
    </div>
  );
}
