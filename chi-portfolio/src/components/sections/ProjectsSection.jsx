import { useState } from 'react';
import { Button, Modal } from 'antd';
import { Eye, FileText } from 'lucide-react';
import { projects, projectsIntro } from '../../data/portfolioData.js';
import SectionShell from '../ui/SectionShell.jsx';

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
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
              <div className="project-title">
                <div className="project-cover">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <Button
                  className="project-view-button"
                  icon={<FileText size={17} strokeWidth={1.8} />}
                  onClick={() => setActiveProject(project)}
                  type="primary"
                >
                  Xem
                </Button>
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

      <Modal
        className="project-file-modal"
        footer={null}
        onCancel={() => setActiveProject(null)}
        open={Boolean(activeProject)}
        title={activeProject?.title}
        width="min(1220px, 94vw)"
      >
        {activeProject ? (
          <iframe
            className="project-file-frame"
            src={activeProject.file}
            title={`File ${activeProject.title}`}
          />
        ) : null}
      </Modal>
    </>
  );
}
