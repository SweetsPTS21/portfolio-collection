import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderOpen,
  Search,
  Brain,
  Video,
  Palette,
  Shield,
  Download,
  ExternalLink,
  X,
} from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import { projects } from '../data/portfolioData';
import { HeartPaperclipSVG, WashiTapeSVG } from '../components/ui/SVGs';

const iconMap = {
  FolderOpen: FolderOpen,
  Search: Search,
  Brain: Brain,
  Video: Video,
  Palette: Palette,
  Shield: Shield,
};

export default function StickerProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <PageShell eyebrow="Assignment Projects" title="SẢN PHẨM NGHIÊN CỨU">
      <p className="lead">
        Toàn bộ các bài thực hành dưới đây được thực hiện một cách cẩn trọng, đi
        thẳng vào trọng tâm yêu cầu môn học và phản ánh rõ nét tư duy làm việc
        độc lập của bản thân.
      </p>

      <section className="project-grid" style={{ paddingTop: '15px' }}>
        {projects.map((project, idx) => {
          const IconComponent = iconMap[project.icon] || FolderOpen;

          return (
            <motion.article
              key={project.title}
              className={`spell-card ${project.colorClass}`}
              onClick={() => setSelectedProject(project)}
              style={{ cursor: 'pointer' }}
              whileHover={{
                y: -6,
                rotate: idx % 2 === 0 ? -1 : 1,
                boxShadow: '0 15px 30px rgba(48, 40, 63, 0.15)',
              }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 20,
              }}
            >
              {/* Heart Paperclip at top-left */}
              <HeartPaperclipSVG 
                className="card-clip" 
                color={idx % 2 === 0 ? "var(--marker-pink)" : "var(--pen-blue)"} 
              />
              
              {/* Caro/Stripe Washi tape chéo at top-right */}
              <WashiTapeSVG 
                className="card-washi" 
                color={idx % 3 === 0 ? "var(--sunny-sticky)" : idx % 3 === 1 ? "var(--mint-note)" : "var(--lavender-paper)"} 
                pattern={idx % 2 === 0 ? "caro" : "stripe"} 
              />

              {/* Faint watermark icon in background */}
              <div style={{ position: 'absolute', bottom: '15px', left: '20px', opacity: 0.05, pointerEvents: 'none' }}>
                <IconComponent size={90} />
              </div>

              <div className="spell-content">
                <span className="spell-number">
                  <IconComponent size={20} />
                  <span>Bài thực hành 0{idx + 1}</span>
                </span>

                <h2>{project.title}</h2>
                <h3 style={{ marginBottom: 0 }}>Mục tiêu: {project.goal}</h3>

                <div
                  style={{
                    marginTop: 'auto',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingTop: '16px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-hand)',
                      fontSize: '1.25rem',
                      color: 'var(--marker-pink)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    Xem chi tiết & tải về ➔
                  </span>
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Beautiful Stationery Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className={`modal-paper ${selectedProject.colorClass}`}
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 50, scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setSelectedProject(null)}
                aria-label="Đóng chi tiết bài thực hành"
              >
                <X size={20} />
              </button>

              <div className="modal-body">
                <span className="spell-number" style={{ fontSize: '1.25rem' }}>
                  {React.createElement(
                    iconMap[selectedProject.icon] || FolderOpen,
                    { size: 22 }
                  )}
                  <span>Chi tiết bài thực hành</span>
                </span>

                <h2>{selectedProject.title}</h2>
                <h3>Mục tiêu: {selectedProject.goal}</h3>

                <div className="modal-process-box">
                  <h4
                    style={{
                      margin: '0 0 10px 0',
                      fontFamily: 'var(--font-hand)',
                      fontSize: '1.45rem',
                      color: 'var(--ink-soft)',
                    }}
                  >
                    Quá trình thực hiện:
                  </h4>
                  <p>{selectedProject.process}</p>
                </div>

                {selectedProject.pdf && (
                  <div className="spell-actions">
                    <a
                      className="spell-action primary"
                      href={selectedProject.pdf}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Xem trực tuyến ${selectedProject.title}`}
                    >
                      <ExternalLink size={17} />
                      <span>Xem trực tuyến</span>
                    </a>

                    <a
                      className="spell-action secondary"
                      href={selectedProject.pdf}
                      download={selectedProject.pdfName}
                      aria-label={`Tải xuống ${selectedProject.title}`}
                    >
                      <Download size={17} />
                      <span>Tải về PDF</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageShell>
  );
}
