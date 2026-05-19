import { BookOpen, Cpu, FileText } from "lucide-react";
import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "Giới thiệu", icon: Cpu, end: true },
  { to: "/projects", label: "Dự án", icon: FileText },
  { to: "/conclusion", label: "Tổng kết", icon: BookOpen },
];

export default function CityNav() {
  return (
    <nav className="city-nav" aria-label="Cyberpunk city navigation">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) => `city-nav__item${isActive ? " is-active" : ""}`}
          >
            <Icon size={17} aria-hidden="true" />
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
