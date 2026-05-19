import { useState } from 'react';
import { Eye, FileText, ListChecks } from 'lucide-react';
import PlantLabelCard from '../ui/PlantLabelCard.jsx';
import PdfViewerModal from '../ui/PdfViewerModal.jsx';
import SectionShell from '../ui/SectionShell.jsx';
import SeedBadge from '../ui/SeedBadge.jsx';
import { projects } from '../../data/portfolioData.js';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <SectionShell
        eyebrow={projects.chooser}
        title={projects.title}
        lead={projects.intro}
      >
        <div className="project-toolbar">
          <SeedBadge tone="yellow">
            <ListChecks size={15} aria-hidden="true" />6 bài tập
          </SeedBadge>
        </div>

        <div className="project-grid">
          {projects.items.map((item, index) => (
            <PlantLabelCard
              key={item.title}
              number={`BT${index + 1}`}
              title={item.title}
              text={item.description}
              icon={FileText}
              actionLabel={
                <>
                  <Eye size={16} aria-hidden="true" />
                  Xem bài {index + 1}
                </>
              }
              onAction={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </SectionShell>
      <PdfViewerModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
