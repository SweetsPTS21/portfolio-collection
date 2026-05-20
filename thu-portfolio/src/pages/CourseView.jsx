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
          <span className="card-badge">💡 Tổng kết & Suy ngẫm</span>
        </div>
        <blockquote className="motto-quote">"{conclusion.summary}"</blockquote>

        <div className="conclusion-grid">
          <div className="meta-block">
            <h4>🌱 Trải nghiệm & Trưởng thành</h4>
            <p>{conclusion.growth}</p>
          </div>
          <div className="meta-block">
            <h4>✨ Kỹ năng quý nhất</h4>
            <p>{conclusion.bestSkill}</p>
          </div>
          <div className="meta-block">
            <h4>🏆 Điểm tâm đắc</h4>
            <p>{conclusion.highlight}</p>
          </div>
          <div className="meta-block">
            <h4>⚡ Thách thức</h4>
            <p>{conclusion.challenge}</p>
          </div>
        </div>
      </section>
    </article>
  );
}
