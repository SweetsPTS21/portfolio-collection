import { useState } from 'react';
import { Button } from 'antd';
import { Eye, FileText, Puzzle } from 'lucide-react';
import { projects } from '../../data/portfolioData.js';
import PdfViewerModal from '../ui/PdfViewerModal.jsx';
import PuzzleBadge from '../ui/PuzzleBadge.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';

const tones = ['blue', 'red', 'yellow', 'green', 'blue', 'red'];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="project" className="toy-section projects-section">
      <ScrollReveal className="section-heading">
        <PuzzleBadge tone="red">03</PuzzleBadge>
        <h2>{projects.title}</h2>
        <p>{projects.intro}</p>
      </ScrollReveal>

      <div className="project-grid">
        {projects.items.map((project, index) => (
          <ScrollReveal
            key={project.title}
            className={`project-toy-card project-toy-card--${tones[index]}`}
            delay={index * 5}
          >
            <span className="project-toy-card__peg" aria-hidden="true" />
            <div className="project-toy-card__index">
              <Puzzle size={17} />
              <span>{String(index + 1).padStart(2, '0')}</span>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Button
              type="primary"
              icon={<Eye size={17} />}
              onClick={() => setSelectedProject(project)}
            >
              Mở bài
            </Button>
          </ScrollReveal>
        ))}
      </div>

      <div className="project-note">
        <FileText size={18} />
        <span>{projects.intro}</span>
      </div>

      <PdfViewerModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
