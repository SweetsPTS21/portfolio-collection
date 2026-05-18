import { Anchor, Compass, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "Giới thiệu", icon: Compass, end: true },
  { to: "/projects", label: "Dự án", icon: FileText },
  { to: "/conclusion", label: "Tổng kết", icon: Anchor },
];

export default function CruiseNav() {
  return (
    <nav className="cruise-nav" aria-label="Điều hướng portfolio 3 tab">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) => `cruise-nav__item${isActive ? " is-active" : ""}`}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
