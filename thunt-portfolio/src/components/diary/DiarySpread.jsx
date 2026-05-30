import React from 'react';
import { motion } from 'framer-motion';
import DiaryPage from './DiaryPage';

/**
 * DiarySpread — two-page diary layout side by side (on desktop).
 * On mobile, stacks vertically.
 */
export default function DiarySpread({ leftContent, rightContent, style = {} }) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: 'var(--space-6)',
        alignItems: 'start',
        ...style,
      }}
    >
      <DiaryPage>{leftContent}</DiaryPage>
      <DiaryPage style={{ marginTop: 24 }}>{rightContent}</DiaryPage>
    </div>
  );
}
