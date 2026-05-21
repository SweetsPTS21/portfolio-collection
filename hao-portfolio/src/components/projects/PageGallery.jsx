import React from 'react';

export default function PageGallery({ pages }) {
  if (!pages || pages.length === 0) return null;

  return (
    <div className="page-gallery">
      {pages.map((page) => (
        <div key={page.page} className="page-gallery-item">
          {page.imageUrl ? (
            <img
              className="page-gallery-image"
              src={page.imageUrl}
              alt={`Trang ${page.page}`}
              loading="lazy"
            />
          ) : (
            <div className="page-gallery-placeholder">
              Trang {page.page}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
