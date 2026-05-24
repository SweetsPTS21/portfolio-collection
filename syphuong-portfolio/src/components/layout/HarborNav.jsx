import { Anchor } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navItems, profile } from '../../data/portfolioData.js';
import WoodButton from '../ui/WoodButton.jsx';

export default function HarborNav() {
  return (
    <header className="harbor-nav">
      <NavLink
        className="brand-mark"
        to="/about"
        aria-label="Back to about page"
      >
        <Anchor size={24} strokeWidth={2.1} />
        <span>{profile.displayName}</span>
      </NavLink>

      <nav className="route-tabs" aria-label="Portfolio navigation">
        {navItems.map((item) => {
          const route = item.path.split('#')[0];
          return (
            <NavLink
              key={item.label}
              className={({ isActive }) =>
                `route-tab ${isActive ? 'is-active' : ''}`
              }
              to={item.path}
              end={route === '/about'}
            >
              {item.label}
            </NavLink>
          );
        })}
      </nav>

      <div className="nav-actions">
        <WoodButton to="/projects" icon={<Anchor size={18} strokeWidth={2} />}>
          Dock
        </WoodButton>
      </div>
    </header>
  );
}
