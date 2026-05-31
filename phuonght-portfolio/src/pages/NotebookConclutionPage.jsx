import React from 'react';
import { Sparkles, Award, Compass, HelpCircle, Heart } from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import NotebookCard from '../components/ui/NotebookCard';
import { conclusion } from '../data/portfolioData';
import StickerBadge from '../components/ui/StickerBadge';
import { HeartPaperclipSVG, WashiTapeSVG } from '../components/ui/SVGs';

export default function NotebookConclutionPage() {
  return (
    <PageShell eyebrow="Compact Mirror Reflection" title="TỔNG KẾT HÀNH TRÌNH">
      {/* Reflection Hero */}
      <section className="reflection-grid" style={{ paddingTop: '15px' }}>
        <NotebookCard className="mirror-card" style={{ overflow: 'visible' }}>
          {/* Heart Paperclip at top-left */}
          <HeartPaperclipSVG className="card-clip" color="var(--marker-pink)" />

          {/* Washi tape at top-right */}
          <WashiTapeSVG
            className="card-washi"
            color="var(--sunny-sticky)"
            pattern="caro"
          />

          {/* Heart/Compact Mirror Emblem */}
          <div style={{ fontSize: '3rem', marginBottom: '16px' }}>🌸</div>
          <p style={{ position: 'relative', zIndex: 5 }}>
            {conclusion.summary}
          </p>
        </NotebookCard>

        <NotebookCard
          className="constellation-card"
          style={{
            // background: 'var(--ink-soft)',
            // color: '#fff',
            overflow: 'visible',
          }}
        >
          {/* Washi tape at top-right */}
          <WashiTapeSVG
            className="card-washi"
            color="var(--mint-note)"
            pattern="stripe"
          />

          <div style={{ position: 'relative', zIndex: 5 }}>
            <span
              style={{
                fontFamily: 'var(--font-hand)',
                fontSize: '1.4rem',
                color: 'var(--sunny-sticky)',
              }}
            >
              Hành trang quý giá nhất
            </span>
            <p
              style={{
                margin: '8px 0 20px',
                fontSize: '0.95rem',
                // color: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              Những bài học thực tế, kỹ năng làm việc nhóm trực tuyến và tinh
              thần kiểm chứng thông tin cẩn trọng.
            </p>
          </div>
          <div
            className="chip-cloud dark"
            style={{ position: 'relative', zIndex: 5 }}
          >
            {conclusion.skills.map((skill) => (
              <StickerBadge
                key={skill}
                color="rgba(255, 255, 255, 0.15)"
                className="chip-item"
              >
                <span>{skill}</span>
              </StickerBadge>
            ))}
          </div>
        </NotebookCard>
      </section>

      {/* Reflection lists: highlights, challenges, direction */}
      <section
        className="reflection-lists"
        style={{ marginTop: '40px', paddingTop: '15px' }}
      >
        <NotebookCard style={{ overflow: 'visible', position: 'relative' }}>
          {/* Washi Tape */}
          <WashiTapeSVG
            className="card-washi"
            color="var(--marker-pink)"
            pattern="caro"
          />

          {/* Faint watermark icon in background */}
          <div
            style={{
              position: 'absolute',
              bottom: '15px',
              right: '20px',
              opacity: 0.05,
              pointerEvents: 'none',
            }}
          >
            <Award size={80} />
          </div>

          <div
            className="panel-title"
            style={{ position: 'relative', zIndex: 5 }}
          >
            <Award size={22} fill="currentColor" />
            <h2>Điểm tâm đắc</h2>
          </div>
          <ul style={{ position: 'relative', zIndex: 5 }}>
            {conclusion.highlights.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </NotebookCard>

        <NotebookCard style={{ overflow: 'visible', position: 'relative' }}>
          {/* Heart Paperclip */}
          <HeartPaperclipSVG className="card-clip" color="var(--pen-blue)" />

          {/* Faint watermark icon in background */}
          <div
            style={{
              position: 'absolute',
              bottom: '15px',
              right: '20px',
              opacity: 0.05,
              pointerEvents: 'none',
            }}
          >
            <HelpCircle size={80} />
          </div>

          <div
            className="panel-title"
            style={{ position: 'relative', zIndex: 5 }}
          >
            <HelpCircle size={22} />
            <h2>Thách thức</h2>
          </div>
          <ul style={{ position: 'relative', zIndex: 5 }}>
            {conclusion.challenges.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </NotebookCard>

        <NotebookCard style={{ overflow: 'visible', position: 'relative' }}>
          {/* Washi Tape */}
          <WashiTapeSVG
            className="card-washi"
            color="var(--sunny-sticky)"
            pattern="stripe"
          />

          {/* Faint watermark icon in background */}
          <div
            style={{
              position: 'absolute',
              bottom: '15px',
              right: '20px',
              opacity: 0.05,
              pointerEvents: 'none',
            }}
          >
            <Compass size={80} />
          </div>

          <div
            className="panel-title"
            style={{ position: 'relative', zIndex: 5 }}
          >
            <Compass size={22} />
            <h2>Định hướng</h2>
          </div>
          <ul style={{ position: 'relative', zIndex: 5 }}>
            {conclusion.direction.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </NotebookCard>
      </section>

      {/* Acknowledgements and Gratitude section */}
      <footer className="gratitude-footer">
        <Heart
          size={20}
          fill="currentColor"
          style={{
            color: 'var(--marker-pink)',
            display: 'block',
            margin: '0 auto 12px',
          }}
        />
        <p style={{ margin: 0 }}>{conclusion.acknowledgements}</p>
      </footer>
    </PageShell>
  );
}
