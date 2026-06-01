import React from 'react';
import PageShell from '../components/layout/PageShell';
import CoffeeCard from '../components/ui/CoffeeCard';
import { profile, goals, principles, tools } from '../data/portfolioData';
import { Target, Compass, Sparkles, Wrench } from 'lucide-react';
import cuteCat from '../assets/ngocnb-afternoon-coffee/cute-cat-silhouette.svg';

export default function AboutPage() {
  return (
    <PageShell eyebrow="GIỚI THIỆU" title="Không Gian Làm Việc Số">
      <div className="about-grid">
        {/* Left Side: Profile Editorial Card */}
        <div
          className="profile-card"
          style={{ position: 'relative', overflow: 'hidden' }}
        >
          <img
            src={cuteCat}
            alt=""
            style={{
              position: 'absolute',
              bottom: '-5px',
              right: '-5px',
              width: '75px',
              opacity: 0.08,
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              display: 'flex',
              gap: '28px',
              flexWrap: 'wrap-reverse',
              alignItems: 'flex-start',
              marginBottom: '20px',
            }}
          >
            {/* Left part: text */}
            <div style={{ flex: '1 1 280px' }}>
              <h2 className="profile-title" style={{ marginTop: 0 }}>
                {profile.name}
              </h2>
              {profile.intro.map((p, idx) => (
                <p
                  key={idx}
                  className="profile-intro"
                  style={{
                    marginBottom: '16px',
                    lineHeight: '1.7',
                    fontSize: '0.98rem',
                  }}
                >
                  {p}
                </p>
              ))}
            </div>

            {/* Right part: Avatar Frame */}
            <div style={{ flex: '0 0 160px', margin: '0 auto' }}>
              <div
                className="avatar-polaroid-frame"
                style={{
                  width: '260px',
                  height: '290px',
                  background: 'var(--white-paper)',
                  border: '1px solid var(--latte-border)',
                  borderRadius: '4px',
                  padding: '10px 10px 24px 10px',
                  boxShadow: '0 8px 20px rgba(44, 30, 22, 0.1)',
                  transform: 'rotate(2deg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                {/* Image Placeholder */}
                <div
                  style={{
                    flexGrow: 1,
                    background: 'rgba(230, 220, 211, 0.4)',
                    border: '1px solid var(--latte-border)',
                    borderRadius: '2px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--earth-caramel)',
                    fontSize: '0.8rem',
                    fontStyle: 'italic',
                    gap: '4px',
                  }}
                >
                  <Sparkles size={16} />
                  <span>Chờ thêm ảnh</span>
                </div>
                <div
                  style={{
                    height: '12px',
                    borderBottom: '1px dashed var(--latte-border)',
                    margin: '0 6px',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="profile-meta">
            <div className="meta-item">
              <span className="meta-label">Mã sinh viên</span>
              <span className="meta-val">{profile.studentId}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Chuyên ngành</span>
              <span className="meta-val">{profile.major}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Trường học</span>
              <span className="meta-val">{profile.school}</span>
            </div>
            <div className="meta-item">
              <span className="meta-label">Phong cách</span>
              <span className="meta-val">{profile.style.join(' • ')}</span>
            </div>
          </div>
        </div>

        {/* Right Side: Goals & Toolbox */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Principles */}
          <CoffeeCard title="Nguyên Tắc Làm Việc" icon={<Compass size={22} />}>
            <p
              style={{
                fontWeight: 'bold',
                margin: '0 0 12px',
                fontSize: '1rem',
                color: '#6F4E37',
              }}
            >
              {principles.core}
            </p>
            {principles.details.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: '0.95rem',
                  lineHeight: '1.6',
                  margin: '0 0 10px',
                  color: '#2C1E16',
                }}
              >
                {p}
              </p>
            ))}
          </CoffeeCard>

          {/* Goals */}
          <CoffeeCard title="Mục Tiêu & Định Hướng" icon={<Target size={22} />}>
            <ul className="bullet-list">
              {goals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </CoffeeCard>

          {/* Tools */}
          <CoffeeCard title="Hệ Sinh Thái Công Cụ" icon={<Wrench size={22} />}>
            <div className="tag-cloud">
              {tools.map((tool, idx) => (
                <span className="coffee-tag" key={idx}>
                  <Sparkles size={12} style={{ color: '#8B7355' }} />
                  {tool}
                </span>
              ))}
            </div>
          </CoffeeCard>
        </div>
      </div>
    </PageShell>
  );
}
