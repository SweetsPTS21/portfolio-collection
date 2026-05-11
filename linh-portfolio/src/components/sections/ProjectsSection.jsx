import { Candy, Sparkles } from 'lucide-react';
import { projects } from '../../data/portfolioData.js';
import BubblePanel from '../candy/BubblePanel.jsx';
import CandyProjectCard from '../ui/CandyProjectCard.jsx';

export default function ProjectsSection() {
  return (
    <BubblePanel id="projects" title={projects.title} eyebrow={projects.chooser} accent="lavender">
      <p className="section-lead">
        <Candy size={19} strokeWidth={2.3} />
        {projects.intro}
      </p>
      <div className="candy-project-grid">
        {projects.items.map((project, index) => (
          <CandyProjectCard
            key={project.title}
            number={String(index + 1).padStart(2, '0')}
            title={project.title}
            documentUrl={project.documentUrl}
          >
            {project.description}
          </CandyProjectCard>
        ))}
      </div>
      <p className="candy-note">
        <Sparkles size={18} strokeWidth={2.3} />
        {projects.chooser}
      </p>
    </BubblePanel>
  );
}
