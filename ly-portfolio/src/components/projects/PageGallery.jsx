import React from 'react';
import { BookOpen } from 'lucide-react';

export default function PageGallery({ pages }) {
  if (!pages || pages.length === 0) return null;

  return (
    <>
      <div className="page-gallery-header">
        <BookOpen size={20} />
        <h2>Nội dung bài làm ({pages.length} trang)</h2>
      </div>

      <div className="page-gallery">
        {pages.map((page) => (
          <div key={page.page} className="page-gallery-item">
            <span className="page-gallery-badge">Trang {page.page}</span>
            <img
              className="page-gallery-image"
              src={page.imageUrl}
              alt={`Trang ${page.page}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </>
  );
}
