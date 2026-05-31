import React from "react";
import Navbar from "./Navbar.jsx";
import CourtroomBackground from "../../features/legal-brief-scene/CourtroomBackground.jsx";
import { useLenisSetup } from "../../app/lenisSetup";

export default function CourtroomShell({ children }) {
  // Activate Lenis Smooth Scroll
  useLenisSetup();

  return (
    <div className="courtroom-desk-stage">
      {/* Visual Anchor Background Layer */}
      <CourtroomBackground />

      {/* Nav Menu */}
      <Navbar />

      {/* Main Pages Container */}
      <main style={{ position: "relative", zIndex: 10 }}>
        {children}
      </main>
    </div>
  );
}
