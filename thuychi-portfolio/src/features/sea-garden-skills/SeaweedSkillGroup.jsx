import React from "react";
import seaweedAquaticPlants from "../../assets/underwater-world/seaweed-aquatic-plants.svg";
import CoralSkillBadge from "./CoralSkillBadge";

export default function SeaweedSkillGroup({ title, items }) {
  return (
    <article className="seaweed-skill-group">
      <img src={seaweedAquaticPlants} alt="" />
      <h2>{title}</h2>
      <div className="seaweed-badges">
        {items.map((item) => (
          <CoralSkillBadge key={item} item={item} />
        ))}
      </div>
    </article>
  );
}
