import React from 'react';
import { motion } from 'framer-motion';
import { User, Target, BookOpen, Wrench, Star } from 'lucide-react';
import { portfolioContent } from '@/data/portfolioContent';
import RouteTransition from '@/components/layout/RouteTransition';
import WaveDivider from '@/components/diary/WaveDivider';
import DiaryPage from '@/components/diary/DiaryPage';
import DiaryTag from '@/components/diary/DiaryTag';
import ShellBadge from '@/components/ui/ShellBadge';
import FoamBadge from '@/components/ui/FoamBadge';
import SectionShell from '@/components/ui/SectionShell';
import WaveButton from '@/components/ui/WaveButton';
import { Link } from 'react-router-dom';

const { intro } = portfolioContent;

const STAGGER = {
  container: { transition: { staggerChildren: 0.1 } },
  item: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.34, 1.56, 0.64, 1] } },
  },
};

export default function OceanIntroPage() {
  return (
    <RouteTransition>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        id="hero"
        aria-label="Hero section"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: 'var(--space-32) var(--space-6) var(--space-16)',
          position: 'relative',
        }}
      >
        {/* Avatar placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          style={{ marginBottom: 'var(--space-6)' }}
          id="hero-avatar"
        >
          {/* SVG Avatar */}
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: '50%',
              border: '4px solid #FBFEFF',
              boxShadow: '0 8px 32px rgba(47,143,200,0.35), 0 0 0 8px rgba(167,228,255,0.3)',
              overflow: 'hidden',
              margin: '0 auto',
            }}
          >
            <img
              src="/avatar.jpg"
              alt="Nguyễn Thị Thu"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
        </motion.div>

        {/* Hero text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <FoamBadge icon="🎓">Sinh viên Luật — ĐHQGHN</FoamBadge>
          <h1
            id="hero-title"
            style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 'var(--weight-bold)',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: 'var(--color-deep-navy)',
              lineHeight: 'var(--leading-tight)',
              marginTop: 'var(--space-4)',
              marginBottom: 'var(--space-4)',
              maxWidth: 700,
              textShadow: '0 2px 12px rgba(251,254,255,0.6)',
            }}
          >
            {intro.hero.title}
          </h1>
          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--color-text-secondary)',
              fontStyle: 'italic',
              marginBottom: 'var(--space-8)',
              maxWidth: 560,
              margin: '0 auto var(--space-8)',
            }}
          >
            {intro.hero.subtitle}
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/projects" id="hero-cta-projects">
              <WaveButton variant="primary" icon={<BookOpen size={16}/>}>Xem Nhật Ký Dự Án</WaveButton>
            </Link>
            <Link to="/reflection" id="hero-cta-reflection">
              <WaveButton variant="secondary" icon={<Star size={16}/>}>Tổng Kết</WaveButton>
            </Link>
          </div>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          style={{ position: 'absolute', bottom: 'var(--space-8)', left: '50%', transform: 'translateX(-50%)' }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <svg width="24" height="36" viewBox="0 0 24 36" fill="none">
              <rect x="1" y="1" width="22" height="34" rx="11" stroke="#7CCDF2" strokeWidth="2"/>
              <motion.circle
                cx="12" cy="10" r="4" fill="#7CCDF2"
                animate={{ cy: [10, 22, 10] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <WaveDivider color="#A7E4FF" opacity={0.5} />

      {/* ── ABOUT ME ─────────────────────────────────────── */}
      <SectionShell id="about" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-8)', alignItems: 'start' }}>
            {/* About card */}
            <DiaryPage>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                <div style={{ padding: 8, borderRadius: 'var(--radius-lg)', background: 'rgba(124,205,242,0.15)' }}>
                  <User size={20} color="var(--color-deep-blue)" />
                </div>
                <div>
                  <DiaryTag color="blue">I. Giới Thiệu</DiaryTag>
                  <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>
                    Đôi chút về mình
                  </h2>
                </div>
              </div>

              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)', fontStyle: 'italic' }}>
                {intro.about.greeting}
              </p>

              {/* Info grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                {intro.about.info.map(({ label, value }) => (
                  <div key={label} style={{ padding: 'var(--space-3)', background: 'rgba(167,228,255,0.15)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(191,234,248,0.6)' }}>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-semibold)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-1)' }}>{label}</p>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-deep-navy)' }}>{value}</p>
                  </div>
                ))}
              </div>

              {/* Style */}
              <div style={{ padding: 'var(--space-4)', background: 'rgba(255,215,226,0.2)', borderRadius: 'var(--radius-lg)', borderLeft: '3px solid #FFB7C8' }}>
                <p style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-2)' }}>Phong cách</p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)' }}>{intro.about.style}</p>
              </div>
            </DiaryPage>

            {/* Hobbies + tools */}
            <DiaryPage style={{ marginTop: 28 }}>
              {/* Hobbies */}
              <div style={{ marginBottom: 'var(--space-5)' }}>
                <DiaryTag color="teal">Sở Thích</DiaryTag>
                <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)' }}>
                  {intro.about.hobbies}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginTop: 'var(--space-3)' }}>
                  {['🍳 Nấu ăn', '🏸 Cầu lông', '🎮 Game', '🎬 Phim', '📚 Đọc sách'].map((h) => (
                    <ShellBadge key={h} color="teal">{h}</ShellBadge>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <DiaryTag color="gold">Công Cụ Đã Dùng</DiaryTag>
                <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                  {intro.tools.list.map(({ category, tools }) => (
                    <div key={category}>
                      <p style={{ fontSize: 'var(--text-xs)', fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-semibold)', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 'var(--space-1)' }}>{category}</p>
                      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-normal)' }}>{tools}</p>
                    </div>
                  ))}
                </div>
              </div>
            </DiaryPage>
          </div>
        </div>
      </SectionShell>

      <WaveDivider color="#7CCDF2" opacity={0.35} flip />

      {/* ── LEARNING GOAL ───────────────────────────────── */}
      <SectionShell id="learning-goal" style={{ padding: 'var(--space-16) 0' }}>
        <div className="container">
          <div style={{ maxWidth: 740, margin: '0 auto' }}>
            <DiaryPage>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                <div style={{ padding: 8, borderRadius: 'var(--radius-lg)', background: 'rgba(124,205,242,0.15)' }}>
                  <Target size={20} color="var(--color-deep-blue)" />
                </div>
                <div>
                  <DiaryTag color="blue">2. Mục Tiêu</DiaryTag>
                  <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-2)', fontFamily: 'var(--font-heading)' }}>
                    {intro.learningGoal.title}
                  </h2>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-loose)' }}>
                {intro.learningGoal.content}
              </p>
            </DiaryPage>
          </div>
        </div>
      </SectionShell>

      {/* ── PORTFOLIO GOAL ──────────────────────────────── */}
      <SectionShell id="portfolio-goal" style={{ padding: 'var(--space-8) 0 var(--space-16)' }}>
        <div className="container">
          <div style={{ maxWidth: 740, margin: '0 auto' }}>
            <DiaryPage>
              <DiaryTag color="pink">3. Portfolio</DiaryTag>
              <h2 style={{ fontSize: 'var(--text-2xl)', fontFamily: 'var(--font-heading)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                {intro.portfolioGoal.title}
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-loose)', marginBottom: 'var(--space-6)' }}>
                {intro.portfolioGoal.content}
              </p>

              {/* Principles */}
              <div style={{ padding: 'var(--space-5)', background: 'rgba(47,143,200,0.06)', borderRadius: 'var(--radius-lg)', borderLeft: '3px solid var(--color-ocean-blue)', marginBottom: 'var(--space-4)' }}>
                <DiaryTag color="blue">4. Nguyên Tắc</DiaryTag>
                <p style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)' }}>
                  {intro.principles.content}
                </p>
              </div>
            </DiaryPage>
          </div>
        </div>
      </SectionShell>

      <WaveDivider color="#A7E4FF" opacity={0.4} />
    </RouteTransition>
  );
}
