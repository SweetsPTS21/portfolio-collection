import { Github, RadioTower } from "lucide-react";
import circuitMap from "../../assets/cyberpunk-city/circuit-map.svg";
import neonSigns from "../../assets/cyberpunk-city/neon-signs.svg";
import pixelRain from "../../assets/cyberpunk-city/pixel-rain.svg";
import scanlineGrid from "../../assets/cyberpunk-city/scanline-grid.svg";
import neonSkyline from "../../assets/cyberpunk-city/neon-skyline.svg";
import { profile } from "../../data/portfolioData.js";
import CityNav from "./CityNav.jsx";

export default function CityShell({ children }) {
  return (
    <div className="city-shell">
      <div className="city-backdrop" aria-hidden="true">
        <img className="skyline skyline--rear" src={neonSkyline} alt="" />
        <img className="pixel-rain" src={pixelRain} alt="" />
        <img className="scanline-grid" src={scanlineGrid} alt="" />
        <img className="circuit-map circuit-map--left" src={circuitMap} alt="" />
        <img className="neon-sign neon-sign--right" src={neonSigns} alt="" />
      </div>

      <header className="city-header">
        <a className="city-brand" href="/" aria-label="Mẫn Văn Nghĩa home">
          <RadioTower size={20} aria-hidden="true" />
          <span>NGHIA.NET</span>
        </a>
        <CityNav />
      </header>

      <main className="route-stage">{children}</main>

      <footer className="city-footer">
        <Github size={16} aria-hidden="true" />
        <span>{profile.name} / cyberpunk-city archive</span>
      </footer>
    </div>
  );
}
