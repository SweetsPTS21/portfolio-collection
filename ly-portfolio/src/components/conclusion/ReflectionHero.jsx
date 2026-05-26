import React from "react";
import swanMascot from "../../assets/ballet-swan-lake/swan-mascot.svg";
import ChipCloud from "../ui/ChipCloud";

export default function ReflectionHero({ summary, skills }) {
  return (
    <section className="reflection-grid">
      <div className="mirror-card">
        <img src={swanMascot} alt="" />
        <p>{summary}</p>
      </div>
      <div className="garden-card">
        <ChipCloud items={skills} variant="dark" />
      </div>
    </section>
  );
}
