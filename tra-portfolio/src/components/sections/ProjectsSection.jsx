import { Button } from "antd";
import { FileText, Sparkle } from "lucide-react";
import { useState } from "react";
import GlassCard from "../kbeauty/GlassCard.jsx";
import PdfViewerModal from "../ui/PdfViewerModal.jsx";
import ScrollReveal from "../ui/ScrollReveal.jsx";
import { projects } from "../../data/portfolioData.js";

const accents = ["pink", "lavender", "sky", "peach", "mint", "pink"];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="section-shell" id="projects">
      <ScrollReveal>
        <p className="section-kicker">✦ Product Showcase</p>
        <h2 className="section-title">Dự án</h2>
        <p className="section-lead">
          Danh sách bài tập được trình bày đầy đủ kèm theo nội dung và minh
          chứng PDF để xem trực tiếp trong trang.
        </p>
      </ScrollReveal>

      <div className="project-grid">
        {projects.map((project, i) => (
          <ScrollReveal key={project.number}>
            <GlassCard className="project-card" accent={accents[i]}>
              <div className="project-topline">
                <span className="project-number">{project.number}</span>
                <span className="project-icon">
                  <Sparkle size={20} strokeWidth={1.8} aria-hidden="true" />
                </span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <Button
                type="primary"
                icon={<FileText size={15} />}
                onClick={() => setActiveProject(project)}
                style={{ borderRadius: "999px", height: 40, fontWeight: 700 }}
              >
                Mở PDF
              </Button>
            </GlassCard>
          </ScrollReveal>
        ))}
      </div>

      <PdfViewerModal
        open={Boolean(activeProject)}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
