import { NavLink } from 'react-router';
import { routes } from '../../app/routes.js';

export default function StorybookNav() {
  return (
    <nav className="storybook-nav" aria-label="Storybook pages">
      <NavLink className="storybook-nav__brand" to="/">
        Thanh Thư
      </NavLink>
      <div className="storybook-nav__links">
        {routes.map((route) => (
          <NavLink
            className="storybook-nav__link"
            end={route.path === '/'}
            key={route.id}
            to={route.path}
          >
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
