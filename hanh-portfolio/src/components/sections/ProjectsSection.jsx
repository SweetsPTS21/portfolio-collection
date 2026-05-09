import { FileText, Images, ListChecks } from 'lucide-react';
import PlantLabelCard from '../ui/PlantLabelCard.jsx';
import SectionShell from '../ui/SectionShell.jsx';
import SeedBadge from '../ui/SeedBadge.jsx';
import { projects } from '../../data/portfolioData.js';

export default function ProjectsSection() {
  return (
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
          />
        ))}
      </div>
    </SectionShell>
  );
}
