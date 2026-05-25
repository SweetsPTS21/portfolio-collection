import { projects } from '../../data/portfolioData.js';
import MarketStallCard from './MarketStallCard.jsx';

export default function StallProjectGrid() {
  return (
    <div className="stall-project-grid">
      {projects.map((project, index) => (
        <MarketStallCard key={project.chapter} project={project} index={index} />
      ))}
    </div>
  );
}
