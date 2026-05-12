import {
  about,
  developingSkills,
  learning,
  personalInfo,
} from '../../data/portfolioData.js';
import SectionShell from '../ui/SectionShell.jsx';

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      issue="01"
      eyebrow="Interview"
      title="Giới thiệu"
      lead={about.paragraphs[0]}
    >
      <div className="about-spread">
        <article className="pull-quote">
          <p>{about.paragraphs[1]}</p>
        </article>
        <dl className="profile-list">
          <div>
            <dt>Họ và tên</dt>
            <dd>{personalInfo.name}</dd>
          </div>
          <div>
            <dt>Ngành</dt>
            <dd>{personalInfo.major}</dd>
          </div>
          <div>
            <dt>Trường</dt>
            <dd>{personalInfo.university}</dd>
          </div>
          <div>
            <dt>Sở thích</dt>
            <dd>{personalInfo.interests}</dd>
          </div>
          <div>
            <dt>Phong cách</dt>
            <dd>{personalInfo.style}</dd>
          </div>
        </dl>
      </div>

      <div className="feature-grid">
        <article className="feature-card wide">
          <span>Direction</span>
          <h3>Định hướng và mục tiêu phát triển</h3>
          <ul>
            {about.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </article>
        <article className="feature-card">
          <span>Purpose</span>
          <h3>Mục đích xây dựng Portfolio</h3>
          <p>{about.purpose}</p>
          <ul>
            {about.purposePoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </article>
      </div>

      <div className="learning-layout">
        <div>
          <p className="column-label">Những điều đã học được</p>
          {learning.map((item, index) => (
            <article className="number-row" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
        <aside className="development-panel">
          <p className="column-label">Đang tiếp tục phát triển</p>
          {developingSkills.map((skill) => (
            <p key={skill}>{skill}</p>
          ))}
        </aside>
      </div>
    </SectionShell>
  );
}
