import { FileText } from 'lucide-react';
import { projects, projectsIntro } from '../../data/portfolioData.js';
import SectionShell from '../ui/SectionShell.jsx';

export default function ProjectsSection() {
  return (
    <SectionShell
      id="projects"
      issue="02"
      eyebrow="Issue Index"
      title="Bài tập"
      lead={projectsIntro}
    >
      <div className="project-editorial-grid">
        {projects.map((project, index) => (
          <article className="project-spread" key={project.title}>
            <div className="project-cover">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <FileText size={32} strokeWidth={1.4} />
            </div>
            <div className="project-copy">
              <p>{project.title}</p>
              <h3>{project.subtitle}</h3>
              <span>{project.text}</span>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
