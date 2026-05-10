import { useState } from 'react';
import { Camera, Stamp } from 'lucide-react';
import { projects } from '../../data/portfolioData.js';
import PostcardFrame from '../summer/PostcardFrame.jsx';
import PostcardCard from '../ui/PostcardCard.jsx';
import PdfViewerModal from '../ui/PdfViewerModal.jsx';

export default function ProjectsSection() {
  const [viewingProject, setViewingProject] = useState(null);

  return (
    <PostcardFrame id="projects" title={projects.title} eyebrow={projects.chooser} accent="peach">
      <p className="section-lead">
        <Camera size={19} strokeWidth={2.3} />
        {projects.intro}
      </p>
      <div className="postcard-grid">
        {projects.items.map((project, index) => (
          <PostcardCard
            key={project.title}
            number={String(index + 1).padStart(2, '0')}
            title={project.title}
            pdf={project.pdf}
            onView={() => setViewingProject(project)}
          >
            {project.description}
          </PostcardCard>
        ))}
      </div>
      <p className="stamp-note">
        <Stamp size={18} strokeWidth={2.3} />
        {projects.chooser}
      </p>
      <PdfViewerModal project={viewingProject} onClose={() => setViewingProject(null)} />
    </PostcardFrame>
  );
}
