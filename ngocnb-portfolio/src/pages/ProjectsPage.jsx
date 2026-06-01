import React from 'react';
import PageShell from '../components/layout/PageShell';
import { projects } from '../data/portfolioData';
import { ExternalLink, Download, Eye, X, Coffee, Sparkles } from 'lucide-react';
import guestCheckCard from '../assets/ngocnb-afternoon-coffee/guest-check-card.svg';
import cappuccinoArt from '../assets/ngocnb-afternoon-coffee/cappuccino-art.svg';

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = React.useState(null);

  return (
    <PageShell eyebrow="HỒ SƠ THỰC HÀNH" title="Các Dự Án Số">
      <div className="projects-grid">
        {projects.map((project, idx) => (
          <article className="guest-check-card" key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="card-header-bar">
              <span className="receipt-num">#0{idx + 1} - {project.chapter}</span>
              <img className="card-watermark" src={guestCheckCard} alt="" />
              <img 
                src={cappuccinoArt} 
                alt="" 
                style={{ 
                  position: 'absolute', 
                  bottom: '-25px', 
                  right: '-15px', 
                  width: '65px', 
                  opacity: 0.08, 
                  pointerEvents: 'none' 
                }} 
              />
            </div>

            <h2 className="receipt-title" style={{ fontSize: '1.4rem', flexGrow: 0 }}>{project.title}</h2>
            <div className="receipt-subtitle">Mục tiêu</div>
            <p className="receipt-desc" style={{ fontStyle: 'italic', marginBottom: '20px', flexGrow: 1 }}>
              {project.goal}
            </p>

            <div className="receipt-actions" style={{ marginTop: 'auto' }}>
              <button 
                onClick={() => setActiveProject({ ...project, index: idx })} 
                className="receipt-btn primary"
                style={{ width: '100%', justifyContent: 'center', border: 'none', gap: '8px' }}
              >
                <Eye size={16} />
                Xem chi tiết &amp; Tải bài
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Coffee-Themed Premium Modal */}
      {activeProject && (
        <div 
          className="coffee-modal-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(44, 30, 22, 0.65)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '16px',
            animation: 'fadeIn 0.25s ease-out'
          }}
          onClick={() => setActiveProject(null)}
        >
          <div 
            className="coffee-modal-content"
            style={{
              background: 'var(--white-paper)',
              border: '4px solid var(--espresso-dark)',
              borderRadius: '16px',
              width: '100%',
              maxWidth: '680px',
              boxShadow: '0 25px 50px rgba(44, 30, 22, 0.25)',
              position: 'relative',
              overflow: 'hidden',
              animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Banner */}
            <div style={{
              background: 'var(--wood-light)',
              padding: '20px 24px',
              borderBottom: '2px solid var(--latte-border)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <span style={{
                  fontFamily: 'monospace',
                  fontSize: '0.85rem',
                  fontWeight: 'bold',
                  color: 'var(--coffee-brown)',
                  textTransform: 'uppercase'
                }}>
                  #0{activeProject.index + 1} - {activeProject.chapter}
                </span>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.45rem',
                  margin: '4px 0 0',
                  color: 'var(--espresso-dark)',
                  fontWeight: 700
                }}>
                  {activeProject.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveProject(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--espresso-dark)',
                  cursor: 'pointer',
                  padding: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'background-color 0.2s'
                }}
                className="close-btn-hover"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ padding: '28px 24px', maxHeight: '70vh', overflowY: 'auto' }}>
              {/* Goal */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  color: 'var(--coffee-brown)',
                  margin: '0 0 10px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Coffee size={16} />
                  Mục tiêu chương học
                </h4>
                <p style={{
                  fontSize: '0.98rem',
                  lineHeight: '1.6',
                  color: 'var(--espresso-dark)',
                  fontStyle: 'italic',
                  background: 'rgba(230, 220, 211, 0.4)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  margin: 0
                }}>
                  {activeProject.goal}
                </p>
              </div>

              {/* Execution Process (Mapped steps) */}
              <div>
                <h4 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: '1.15rem',
                  color: 'var(--coffee-brown)',
                  margin: '0 0 14px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <Sparkles size={16} />
                  Quá trình thực hiện chi tiết
                </h4>
                <ol style={{
                  padding: 0,
                  margin: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '14px'
                }}>
                  {activeProject.process.map((step, idx) => (
                    <li 
                      key={idx}
                      style={{
                        display: 'flex',
                        gap: '14px',
                        fontSize: '0.98rem',
                        lineHeight: '1.65',
                        color: 'var(--espresso-dark)',
                        background: 'rgba(255,255,255,0.4)',
                        padding: '10px 14px',
                        borderRadius: '8px',
                        borderLeft: '4px solid var(--coffee-brown)'
                      }}
                    >
                      <strong style={{ color: 'var(--coffee-brown)', fontSize: '1.05rem' }}>
                        0{idx + 1}.
                      </strong>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div style={{
              background: 'var(--cream-foam)',
              padding: '18px 24px',
              borderTop: '2px solid var(--latte-border)',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px'
            }}>
              <a 
                href={activeProject.pdf} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="receipt-btn secondary"
                style={{ padding: '10px 20px', fontSize: '0.9rem', gap: '8px' }}
              >
                <ExternalLink size={16} />
                Mở bài tập (Mới)
              </a>
              <a 
                href={activeProject.pdf} 
                download={activeProject.pdfName} 
                className="receipt-btn primary"
                style={{ padding: '10px 20px', fontSize: '0.9rem', gap: '8px' }}
              >
                <Download size={16} />
                Tải về máy (.pdf)
              </a>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
