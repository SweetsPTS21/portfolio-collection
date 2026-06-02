import { motion } from "framer-motion";
import { Activity, Flag, Trophy } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../app/routes.js";

const icons = [Trophy, Activity, Flag];

export default function ScoreboardNav() {
  const location = useLocation();

  return (
    <header className="scoreboard-wrap" aria-label="Main navigation">
      <nav className="scoreboard-nav">
        <div className="scoreboard-status">
          <span>STADIUM OCEAN MOTION</span>
          <strong>{routes.find((route) => route.path === location.pathname)?.number ?? "01"}</strong>
        </div>
        <div className="scoreboard-tabs">
          {routes.map((route, index) => {
            const Icon = icons[index];
            return (
              <NavLink key={route.path} to={route.path} className="scoreboard-tab">
                {({ isActive }) => (
                  <>
                    {isActive && <motion.span layoutId="active-tab" className="active-tab" />}
                    <Icon size={18} strokeWidth={2.4} />
                    <span>{route.shortLabel}</span>
                    <b>{route.number}</b>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
