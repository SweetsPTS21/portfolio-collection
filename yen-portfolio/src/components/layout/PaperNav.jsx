import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../../app/routes";

export default function PaperNav() {
  return (
    <header className="paper-nav">
      <NavLink to="/desk" className="brand-mark">
        <span className="brand-seal">Y</span>
        <span>Hoàng Yến</span>
      </NavLink>
      <nav aria-label="Portfolio sections">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink key={item.to} to={item.to} className="paper-nav-link">
              <Icon size={17} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
