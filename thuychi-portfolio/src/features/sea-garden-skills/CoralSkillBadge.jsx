import React from "react";
import ShellTag from "../../components/ui/ShellTag";
import AquaticIconTooltip from "./AquaticIconTooltip";

export default function CoralSkillBadge({ item }) {
  return (
    <ShellTag className="coral-skill-badge">
      <AquaticIconTooltip label={item} />
      {item}
    </ShellTag>
  );
}
