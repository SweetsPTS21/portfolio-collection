import React from "react";
import InkBadge from "../../components/ui/InkBadge";

export default function InkColorBadge({ skill }) {
  return (
    <div className="ink-color-card">
      <InkBadge tone={skill.tone}>{skill.name}</InkBadge>
      <p>{skill.text}</p>
    </div>
  );
}
