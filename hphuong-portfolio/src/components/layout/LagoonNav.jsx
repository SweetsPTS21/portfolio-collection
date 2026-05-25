import { Anchor, Compass, Backpack, MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/", label: "Giới thiệu", icon: Compass, end: true },
  { to: "/projects", label: "Dự án", icon: Anchor },
  { to: "/skills", label: "Kỹ năng", icon: Backpack },
  { to: "/contact", label: "Tổng kết & Liên hệ", icon: MessageCircle },
];

export default function LagoonNav() {
  return (
    <nav className="lagoon-nav" aria-label="Điều hướng portfolio 4 tab">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        return (
          <NavLink
            key={tab.to}
            to={tab.to}
            end={tab.end}
            className={({ isActive }) => `lagoon-nav__item${isActive ? " is-active" : ""}`}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{tab.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
