import React from 'react';
import { NavLink } from 'react-router-dom';
import { PenLine } from 'lucide-react';
import { navItems } from '../../app/routeConfig';

export default function Navbar() {
  return (
    <header className="study-nav">
      <NavLink
        to="/about"
        className="brand-mark"
        aria-label="Quỳnh Chi about page"
      >
        <PenLine size={20} />
        <span>Quỳnh Chi Portfolio</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
