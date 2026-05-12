import { ArrowDownRight } from "lucide-react";
import figure from "../../assets/fashion-editorial/fashion-figure.svg";
import icons from "../../assets/fashion-editorial/fashion-outline-icons.svg";
import spread from "../../assets/fashion-editorial/magazine-spread-lines.svg";
import runway from "../../assets/fashion-editorial/runway-silhouettes.svg";
import avatar from "../../../docs/avatar.png";
import { about, personalInfo } from "../../data/portfolioData.js";
import Reveal from "../ui/Reveal.jsx";

export default function HeroSection() {
  return (
    <section id="cover" className="hero-section">
      <img className="hero-spread" src={spread} alt="" aria-hidden="true" />
      <div className="hero-copy">
        <p className="hero-kicker">Issue 2026 / Law x Digital</p>
        <Reveal>
          <h1>
            {personalInfo.name.split(" ").slice(0, 2).join(" ")}
            <span>{personalInfo.name.split(" ").slice(2).join(" ")}</span>
          </h1>
        </Reveal>
        <p className="hero-lead">{about.lead}</p>
        <div className="hero-actions">
          <a href="#projects">
            Xem 6 bài tập <ArrowDownRight size={18} />
          </a>
          <span>{personalInfo.major}</span>
        </div>
      </div>

      <div className="hero-visual" aria-label={`Ảnh của ${personalInfo.name}`}>
        <img className="runway" src={runway} alt="" aria-hidden="true" />
        <div className="portrait-frame">
          <img src={avatar} alt={personalInfo.name} />
        </div>
        <img className="figure-line" src={figure} alt="" aria-hidden="true" />
        <img className="icon-strip" src={icons} alt="" aria-hidden="true" />
        <div className="caption-card">
          <span>Profile</span>
          <p>{personalInfo.university}</p>
        </div>
      </div>
    </section>
  );
}
