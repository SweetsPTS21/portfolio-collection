import React from 'react';
import pageFrame from './assets/page.png';
import avatarFrame from './assets/avatar-portrait.png';
import conclusionLeft from './assets/conclution-left.png';
import conclusionRight from './assets/conclution-right.png';
import projectFrame from './assets/project-card.png';
import introNote from './assets/note.png';
import {
  chapters,
  portfolioTitle,
  profile,
  reflection,
} from './data/portfolioData';

function ProjectCard({ chapter }) {
  return (
    <article className="project-card">
      <img
        src={projectFrame}
        className="project-card-frame"
        alt=""
        draggable="false"
      />
      <p className="project-number">{chapter.number}</p>
      <h3>{chapter.title}</h3>
      <p>{chapter.text}</p>
      <button type="button">Xem thêm</button>
    </article>
  );
}

export default function App() {
  return (
    <main className="portfolio-app" aria-label={portfolioTitle}>
      <section className="portfolio-sheet">
        <img src={pageFrame} className="page-frame" alt="" draggable="false" />

        <section className="hero-section" aria-labelledby="portfolio-title">
          <h1 id="portfolio-title">Về tôi</h1>

          <div className="avatar-card" aria-label="Ảnh đại diện">
            <img
              src={avatarFrame}
              className="avatar-frame"
              alt=""
              draggable="false"
            />
          </div>

          <div className="hero-profile-note" aria-label="Thông tin cá nhân">
            <img
              className="intro-note"
              src={introNote}
              alt=""
              draggable="false"
            />
            <p className="hello">Xin chào, mình là</p>
            <h2 className="profile-name">{profile.name}</h2>
            <dl className="profile-note-list">
              <div>
                <dt>Ngành học</dt>
                <dd>{profile.major}</dd>
              </div>
              <div>
                <dt>Trường</dt>
                <dd>{profile.school}</dd>
              </div>
              <div>
                <dt>Định hướng</dt>
                <dd>{profile.future}</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="projects-section" aria-labelledby="projects-title">
          <h2 id="projects-title">Danh sách dự án</h2>
          <div className="projects-grid">
            {chapters.map((chapter) => (
              <ProjectCard key={chapter.number} chapter={chapter} />
            ))}
          </div>
        </section>

        <section
          className="conclusion-section"
          aria-labelledby="conclusion-title"
        >
          <h2 id="conclusion-title">Tổng kết</h2>
          <div className="conclusion-left-card">
            <img
              src={conclusionLeft}
              className="conclusion-frame"
              alt=""
              draggable="false"
            />
            <div className="conclusion-copy">
              <h3>Cảm ơn đã xem portfolio của mình!</h3>
              <p>{reflection.summary}</p>
              <p>{reflection.thanks}</p>
            </div>
          </div>
          <div className="conclusion-right-card">
            <img
              src={conclusionRight}
              className="conclusion-frame"
              alt=""
              draggable="false"
            />
            <div className="proud-list">
              <h3>Điều mình tự hào</h3>
              <ul>
                <li>{reflection.favorite}</li>
                <li>{reflection.challenge}</li>
                <li>{profile.future}</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="contact-strip" aria-label="Liên hệ">
          <h2>Liên hệ với mình</h2>
          <p>Email</p>
          <a href="mailto:tramy.portfolio@example.com">
            tramy.portfolio@example.com
          </a>
          <p>{portfolioTitle}</p>
        </footer>
      </section>
    </main>
  );
}
