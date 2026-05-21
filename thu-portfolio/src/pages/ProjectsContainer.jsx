import React from 'react';
import { projects } from '../data/portfolioData';
import { getPdfContent } from '../data/pdfContentData';
import PageGallery from '../components/projects/PageGallery';

export default function ProjectsContainer({ active, activeProject, onNavigate }) {
  if (!active || !activeProject) return null;

  const project = projects.find((p) => p.id === activeProject);
  if (!project) return null;

  const pdfContent = getPdfContent(project.id);
  const hasPrev = activeProject > 1;
  const hasNext = activeProject < projects.length;

  return (
    <article className="view-section active" id="projectView">
      <section className="card project-detail-card">
        <div className="card-header">
          <span className="card-badge">{project.emoji} {project.title}</span>
        </div>

        <h2 className="project-chapter">{project.chapter}</h2>

        <div className="project-meta">
          <div className="meta-block">
            <h4>🌱 Mình hiểu project này như thế nào?</h4>
            <p>{project.objective}</p>
          </div>
          <div className="meta-block">
            <h4>💡 Mình đã học được gì?</h4>
            <ul className="lessons-list">
              {project.lessons.map((lesson) => (
                <li key={lesson}>{lesson}</li>
              ))}
            </ul>
          </div>
        </div>

        {pdfContent && (
          <div className="project-gallery-section">
            <h4>📄 Nội dung bài tập</h4>
            <PageGallery pages={pdfContent.pages} />
          </div>
        )}

        {!pdfContent && (
          <div className="project-placeholder">
            <p className="placeholder-text">
              📎 Nội dung hình ảnh sẽ được cập nhật khi có file PDF.
            </p>
          </div>
        )}

        <div className="project-nav-buttons">
          {hasPrev && (
            <button
              className="project-nav-btn prev"
              onClick={() => onNavigate('project', activeProject - 1)}
            >
              ← Bài tập {activeProject - 1}
            </button>
          )}
          {hasNext && (
            <button
              className="project-nav-btn next"
              onClick={() => onNavigate('project', activeProject + 1)}
            >
              Bài tập {activeProject + 1} →
            </button>
          )}
        </div>
      </section>
    </article>
  );
}
