import React from "react";
import aquaticCreatureIcons from "../../assets/underwater-world/aquatic-creature-icons.svg";

export default function AquaticIconTooltip({ label }) {
  return (
    <span className="aquatic-icon-tooltip" aria-label={label}>
      <img src={aquaticCreatureIcons} alt="" />
    </span>
  );
}
