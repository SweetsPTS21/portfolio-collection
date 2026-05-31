import { BookOpen, Feather, Mail } from "lucide-react";
import { routes } from "../../app/routes.js";
import RainNotebookBackground from "../../features/rain-notebook-scene/RainNotebookBackground.jsx";
import { profile } from "../../data/portfolioData.js";

const icons = [BookOpen, Feather, Mail];

export default function RainNotebookShell({ children, activePath, onNavigate }) {
  return (
    <div className="app-shell pastel-rain-shell">
      <RainNotebookBackground />
      <header className="site-header">
        <button className="brand-mark" type="button" onClick={() => onNavigate("/") }>
          <span className="brand-seal"><Feather size={22} /></span>
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.themeId}</small>
          </span>
        </button>

        <nav className="route-tabs" aria-label="Điều hướng portfolio">
          {routes.map((route, index) => {
            const Icon = icons[index];
            return (
              <button
                className={`route-tab ${activePath === route.path ? "active" : ""}`}
                key={route.path}
                type="button"
                onClick={() => onNavigate(route.path)}
                aria-current={activePath === route.path ? "page" : undefined}
              >
                <span>{route.shortLabel}</span>
                <Icon size={17} strokeWidth={2.4} />
                {route.label}
              </button>
            );
          })}
        </nav>

        <button className="signature-action" type="button" onClick={() => onNavigate("/signature") }>
          <Mail size={18} strokeWidth={2.5} />
          Tổng kết
        </button>
      </header>
      {children}
    </div>
  );
}
