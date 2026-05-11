import { FileText } from 'lucide-react';

export default function CandyProjectCard({ number, title, documentUrl, children }) {
  return (
    <article className="candy-project-card">
      <div className="candy-project-card__number" aria-hidden="true">
        {number}
      </div>
      <h3>{title}</h3>
      <p>{children}</p>
      {documentUrl ? (
        <a
          className="candy-project-card__link"
          href={documentUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`Mở PDF bài tập ${number}`}
        >
          <FileText size={17} strokeWidth={2.4} />
          Mở PDF
        </a>
      ) : null}
    </article>
  );
}
