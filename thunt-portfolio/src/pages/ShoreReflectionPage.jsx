import React from 'react';
import { motion } from 'framer-motion';
import { Feather, CheckCircle2, AlertTriangle, Compass, Star } from 'lucide-react';
import { portfolioContent } from '@/data/portfolioContent';
import RouteTransition from '@/components/layout/RouteTransition';
import WaveDivider from '@/components/diary/WaveDivider';
import DiaryPage from '@/components/diary/DiaryPage';
import DiaryTag from '@/components/diary/DiaryTag';
import SectionShell from '@/components/ui/SectionShell';
import FoamBadge from '@/components/ui/FoamBadge';
import MotionCard from '@/components/ui/MotionCard';
import bottleSvg from '@/assets/ocean-wave-diary/bottle-message.svg';

const { reflection } = portfolioContent;

export default function ShoreReflectionPage() {
  return (
    <RouteTransition>
      {/* ── PAGE HEADER ──────────────────────────────────── */}
      <section
        id="reflection-hero"
        aria-label="Tổng kết"
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
            <FoamBadge icon={<Feather size={12} />}>III. Tổng Kết</FoamBadge>
            <h1
              id="reflection-title"
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
              🌅 Nhìn Lại Bờ Cát
            </h1>
            <p
              style={{
                fontSize: 'var(--text-lg)',
                color: 'var(--color-text-secondary)',
                maxWidth: 600,
                margin: '0 auto',
                lineHeight: 'var(--leading-relaxed)',
                fontStyle: 'italic',
              }}
            >
              {reflection.intro}
            </p>
          </motion.div>
        </div>
      </section>

      <WaveDivider color="#A7E4FF" opacity={0.45} />

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <SectionShell style={{ padding: 'var(--space-12) 0 var(--space-16)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', alignItems: 'start' }}>

            {/* 1. Trải nghiệm */}
            <DiaryPage>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <div style={{ padding: 8, borderRadius: 'var(--radius-lg)', background: 'rgba(124,205,242,0.15)' }}>
                  <Star size={18} color="var(--color-deep-blue)" />
                </div>
                <div>
                  <DiaryTag color="blue">1. Trải Nghiệm</DiaryTag>
                  <h2 style={{ fontSize: 'var(--text-xl)', marginTop: 'var(--space-1)', fontFamily: 'var(--font-heading)' }}>
                    {reflection.experience.title}
                  </h2>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)' }}>
                {reflection.experience.content}
              </p>
            </DiaryPage>

            {/* 2. Hành trang */}
            <DiaryPage style={{ marginTop: 28 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <div style={{ padding: 8, borderRadius: 'var(--radius-lg)', background: 'rgba(125,222,195,0.15)' }}>
                  <Compass size={18} color="#1A6E5E" />
                </div>
                <div>
                  <DiaryTag color="teal">2. Hành Trang</DiaryTag>
                  <h2 style={{ fontSize: 'var(--text-xl)', marginTop: 'var(--space-1)', fontFamily: 'var(--font-heading)' }}>
                    {reflection.takeaways.title}
                  </h2>
                </div>
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)' }}>
                {reflection.takeaways.content}
              </p>
            </DiaryPage>
          </div>

          {/* 3. Điểm tâm đắc */}
          <div style={{ marginTop: 'var(--space-8)' }}>
            <DiaryPage>
              <DiaryTag color="gold">3. Điểm Tâm Đắc Nhất</DiaryTag>
              <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                {reflection.highlights.title}
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {reflection.highlights.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12, duration: 0.5 }}
                    style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}
                  >
                    <CheckCircle2 size={18} color="#7DDEC3" style={{ flexShrink: 0, marginTop: 2 }} />
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{item}</p>
                  </motion.li>
                ))}
              </ul>
            </DiaryPage>
          </div>

          {/* 4. Thách thức + 5. Định hướng */}
          <div style={{ marginTop: 'var(--space-6)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-6)', alignItems: 'start' }}>
            {/* Challenges */}
            <DiaryPage>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                <div style={{ padding: 8, borderRadius: 'var(--radius-lg)', background: 'rgba(255,183,200,0.2)' }}>
                  <AlertTriangle size={18} color="#C45576" />
                </div>
                <div>
                  <DiaryTag color="pink">4. Thách Thức</DiaryTag>
                  <h2 style={{ fontSize: 'var(--text-xl)', marginTop: 'var(--space-1)', fontFamily: 'var(--font-heading)' }}>
                    {reflection.challenges.title}
                  </h2>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {reflection.challenges.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.45 }}
                    style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}
                  >
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FFB7C8', flexShrink: 0, marginTop: 6 }} />
                    <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{item}</p>
                  </motion.li>
                ))}
              </ul>
            </DiaryPage>

            {/* Future direction */}
            <DiaryPage style={{ marginTop: 28 }}>
              <DiaryTag color="blue">5. Định Hướng</DiaryTag>
              <h2 style={{ fontSize: 'var(--text-xl)', fontFamily: 'var(--font-heading)', marginTop: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                {reflection.future.title}
              </h2>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-deep-navy)', lineHeight: 'var(--leading-relaxed)' }}>
                {reflection.future.content}
              </p>
            </DiaryPage>
          </div>
        </div>
      </SectionShell>

      <WaveDivider color="#7CCDF2" opacity={0.35} flip />

      {/* ── CLOSING & THANKS ─────────────────────────────── */}
      <section
        id="closing"
        style={{
          padding: 'var(--space-16) var(--space-6) var(--space-24)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <MotionCard
            style={{
              background: 'linear-gradient(135deg, rgba(251,254,255,0.92) 0%, rgba(238,249,255,0.85) 100%)',
              backdropFilter: 'blur(12px)',
              border: '1.5px solid rgba(191,234,248,0.7)',
              padding: 'var(--space-10)',
              borderRadius: 'var(--radius-2xl)',
              boxShadow: 'var(--shadow-lg)',
            }}
          >
            {/* Bottle icon */}
            <motion.div
              style={{ marginBottom: 'var(--space-6)', display: 'inline-block' }}
              animate={{ y: [0, -8, 3, -6, 0], rotate: [-3, 2, -4, 2, -3] }}
              transition={{ duration: 4.5, ease: 'easeInOut', repeat: Infinity }}
            >
              <img src={bottleSvg} alt="" width={64} height={128} aria-hidden="true" />
            </motion.div>

            <blockquote
              style={{
                fontSize: 'var(--text-base)',
                color: 'var(--color-deep-navy)',
                lineHeight: 'var(--leading-loose)',
                fontStyle: 'italic',
                border: 'none',
                padding: 0,
                margin: '0 0 var(--space-6)',
              }}
            >
              "{reflection.closing}"
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'var(--space-3)' }}>
              <div style={{ width: 40, height: 1, background: 'var(--color-border-blue)' }} />
              <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 'var(--weight-bold)', color: 'var(--color-ocean-blue)', fontSize: 'var(--text-sm)' }}>
                Nguyễn Thị Thu
              </p>
              <div style={{ width: 40, height: 1, background: 'var(--color-border-blue)' }} />
            </div>
          </MotionCard>
        </div>
      </section>
    </RouteTransition>
  );
}
