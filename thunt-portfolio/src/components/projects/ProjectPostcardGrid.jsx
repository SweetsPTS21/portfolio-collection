import React from 'react';
import ProjectChapterCard from './ProjectChapterCard';

/**
 * ProjectPostcardGrid — responsive grid of 6 project chapter cards.
 * Desktop: 2 columns. Tablet: 2 columns. Mobile: 1 column.
 */
export default function ProjectPostcardGrid({ chapters }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'var(--space-6)',
        alignItems: 'start',
      }}
    >
      {chapters.map((chapter, index) => (
        <ProjectChapterCard key={chapter.id} chapter={chapter} index={index} />
      ))}
    </div>
  );
}
