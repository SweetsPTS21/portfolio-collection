import { NavLink } from 'react-router-dom';
import { TreePine, FolderOpen, MessageCircle } from 'lucide-react';
import woodSign from '../../assets/fairy-mushroom-forest/wood-sign.svg';

const navItems = [
  { path: '/', label: 'About', icon: TreePine },
  { path: '/projects', label: 'Projects', icon: FolderOpen },
  { path: '/conclusion', label: 'Conclusion', icon: MessageCircle },
];

export default function Navbar() {
  return (
    <nav className="forest-nav">
      {/* Wood sign background */}
      <img src={woodSign} alt="" aria-hidden="true" className="nav-wood-bg" />
      <div className="nav-items">
        {navItems.map((item) => {
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `stone-link ${isActive ? 'stone-active' : ''}`}
            >
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
