import React from 'react';
import { courseInfo, conclusion } from '../data/portfolioData';

export default function CourseView({ active }) {
  if (!active) return null;

  return (
    <article className="view-section active" id="courseView">
      <section className="card">
        <div className="card-header">
          <span className="card-badge">📖 Tổng quan học phần</span>
        </div>
        <h2>{courseInfo.name}</h2>
        <p>{courseInfo.description}</p>
        <span className="semester-tag">{courseInfo.semester}</span>
      </section>

      <section className="card">
        <div className="card-header">
          <span className="card-badge">📝 Nhật ký chặng đường</span>
        </div>
        <p className="conclusion-text">{conclusion.journey}</p>
      </section>

      <section className="card">
        <div className="card-header">
          <span className="card-badge">💡 Sự chuyển dịch tư duy</span>
        </div>
        <blockquote className="motto-quote">
          "Tư duy là cốt lõi, công nghệ là đòn bẩy."
        </blockquote>
        <p className="conclusion-text">{conclusion.mindshift}</p>
      </section>

      <div className="conclusion-grid">
        <section className="card">
          <div className="card-header">
            <span className="card-badge">🏆 Điểm tự hào</span>
          </div>
          <p className="conclusion-text">{conclusion.highlight}</p>
        </section>

        <section className="card">
          <div className="card-header">
            <span className="card-badge">⚡ Thách thức</span>
          </div>
          <p className="conclusion-text">{conclusion.challenge}</p>
        </section>
      </div>

      <section className="card">
        <div className="card-header">
          <span className="card-badge">🚀 Tầm nhìn phía trước</span>
        </div>
        <p className="conclusion-text">{conclusion.vision}</p>
      </section>

      <section className="card">
        <div className="card-header">
          <span className="card-badge">❤️ Lời cảm ơn</span>
        </div>
        <p className="conclusion-text">{conclusion.thanks}</p>
      </section>
    </article>
  );
}
