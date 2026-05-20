import React from 'react';
import { NavLink } from 'react-router-dom';
import { Cat } from 'lucide-react';
import { navItems } from '../../app/routeConfig';

export default function Navbar() {
  return (
    <header className="cafe-nav">
      <NavLink
        to="/about"
        className="brand-mark"
        aria-label="Khánh Chi about page"
      >
        <Cat size={20} />
        <span>Khánh Chi Portfolio</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-gem ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
