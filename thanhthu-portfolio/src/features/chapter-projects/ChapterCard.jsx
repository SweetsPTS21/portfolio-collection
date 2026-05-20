import { ExternalLink, Download } from 'lucide-react';
import QuestIconBadge from './QuestIconBadge.jsx';
import PageTurnDetail from './PageTurnDetail.jsx';

export default function ChapterCard({ project }) {
  return (
    <article className="chapter-card">
      <div className="chapter-card__top">
        <span>{project.chapter}</span>
        <QuestIconBadge icon={project.icon} />
      </div>
      <h3>{project.title}</h3>
      <p className="goal">{project.goal}</p>
      <PageTurnDetail>{project.action}</PageTurnDetail>
      {project.pdf ? (
        <div className="chapter-card__actions">
          <a
            className="chapter-action primary"
            href={project.pdf}
            target="_blank"
            rel="noreferrer"
            aria-label={`Mở PDF ${project.title}`}
          >
            <ExternalLink size={16} />
            <span>Mở PDF</span>
          </a>
          <a
            className="chapter-action secondary"
            href={project.pdf}
            download={project.pdfName}
            aria-label={`Tải PDF ${project.title}`}
          >
            <Download size={16} />
            <span>Tải về</span>
          </a>
        </div>
      ) : null}
    </article>
  );
}
