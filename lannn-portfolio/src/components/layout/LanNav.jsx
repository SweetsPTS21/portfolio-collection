import { NavLink } from "react-router-dom";
import { Scale } from "lucide-react";
import { navItems } from "../../app/routes";

export function LanNav() {
  return (
    <header className="siteHeader">
      <NavLink className="brandMark" to="/about" aria-label="Về trang giới thiệu Nguyễn Ngọc Lan">
        <span className="brandIcon"><Scale size={20} /></span>
        <span className="brandText">Lan Portfolio</span>
      </NavLink>
      <nav className="navPills" aria-label="Điều hướng chính">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.path} className="navPill" to={item.path}>
              <Icon size={17} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
