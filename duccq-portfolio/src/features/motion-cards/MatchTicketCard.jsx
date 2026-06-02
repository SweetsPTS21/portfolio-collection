import { motion } from 'framer-motion';
import { ClipboardList, Target } from 'lucide-react';
import ballNetImpact from '../../assets/stadium-ocean-motion/ball-net-impact.svg';
import goldenBootBurst from '../../assets/stadium-ocean-motion/golden-boot-burst.svg';

export default function MatchTicketCard({ project, index, onViewProcess }) {
  return (
    <motion.article
      className="match-ticket-card"
      initial={{ opacity: 0, y: 42, rotate: index % 2 ? 2 : -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }}
      whileHover={{ y: -10, rotate: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
    >
      <img
        className="card-football-asset ticket-net-asset"
        src={ballNetImpact}
        alt=""
      />
      <img
        className="card-football-asset ticket-boot-asset"
        src={goldenBootBurst}
        alt=""
      />
      <div className="ticket-topline">
        <span>MATCH {project.number}</span>
        <b>PDF READY</b>
      </div>
      <h2>{project.title}</h2>
      <div className="mission-line">
        <Target size={18} />
        <p>{project.mission}</p>
      </div>
      <p className="match-summary">{project.summary}</p>
      <button className="process-button" type="button" onClick={() => onViewProcess(project)}>
        <span>Xem quá trình</span>
        <ClipboardList size={17} />
      </button>
    </motion.article>
  );
}
