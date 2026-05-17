import { useState } from "react";
import { Button, Tag } from "antd";
import { FileText, Shell, ShieldCheck, Sparkle } from "lucide-react";
import { projects } from "../../data/portfolioData.js";
import PdfViewerModal from "../ui/PdfViewerModal.jsx";
import ScrollReveal from "../ui/ScrollReveal.jsx";
import SectionTitle from "../ui/SectionTitle.jsx";

const projectIcons = [Shell, FileText, Sparkle, FileText, Sparkle, ShieldCheck];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="section projects-section" id="projects">
      <ScrollReveal>
        <SectionTitle eyebrow="Trang 2" title={projects.title} intro={projects.intro} />
      </ScrollReveal>

      <div className="project-shelf">
        {projects.items.map((project, index) => {
          const Icon = projectIcons[index];
          return (
            <ScrollReveal key={project.title} delay={index * 0.04}>
              <article className="project-card">
                <div className="project-card__top">
                  <div className="project-card__shell">
                    <Icon size={22} />
                  </div>
                  <Tag>{project.pdfName}</Tag>
                </div>
                <h3>{project.title}</h3>
                <p className="project-card__goal">{project.goal}</p>
                <p>{project.summary}</p>
                <Button type="primary" onClick={() => setSelectedProject(project)}>
                  Xem
                </Button>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      <PdfViewerModal
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
