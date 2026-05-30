import BackgroundScene from './BackgroundScene.jsx';
import Navbar from './Navbar.jsx';

export default function AppShell({ activePage, onNavigate, children }) {
  return (
    <div className="app-shell">
      <BackgroundScene />
      <Navbar activePage={activePage} onNavigate={onNavigate} />
      {children}
      <footer className="site-footer">
        <strong>Lê Thị Cẩm Tú</strong>
        <span>Luật Kinh Doanh · Sweet Legal Studio · 2026</span>
      </footer>
    </div>
  );
}
