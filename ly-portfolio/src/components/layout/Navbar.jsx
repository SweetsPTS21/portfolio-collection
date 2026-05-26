import React from 'react';
import { NavLink } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import { navItems } from '../../app/routeConfig';

export default function Navbar() {
  return (
    <header className="lake-nav">
      <NavLink to="/about" className="brand-mark" aria-label="Ly portfolio home">
        <Sparkles size={18} />
        <span>Khánh Ly</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-satin ${isActive ? 'active' : ''}`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
