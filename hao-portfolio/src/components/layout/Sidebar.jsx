import React, { useState } from 'react';
import { projects } from '../../data/portfolioData';

export default function Sidebar({ activeView, activeProject, onNavigate }) {
  const [profileExpanded, setProfileExpanded] = useState(true);
  const [projectsExpanded, setProjectsExpanded] = useState(false);

  return (
    <aside className="sidebar">
      <div className="brand-box">THU24VNU</div>

      <nav className="nav-group">
        {/* Profile accordion */}
        <div className="nav-item-wrapper">
          <button
            className={`nav-btn ${profileExpanded ? 'expanded' : ''}`}
            onClick={() => setProfileExpanded(!profileExpanded)}
          >
            <span className="plus-badge">{profileExpanded ? '−' : '+'}</span>
            <span>Hồ sơ Thông tin sinh viên</span>
          </button>
          {profileExpanded && (
            <div className="accordion-content open">
              <div id="profile-list">
                <button
                  className={`sub-link ${activeView === 'about' ? 'active' : ''}`}
                  onClick={() => onNavigate('about')}
                >
                  00. Giới thiệu chung
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Projects accordion */}
        <div className="nav-item-wrapper">
          <button
            className={`nav-btn ${projectsExpanded ? 'expanded' : ''}`}
            onClick={() => setProjectsExpanded(!projectsExpanded)}
          >
            <span className="plus-badge">{projectsExpanded ? '−' : '+'}</span>
            <span>Danh mục</span>
          </button>
          {projectsExpanded && (
            <div className="accordion-content open">
              <div id="projects-list">
                {projects.map((p) => (
                  <button
                    key={p.id}
                    className={`sub-link ${activeView === 'project' && activeProject === p.id ? 'active' : ''}`}
                    onClick={() => onNavigate('project', p.id)}
                  >
                    0{p.id}. {p.chapter.split(':')[0]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Course overview */}
        <div className="nav-item-wrapper">
          <button
            className={`nav-btn ${activeView === 'course' ? 'expanded' : ''}`}
            onClick={() => onNavigate('course')}
          >
            <span className="plus-badge">📖</span>
            <span>Tổng kết</span>
          </button>
        </div>
      </nav>
    </aside>
  );
}
