import { ExternalLink, Waves } from "lucide-react";
import PageTransition from "../ui/PageTransition.jsx";
import { projects, projectsIntro } from "../../data/portfolioData.js";

export default function ProjectsPage() {
  return (
    <PageTransition className="projects-page">
      <header className="page-heading">
        <p className="eyebrow">Diary project entries</p>
        <h2>Dự án</h2>
        <p>{projectsIntro}</p>
      </header>

      <div className="diary-timeline">
        {projects.map((project, index) => (
          <article className="project-entry" key={project.title}>
            <div className="project-entry__marker">
              <Waves size={22} aria-hidden="true" />
              <span>{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="project-entry__content">
              <div className="scene-strip">
                <span>{project.scene}</span>
              </div>
              <p className="card-eyebrow">{project.label}</p>
              <h3>{project.title}</h3>
              <div className="entry-columns">
                <div>
                  <strong>Mục tiêu</strong>
                  <p>{project.goal}</p>
                </div>
                <div>
                  <strong>Quá trình thực hiện</strong>
                  <p>{project.process}</p>
                </div>
              </div>
              <a className="pdf-link" href={project.pdf} target="_blank" rel="noreferrer">
                <ExternalLink size={16} aria-hidden="true" />
                Xem {project.pdfName}
              </a>
            </div>
          </article>
        ))}
      </div>
    </PageTransition>
  );
}
