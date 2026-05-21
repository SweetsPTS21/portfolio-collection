import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles } from "lucide-react";
import { navItems } from "../../app/routes";

export default function Navbar() {
  return (
    <header className="ocean-nav">
      <NavLink
        to="/reef"
        className="brand-mark"
        aria-label="Thuy Chi underwater profile"
      >
        <Sparkles size={20} />
        <span>Thuy Chi Portfolio</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-gem ${isActive ? "active" : ""}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
