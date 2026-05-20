import React from 'react';
import { profile } from '../data/portfolioData';
import avatarUrl from '../assets/avatar.png';

export default function AboutView({ active }) {
  if (!active) return null;

  return (
    <article className="view-section active" id="aboutView">
      {/* Hero card - grid paper style */}
      <section className="paper-card grid-paper">
        <div className="paper-edge-top" aria-hidden="true" />
        <div className="paper-content">
          <span className="card-badge">📂 HỒ SƠ SINH VIÊN</span>
          <div className="stamp-circle" aria-hidden="true">
            <span className="stamp-text">THU</span>
            <span className="stamp-sub">VNU</span>
          </div>
          <h1 className="hero-title">XIN CHÀO!</h1>
          <h2 className="hero-name-big">
            MÌNH LÀ <span className="underline-accent">{profile.name.toUpperCase()}</span>
          </h2>
          <p className="hero-welcome">Chào mừng bạn đến với portfolio của mình nhé!</p>
          <span className="school-stamp" aria-hidden="true">VNU-UL</span>
        </div>
        <div className="paper-edge-bottom" aria-hidden="true" />
        <span className="deco-butterfly" aria-hidden="true">🦋</span>
      </section>

      {/* About section - lined paper with avatar */}
      <section className="paper-card lined-paper">
        <div className="tape-deco tape-top-left" aria-hidden="true" />
        <div className="paper-content about-grid">
          <div className="about-text">
            <h2 className="section-title">ĐÔI CHÚT VỀ BẢN THÂN</h2>
            <p>Xin chào, mình là <strong>{profile.name}</strong></p>
            <p>Mã sinh viên: <span className="highlight-box">{profile.studentId}</span></p>
            <p className="about-paragraph">{profile.intro}</p>
            <p className="about-paragraph">{profile.portfolioDesc}</p>

            <div className="interests-section">
              <h4>✨ Sở thích cá nhân:</h4>
              <div className="chip-cloud">
                {profile.interests.map((item, i) => (
                  <span key={item} className={`chip chip-color-${(i % 4) + 1}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="polaroid-frame">
            <img src={avatarUrl} alt={profile.name} className="polaroid-img" />
          </div>
        </div>
      </section>

      {/* Motto & Purpose - sticky notes layout */}
      <div className="sticky-notes-row">
        <section className="sticky-note note-yellow">
          <div className="tape-deco tape-center" aria-hidden="true" />
          <h3 className="sticky-title">CHÂM NGÔN YÊU THÍCH</h3>
          <blockquote className="sticky-quote">
            "{profile.motto}"
          </blockquote>
          <p className="sticky-text">{profile.philosophy}</p>
        </section>

        <section className="paper-card note-white tilted">
          <h3 className="section-title">TẠI SAO CÓ SITE NÀY?</h3>
          <p className="sticky-text">
            Đây là nơi lưu giữ thành quả của mình sau 6 bài học đầu tiên của môn
            <strong> (CS300) Nhập môn công nghệ số và ứng dụng trí tuệ nhân tạo</strong>.
            Hy vọng bạn sẽ tìm thấy chút niềm vui và sự mới lạ trong không gian thú vị này.
          </p>
          <button className="explore-btn" onClick={() => {}}>
            KHÁM PHÁ NÀO! →
          </button>
        </section>
      </div>

      {/* Contact - ticket/dashed border style */}
      <section className="ticket-card">
        <div className="ticket-content">
          <h3 className="ticket-title">LIÊN HỆ VỚI MÌNH</h3>
          <div className="ticket-info">
            <div className="ticket-left">
              <p><strong>TRƯỜNG ĐẠI HỌC LUẬT</strong></p>
              <p>Đại học Quốc Gia Hà Nội</p>
            </div>
            <div className="ticket-right">
              <p className="ticket-name">{profile.name.toUpperCase()}</p>
              <span className="email-tag">{profile.studentId}@vnu.edu.vn</span>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
