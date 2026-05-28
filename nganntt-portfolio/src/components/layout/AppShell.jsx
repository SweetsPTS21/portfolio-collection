import { Coffee, Croissant, CupSoda } from "lucide-react";
import { NavLink } from "react-router-dom";
import { CafeBakeryBackground } from "../background/CafeBakeryBackground";

const navItems = [
  { to: "/about", label: "About", Icon: Coffee },
  { to: "/projects", label: "Projects", Icon: Croissant },
  { to: "/conclusion", label: "Conclusion", Icon: CupSoda },
];

export function AppShell({ children }) {
  return (
    <div className="appShell">
      <CafeBakeryBackground />
      <header className="siteHeader">
        <a className="brandMark" href="/about" aria-label="Ngân cafe bakery home">
          <span className="brandCup">N</span>
          <span>
            <strong>Ngân's Blue Bakery</strong>
            <small>fresh ideas daily</small>
          </span>
        </a>
        <nav className="menuNav" aria-label="Primary navigation">
          {navItems.map(({ to, label, Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `menuLink${isActive ? " active" : ""}`}>
              <Icon size={17} strokeWidth={2.2} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
