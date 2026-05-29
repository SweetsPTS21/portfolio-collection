import { motion } from 'framer-motion';
import { BriefcaseBusiness, Eye, Flower2, Target } from 'lucide-react';
import { cardStagger, ticketHover } from '../../app/motionConfig';
import { FlowerWindowBadge } from '../../components/ui/FlowerWindowBadge';
import { RailTag } from '../../components/ui/RailTag';
import { TicketStampHover } from './TicketStampHover';

export function TrainCarProjectCard({ project, onSelect }) {
  const openDetail = () => onSelect?.(project);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openDetail();
    }
  };

  return (
    <motion.article
      className="project-car glass-surface"
      variants={cardStagger}
      role="button"
      tabIndex={0}
      aria-label={`Xem chi tiết ${project.chapter} ${project.title}`}
      onClick={openDetail}
      onKeyDown={handleKeyDown}
      {...ticketHover}
    >
      <span className="rail-border" aria-hidden="true" />
      <TicketStampHover chapter={project.chapter} />
      <div className="project-header">
        <FlowerWindowBadge icon={BriefcaseBusiness}>
          {project.chapter}
        </FlowerWindowBadge>
        <FlowerWindowBadge icon={Flower2}>Dự án</FlowerWindowBadge>
      </div>
      <h2>{project.title}</h2>
      <RailTag tone="mint">Mục tiêu</RailTag>
      <p>{project.goal}</p>
      <div className="project-card-action">
        <FlowerWindowBadge icon={Eye}>
          Mở PDF và quá trình thực hiện
        </FlowerWindowBadge>
      </div>
      <Target className="luggage-icon" aria-hidden="true" size={34} />
    </motion.article>
  );
}
