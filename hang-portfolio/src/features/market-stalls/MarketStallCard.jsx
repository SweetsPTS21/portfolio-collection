import StallCard from '../../components/ui/StallCard.jsx';
import PriceTagPop from './PriceTagPop.jsx';

export default function MarketStallCard({ project, index }) {
  return (
    <StallCard
      eyebrow={`${project.chapter} - ${project.booth}`}
      title={project.title}
      actionHref={project.pdf}
      actionLabel="Mở bài thực hành"
      index={index}
    >
      <p className="project-goal">{project.goal}</p>
      <p>{project.summary}</p>
      <PriceTagPop tone={index % 2 === 0 ? 'mint' : 'gold'}>Academic souvenir</PriceTagPop>
    </StallCard>
  );
}
