import React from 'react';
import { NavLink } from 'react-router-dom';
import { Coffee } from 'lucide-react';
import { navItems } from '../../app/routeConfig';

export default function Navbar() {
  return (
    <header className="coffee-nav">
      <NavLink
        to="/about"
        className="brand-mark"
        aria-label="Bích Ngọc about page"
      >
        <Coffee size={20} />
        <span>Bích Ngọc Portfolio</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
