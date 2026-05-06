import { X } from 'lucide-react';
import MotionPanel from '../ui/MotionPanel.jsx';
import AboutPanel from './AboutPanel.jsx';
import ProjectsPanel from './ProjectsPanel.jsx';
import ConclusionPanel from './ConclusionPanel.jsx';

const panelMeta = {
  about: {
    title: 'Giới thiệu',
    kicker: 'Notebook / About me',
    Component: AboutPanel,
  },
  projects: {
    title: 'Dự án',
    kicker: 'Laptop / Project files',
    Component: ProjectsPanel,
  },
  conclusion: {
    title: 'Tổng kết',
    kicker: 'Folder / Reflection notes',
    Component: ConclusionPanel,
  },
};

const sectionOrder = ['about', 'projects', 'conclusion'];

export default function SectionPanel({ activeSection, onSwitch, onClose }) {
  if (!activeSection) {
    return null;
  }

  const meta = panelMeta[activeSection];
  const ActivePanel = meta.Component;

  return (
    <div className="section-panel-backdrop" role="presentation">
      <MotionPanel className="section-panel">
        <section role="dialog" aria-modal="true" aria-labelledby="section-panel-title">
          <header className="panel-header">
            <div>
              <p className="panel-kicker">{meta.kicker}</p>
              <h2 id="section-panel-title" className="panel-title">
                {meta.title}
              </h2>
            </div>
            <div className="panel-switcher">
              {sectionOrder.map((id) => (
                <button
                  key={id}
                  type="button"
                  className={`desk-action ${activeSection === id ? 'is-active' : ''}`}
                  onClick={() => onSwitch(id)}
                  aria-label={`Mở ${panelMeta[id].title}`}
                >
                  {panelMeta[id].title}
                </button>
              ))}
              <button
                type="button"
                className="desk-action"
                onClick={onClose}
                aria-label="Đóng panel"
              >
                <X size={17} />
                <span>Đóng</span>
              </button>
            </div>
          </header>
          <div className="panel-body">
            <MotionPanel key={activeSection}>
              <ActivePanel />
            </MotionPanel>
          </div>
        </section>
      </MotionPanel>
    </div>
  );
}
