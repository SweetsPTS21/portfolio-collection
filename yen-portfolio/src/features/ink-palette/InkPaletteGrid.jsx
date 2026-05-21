import React from "react";
import InkColorBadge from "./InkColorBadge";

export default function InkPaletteGrid({ skills }) {
  return (
    <section className="ink-palette-grid">
      {skills.map((skill) => (
        <InkColorBadge key={skill.name} skill={skill} />
      ))}
    </section>
  );
}
