import React from 'react';
import { NavLink } from 'react-router-dom';
import { Rabbit } from 'lucide-react';
import { navItems } from '../../app/routeConfig';

export default function Navbar() {
  return (
    <header className="garden-nav">
      <NavLink to="/about" className="brand-mark" aria-label="Nhi portfolio home">
        <Rabbit size={20} />
        <span>Phương Nhi</span>
      </NavLink>
      <nav aria-label="Primary navigation">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => `nav-petal ${isActive ? 'active' : ''}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
