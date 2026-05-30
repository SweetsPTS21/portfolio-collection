import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../app/routeConfig';
import { Heart } from 'lucide-react';

export default function StationeryNav() {
  return (
    <header className="stationery-nav">
      <NavLink to="/about" className="brand-mark" aria-label="Hoàng Thu Phương Portfolio Home">
        <Heart size={22} fill="currentColor" />
        <span>Thu Phương Portfolio</span>
      </NavLink>
      <nav aria-label="Primary navigation" className="nav-links">
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
