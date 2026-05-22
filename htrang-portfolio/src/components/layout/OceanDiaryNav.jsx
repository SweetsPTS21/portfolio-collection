import { BookOpen, Shell, Waves } from "lucide-react";
import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "Giới thiệu", icon: Shell, end: true },
  { to: "/projects", label: "Dự án", icon: BookOpen },
  { to: "/conclusion", label: "Tổng kết", icon: Waves }
];

export default function OceanDiaryNav() {
  return (
    <nav className="ocean-nav" aria-label="Điều hướng portfolio 3 tab">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) => `ocean-nav__item${isActive ? " is-active" : ""}`}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
