import React from "react";
import PaperPageShell from "../components/layout/PaperPageShell";
import PostcardProjectCard from "../features/letter-desk/PostcardProjectCard";
import { projects } from "../data/portfolioData";

export default function LetterProjectsPage() {
  return (
    <PaperPageShell
      eyebrow="Letter projects"
      title="Những bức thư thực hành"
      lead="Mỗi chương học được đặt lên một tấm postcard nhỏ: gọn gàng, dịu mắt và vẫn giữ rõ trọng tâm học thuật."
    >
      <section className="postcard-grid">
        {projects.map((project, index) => (
          <PostcardProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>
    </PaperPageShell>
  );
}
