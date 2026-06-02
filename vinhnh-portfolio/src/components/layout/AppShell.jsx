import ArcticOrcaBackground from "./ArcticOrcaBackground.jsx";
import RouteTabs from "./RouteTabs.jsx";

export default function AppShell({ activeRoute, onNavigate, children }) {
  return (
    <div className="app-shell">
      <ArcticOrcaBackground />
      <header className="site-header">
        <button className="brand-mark" onClick={() => onNavigate("/")} type="button">
          <span>AO</span>
          <strong>Arctic Orca Expedition</strong>
        </button>
        <RouteTabs activeRoute={activeRoute} onNavigate={onNavigate} />
      </header>
      <main className="route-stage">{children}</main>
    </div>
  );
}
