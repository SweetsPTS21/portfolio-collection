import { NavLink } from 'react-router-dom';
import { Shell, Fish, Gem } from 'lucide-react';

const navItems = [
  { to: '/', icon: Shell, label: 'Reef' },
  { to: '/projects', icon: Fish, label: 'Aquarium' },
  { to: '/conclusion', icon: Gem, label: 'Pearl' },
];

export default function ReefNav() {
  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-[var(--deep-aqua)]/20">
        {navItems.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center gap-1 px-4 py-2 rounded-2xl transition-all duration-300 no-underline ${
                isActive
                  ? 'bg-[var(--coral-pink)]/15 text-[var(--coral-pink)] scale-110'
                  : 'text-[var(--ocean-deep)]/60 hover:text-[var(--coral-pink)] hover:scale-105'
              }`
            }
          >
            <Icon size={22} strokeWidth={2} />
            <span className="text-xs font-heading font-semibold">{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
