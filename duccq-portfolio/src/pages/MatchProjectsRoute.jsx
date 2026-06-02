import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { portfolioData } from '../data/portfolioData.js';
import PdfReplayButton from '../features/content/PdfReplayButton.jsx';
import MatchTicketCard from '../features/motion-cards/MatchTicketCard.jsx';

export default function MatchProjectsRoute() {
  const [selectedProject, setSelectedProject] = useState(null);
  const modal = (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          className="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
        >
          <motion.article
            className="project-detail-modal"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            transition={{ duration: 0.24 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="project-modal-topline">
              <span>MATCH {selectedProject.number}</span>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Đóng"
              >
                <X size={18} />
              </button>
            </div>
            <h2>{selectedProject.title}</h2>
            <div className="project-modal-section">
              <p className="section-kicker">Mục tiêu</p>
              <p>{selectedProject.mission}</p>
            </div>
            <div className="project-modal-section">
              <p className="section-kicker">Quá trình thực hiện</p>
              <p>{selectedProject.process}</p>
            </div>
            <PdfReplayButton
              href={selectedProject.pdfHref}
              label="Xem bài PDF"
            />
          </motion.article>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="route-stack projects-route">
        <section className="route-hero compact-hero">
          <p className="section-kicker">MATCH PROJECTS / 6 REPLAYS</p>
          <h1>6 bài tập thực hành dưới dạng vé trận đấu.</h1>
          <p>
            Dưới đây là 6 bài tập thực hành mình đã hoàn thành, được trình bày
            một cách trực quan và sinh động.
          </p>
        </section>
        <section className="ticket-grid">
          {portfolioData.projects.map((project, index) => (
            <MatchTicketCard
              project={project}
              index={index}
              onViewProcess={setSelectedProject}
              key={project.number}
            />
          ))}
        </section>
      </div>
      {createPortal(modal, document.body)}
    </>
  );
}
