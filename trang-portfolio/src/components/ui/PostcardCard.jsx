import { Eye } from 'lucide-react';

export default function PostcardCard({ number, title, children, pdf, onView }) {
  return (
    <article className="postcard-card">
      <div className="postcard-title">
        <div className="postcard-card-stamp" aria-hidden="true">
          {number}
        </div>
        {pdf ? (
          <button
            type="button"
            className="postcard-card-button"
            onClick={onView}
            aria-label={`Xem PDF ${title}`}
          >
            <Eye size={16} />
            <span>Xem PDF</span>
          </button>
        ) : null}
      </div>

      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
