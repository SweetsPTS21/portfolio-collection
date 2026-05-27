import React from "react";
import PageShell from "../components/layout/PageShell";
import JellyCard from "../components/projects/JellyCard";
import { projects } from "../data/portfolioData";

export default function JellyProjectsPage() {
  return (
    <PageShell 
      eyebrow="Sweet Jelly Project Layers" 
      title="SẢN PHẨM KHẢO SÁT SỐ"
    >
      <p className="lead">
        Hành trình tích lũy và phát triển kỹ năng số trong học thuật Luật học của mình.
        Mỗi bài tập được sắp xếp khoa học, thể hiện tư duy độc lập phản biện và liêm chính số tuyệt đối.
      </p>
      
      <section className="projects-grid">
        {projects.map((project, index) => (
          <JellyCard key={project.title} project={project} index={index} />
        ))}
      </section>
    </PageShell>
  );
}
