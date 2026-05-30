import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import SunStamp from '@/components/diary/SunStamp';
import DiaryTag from '@/components/diary/DiaryTag';

const STAMP_COLORS = ['blue', 'teal', 'gold', 'pink', 'blue', 'blue'];
const TAG_COLORS = ['blue', 'teal', 'gold', 'pink', 'blue', 'blue'];

/**
 * ProjectChapterCard — diary-style chapter card with wave-edge and lift hover.
 */
export default function ProjectChapterCard({ chapter, index }) {
  const stampColor = STAMP_COLORS[index % STAMP_COLORS.length];
  const tagColor = TAG_COLORS[index % TAG_COLORS.length];

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.34, 1.56, 0.64, 1] }}
      whileHover={{ y: -6, rotate: 0.3, boxShadow: 'var(--shadow-card-hover)' }}
      style={{
        background: 'linear-gradient(135deg, #FBFEFF 0%, #EEF9FF 70%, rgba(167,228,255,0.12) 100%)',
        border: `2px solid ${chapter.color}55`,
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-6)',
        boxShadow: 'var(--shadow-md)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Wave-edge accent top */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 5,
          background: `linear-gradient(90deg, ${chapter.color}, ${chapter.accent})`,
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0',
        }}
      />

      {/* Background chapter number (decorative) */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: -8,
          bottom: -16,
          fontSize: '7rem',
          fontFamily: 'var(--font-heading)',
          fontWeight: 'var(--weight-bold)',
          color: chapter.color,
          opacity: 0.08,
          lineHeight: 1,
          userSelect: 'none',
        }}
      >
        {chapter.id}
      </div>

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)', marginBottom: 'var(--space-5)', marginTop: 'var(--space-3)' }}>
        <SunStamp number={chapter.id} label="CH." color={stampColor} />
        <div style={{ flex: 1 }}>
          <DiaryTag color={tagColor}>Chương {chapter.id}</DiaryTag>
          <h3
            style={{
              marginTop: 'var(--space-2)',
              fontSize: 'var(--text-lg)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--weight-bold)',
              color: 'var(--color-deep-navy)',
              lineHeight: 'var(--leading-snug)',
            }}
          >
            {chapter.title}
          </h3>
        </div>
      </div>

      {/* Goal block */}
      <div
        style={{
          background: `${chapter.color}20`,
          borderLeft: `3px solid ${chapter.accent}`,
          borderRadius: '0 var(--radius-md) var(--radius-md) 0',
          padding: 'var(--space-3) var(--space-4)',
          marginBottom: 'var(--space-4)',
        }}
      >
        <p
          style={{
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--color-text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: 'var(--space-1)',
          }}
        >
          🎯 Mục tiêu
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
          {chapter.goal}
        </p>
      </div>

      {/* Process block */}
      <div>
        <p
          style={{
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-heading)',
            fontWeight: 'var(--weight-semibold)',
            color: 'var(--color-text-secondary)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginBottom: 'var(--space-2)',
          }}
        >
          ✍️ Quá trình thực hiện
        </p>
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
          {chapter.process}
        </p>
      </div>

      {/* PDF button */}
      {chapter.pdfFile && (
        <div style={{ marginTop: 'var(--space-5)', paddingTop: 'var(--space-4)', borderTop: `1px solid ${chapter.color}66` }}>
          <a
            href={chapter.pdfFile}
            target="_blank"
            rel="noopener noreferrer"
            id={`pdf-ch${chapter.id}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-5)',
              borderRadius: 'var(--radius-full)',
              background: `${chapter.color}30`,
              border: `1.5px solid ${chapter.accent}`,
              color: 'var(--color-deep-navy)',
              fontSize: 'var(--text-sm)',
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--weight-semibold)',
              textDecoration: 'none',
              transition: 'all var(--transition-base)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = `${chapter.color}55`;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 4px 12px ${chapter.color}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = `${chapter.color}30`;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <FileText size={15} />
            Xem bài nộp PDF
          </a>
        </div>
      )}
    </motion.article>
  );
}
