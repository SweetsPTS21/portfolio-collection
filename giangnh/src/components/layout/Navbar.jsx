import React from 'react';
import { NavLink } from 'react-router-dom';
import { IceCream } from 'lucide-react';
import { navItems } from '../../app/routeConfig';

export default function Navbar() {
  return (
    <header className="magic-nav">
      <NavLink
        to="/about"
        className="brand-mark"
        aria-label="Giang Nguyen about page"
      >
        <IceCream size={20} />
        <span>Giang Nguyễn</span>
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
