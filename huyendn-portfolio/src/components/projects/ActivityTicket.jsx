import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FileText } from 'lucide-react';

const stickerEmoji = {
  sandcastle: 'Sand',
  shell: 'Shell',
  sun: 'Sun',
  floatie: 'Float',
  starfish: 'Star',
  bottle: 'Mail',
};

export default function ActivityTicket({ project, index }) {
  return (
    <motion.article
      className="activity-ticket"
      initial={{ opacity: 0, y: 36, rotate: index % 2 ? 1.2 : -1.2 }}
      whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 0.45 : -0.45 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -12, rotate: 0, scale: 1.012 }}
    >
      <div className="ticket-stub">
        <span>{String(index + 1).padStart(2, '0')}</span>
        <strong>{stickerEmoji[project.sticker]}</strong>
      </div>
      <div className="ticket-content">
        <p className="ticket-label">Beach activity ticket</p>
        <h2>{project.title}</h2>
        <h3>{project.goal}</h3>
        <p>{project.process}</p>
        <a className="beach-action" href={project.pdf} target="_blank" rel="noreferrer">
          <FileText size={18} aria-hidden="true" />
          <span>{project.pdfName}</span>
          <ExternalLink size={16} aria-hidden="true" />
        </a>
      </div>
    </motion.article>
  );
}
