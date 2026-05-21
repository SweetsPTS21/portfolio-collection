import React from "react";
import PaperPageShell from "../components/layout/PaperPageShell";
import EnvelopeCard from "../components/ui/EnvelopeCard";
import BrushStrokeDraw from "../features/ink-palette/BrushStrokeDraw";
import InkPaletteGrid from "../features/ink-palette/InkPaletteGrid";
import { inkSkills, profile } from "../data/portfolioData";

export default function InkPaletteSkillsPage() {
  return (
    <PaperPageShell
      eyebrow="Ink palette"
      title="Bảng mực kỹ năng"
      lead="Các kỹ năng được pha như những màu mực nhỏ: mềm mại trong cách trình bày, rõ ràng trong cách học và kiểm chứng."
    >
      <section className="palette-intro">
        <EnvelopeCard title="Phong cách học tập" variant="framed-note">
          <p>{profile.style}</p>
          <p>{profile.hobby}</p>
        </EnvelopeCard>
        <BrushStrokeDraw />
      </section>
      <InkPaletteGrid skills={inkSkills} />
    </PaperPageShell>
  );
}
