import React from "react";
import { NavLink } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { navItems } from "../../app/routeConfig";

export default function Navbar() {
  return (
    <div className="sky-nav">
      {/* Brand logo/initials mark */}
      <NavLink to="/about" className="brand-mark">
        <Sparkles size={16} />
        <span>Khánh</span>
      </NavLink>

      {/* Pill Nav Items */}
      <nav>
        {navItems.map((item) => {
          const IconComponent = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `nav-link-pill ${isActive ? "active" : ""}`
              }
            >
              <IconComponent size={16} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}
