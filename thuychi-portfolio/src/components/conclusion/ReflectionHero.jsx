import React from "react";
import acornSvg from "../../assets/fairy-mushroom-forest/acorn-seed-set.svg";
import forestPath from "../../assets/fairy-mushroom-forest/forest-path-elements.svg";
import ChipCloud from "../ui/ChipCloud";

export default function ReflectionHero({ summary, skills }) {
  return (
    <section className="reflection-grid">
      <div className="mirror-card">
        <img src={acornSvg} alt="" />
        <p>{summary}</p>
      </div>
      <div className="constellation-card">
        <img src={forestPath} alt="" />
        <ChipCloud items={skills} variant="dark" />
      </div>
    </section>
  );
}
