import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { portfolioContent } from '@/data/portfolioContent';
import RouteTransition from '@/components/layout/RouteTransition';
import WaveDivider from '@/components/diary/WaveDivider';
import DiaryTag from '@/components/diary/DiaryTag';
import ProjectPostcardGrid from '@/components/projects/ProjectPostcardGrid';
import SectionShell from '@/components/ui/SectionShell';
import FoamBadge from '@/components/ui/FoamBadge';

const { projects } = portfolioContent;

export default function DiaryProjectsPage() {
  return (
    <RouteTransition>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section
        id="projects-hero"
        aria-label="Trang dự án"
        style={{
          paddingTop: 'var(--space-32)',
          paddingBottom: 'var(--space-12)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <FoamBadge icon={<BookOpen size={12} />}>6 Chương Thực Hành</FoamBadge>

            <h1
              id="projects-title"
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 'var(--weight-bold)',
                fontSize: 'clamp(2rem, 4.5vw, 3rem)',
                color: 'var(--color-deep-navy)',
                marginTop: 'var(--space-4)',
                marginBottom: 'var(--space-4)',
                lineHeight: 'var(--leading-tight)',
                textShadow: '0 2px 12px rgba(251,254,255,0.6)',
              }}
            >
              📓 Nhật Ký Dự Án
            </h1>

            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-secondary)',
                maxWidth: 600,
                margin: '0 auto var(--space-4)',
                lineHeight: 'var(--leading-relaxed)',
                fontStyle: 'italic',
              }}
            >
              {projects.intro}
            </p>

            {/* Chapter count badges */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-2)', flexWrap: 'wrap', marginTop: 'var(--space-4)' }}>
              {projects.chapters.map((ch) => (
                <a
                  key={ch.id}
                  href={`#chapter-${ch.id}`}
                  id={`projects-nav-ch${ch.id}`}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: ch.color + '33',
                    border: `2px solid ${ch.color}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 'var(--weight-bold)',
                    fontSize: 'var(--text-sm)',
                    color: 'var(--color-deep-navy)',
                    textDecoration: 'none',
                    transition: 'all var(--transition-base)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = ch.color + '66'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = ch.color + '33'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {ch.id}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#7CCDF2" opacity={0.4} />

      {/* ── CHAPTERS GRID ────────────────────────────────── */}
      <SectionShell id="chapters-grid" style={{ padding: 'var(--space-12) 0 var(--space-20)' }}>
        <div className="container">
          {/* Section heading */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
            <DiaryTag color="blue">II. Trang Dự Án</DiaryTag>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'var(--text-3xl)',
                fontWeight: 'var(--weight-bold)',
                color: 'var(--color-deep-navy)',
                marginTop: 'var(--space-3)',
              }}
            >
              6 Chương Thực Hành
            </motion.h2>
          </div>

          {/* Chapter cards grid */}
          <div id="chapters-grid-inner">
            <ProjectPostcardGrid chapters={projects.chapters} />
          </div>
        </div>
      </SectionShell>

      <WaveDivider color="#A7E4FF" opacity={0.5} flip />
    </RouteTransition>
  );
}
