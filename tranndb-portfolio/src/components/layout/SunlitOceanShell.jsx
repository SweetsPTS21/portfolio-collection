import React, { useEffect } from "react";
import { Radio, Waves } from "lucide-react";
import { routes } from "../../app/routes.js";
import { cssVars } from "../../app/theme.js";
import { setupLenis } from "../../app/lenisSetup.js";
import SunlitOceanBackground from "../../features/sunlit-ocean-scene/SunlitOceanBackground.jsx";

export default function SunlitOceanShell({ activePath, onNavigate, children }) {
  useEffect(() => setupLenis(), []);

  return (
    <div className="app-shell" style={cssVars}>
      <SunlitOceanBackground />
      <header className="site-header">
        <button className="brand-mark" type="button" onClick={() => onNavigate("/")}> 
          <span className="brand-orb"><Waves size={19} /></span>
          <span>
            <strong>Bảo Trân</strong>
            <small>sunlit-ocean-life</small>
          </span>
        </button>

        <nav className="route-tabs" aria-label="Primary navigation">
          {routes.map((route) => (
            <button
              className={`route-tab ${activePath === route.path ? "active" : ""}`}
              key={route.path}
              type="button"
              onClick={() => onNavigate(route.path)}
            >
              <span>{route.shortLabel}</span>
              <strong>{route.label}</strong>
            </button>
          ))}
        </nav>

        <button className="signal-action" type="button" onClick={() => onNavigate("/beacon")}>
          <Radio size={18} />
          <span>Send</span>
        </button>
      </header>
      {children}
    </div>
  );
}
