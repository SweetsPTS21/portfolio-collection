import { Compass, FileText, Home, Waves } from "lucide-react";

const navItems = [
  { path: "/", label: "Tổng quan", icon: Home },
  { path: "/projects", label: "Bài tập", icon: FileText },
  { path: "/conclusion", label: "Tổng kết", icon: Compass },
];

export default function RouteTabs({ activeRoute, onNavigate }) {
  return (
    <nav className="route-tabs" aria-label="Điều hướng portfolio">
      <span className="route-tabs-label"><Waves size={18} /> Arctic Route</span>
      {navItems.map(({ path, label, icon: Icon }) => (
        <button
          key={path}
          className={`route-tab ${activeRoute === path ? "route-tab-active" : ""}`}
          onClick={() => onNavigate(path)}
          type="button"
        >
          <Icon size={18} />
          {label}
        </button>
      ))}
    </nav>
  );
}
