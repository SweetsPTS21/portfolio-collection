import React from 'react';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../app/routeConfig';
import { theme } from '../../app/theme';

export default function Navbar() {
  return (
    <header className="beach-nav" aria-label={`${theme.id} navigation`}>
      <NavLink className="brand-mark" to="/about">
        <span className="brand-sun" aria-hidden="true" />
        <span>Ngọc Huyền</span>
      </NavLink>
      <nav>
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} className="nav-shell" to={to}>
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
