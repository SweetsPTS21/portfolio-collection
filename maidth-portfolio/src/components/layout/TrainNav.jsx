import { BookOpen, FolderKanban, MapPin } from "lucide-react";
import { routes } from "../../app/routes";

const icons = {
  "/about": BookOpen,
  "/projects": FolderKanban,
  "/conclution": MapPin,
};

export function TrainNav({ activePath, onNavigate }) {
  return (
    <nav className="train-nav glass-surface" aria-label="Portfolio navigation">
      {routes.map((route) => {
        const Icon = icons[route.path];
        const active = route.path === activePath;
        return (
          <button
            type="button"
            key={route.path}
            className={active ? "nav-ticket active" : "nav-ticket"}
            onClick={() => onNavigate(route.path)}
            aria-current={active ? "page" : undefined}
          >
            <Icon aria-hidden="true" size={18} />
            <span>{route.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

