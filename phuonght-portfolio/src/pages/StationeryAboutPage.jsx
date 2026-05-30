import React from 'react';
import { Gavel, Heart, Sparkles, BookOpen } from 'lucide-react';
import PageShell from '../components/layout/PageShell';
import NotebookCard from '../components/ui/NotebookCard';
import StickerBadge from '../components/ui/StickerBadge';
import WashiTag from '../components/ui/WashiTag';
import { profile, goals, tools, principles } from '../data/portfolioData';
import avatar from '../../docs/avatar.jpg';

export default function StationeryAboutPage() {
  return (
    <PageShell eyebrow="Transformation Profile" title="XIN CHÀO MỌI NGƯỜI !">
      <section className="hero-grid">
        <div className="hero-copy">
          <p className="quote">“ {profile.quote} ”</p>
          <p className="lead">{profile.intro}</p>
          
          <div className="identity-grid">
            <div className="info-card">
              <span>Họ và tên</span>
              <strong>{profile.name}</strong>
            </div>
            <div className="info-card">
              <span>Mã sinh viên</span>
              <strong>{profile.studentId}</strong>
            </div>
            <div className="info-card">
              <span>Ngành học</span>
              <strong>{profile.major}</strong>
            </div>
            <div className="info-card">
              <span>Trường học</span>
              <strong>{profile.school}</strong>
            </div>
          </div>
        </div>

        {/* Polaroid notebook avatar */}
        <div className="avatar-card">
          <div className="avatar-container">
            <div className="avatar-washi">STUDENT ID</div>
            <img className="avatar-img" src={avatar} alt={profile.name} />
            <div className="avatar-caption">{profile.name}</div>
          </div>
        </div>
      </section>

      {/* Two Column details: Goals & Tools */}
      <section className="two-column">
        <NotebookCard>
          <div className="panel-title">
            <Heart size={22} fill="currentColor" />
            <h2>Mục tiêu học tập & Portfolio</h2>
          </div>
          <ul>
            {goals.map((goal, idx) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </NotebookCard>

        <NotebookCard>
          <div className="panel-title">
            <Sparkles size={22} fill="currentColor" />
            <h2>Hộp công cụ kỹ thuật số</h2>
          </div>
          <div className="chip-cloud">
            {tools.map((tool) => (
              <StickerBadge 
                key={tool.name} 
                color={
                  tool.category === 'Lưu trữ' ? 'var(--mint-note)' :
                  tool.category === 'Tra cứu' ? 'var(--pen-blue)' :
                  tool.category === 'Trợ lý AI' ? 'var(--lavender-paper)' :
                  tool.category === 'Thiết kế' ? 'var(--sunny-sticky)' : 'var(--washi-border)'
                }
              >
                <span>{tool.name}</span>
              </StickerBadge>
            ))}
          </div>
        </NotebookCard>
      </section>

      {/* Principles Section as Washi strips */}
      <section style={{ marginTop: '40px' }}>
        <NotebookCard>
          <div className="panel-title">
            <Gavel size={22} />
            <h2>Nguyên tắc & Liêm chính học thuật</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
            {principles.map((pr, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <WashiTag text={`Quy tắc 0${idx + 1}`} color={idx === 0 ? 'var(--sunny-sticky)' : idx === 1 ? 'var(--pen-blue)' : 'var(--mint-note)'} />
                <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: '1.6' }}>{pr}</p>
              </div>
            ))}
          </div>
        </NotebookCard>
      </section>

      {/* Strengths Strip showing hobbies & styles */}
      <section className="spell-strip">
        {profile.style.map((st, idx) => (
          <article className="mini-spell" key={st}>
            <span>Style 0{idx + 1}</span>
            <p style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '4px 0 0' }}>{st}</p>
          </article>
        ))}
        <article className="mini-spell" style={{ backgroundColor: 'var(--lavender-paper)' }}>
          <span>Sở thích</span>
          <p style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '4px 0 0' }}>
            {profile.hobbies.join(' · ')}
          </p>
        </article>
      </section>
    </PageShell>
  );
}
