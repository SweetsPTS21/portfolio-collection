import { projects } from '../../data/portfolioData.js';
import ChapterCard from './ChapterCard.jsx';

export default function ChapterCardGrid() {
  return (
    <div className="chapter-grid">
      {projects.map((project) => (
        <ChapterCard key={project.title} project={project} />
      ))}
    </div>
  );
}
