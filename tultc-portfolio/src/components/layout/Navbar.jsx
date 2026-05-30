import { FolderKanban, HeartHandshake, Sparkles } from 'lucide-react';
import { pageConfig } from '../../app/pageConfig.js';

const navIcons = {
  Sparkles,
  FolderKanban,
  HeartHandshake,
};

export default function Navbar({ activePage, onNavigate }) {
  return (
    <header className="site-nav">
      <button
        className="site-nav__brand"
        type="button"
        onClick={() => onNavigate('about')}
        aria-label="Về trang giới thiệu"
      >
        <Sparkles size={18} />
        <span>Cam Tu Studio</span>
      </button>

      <nav className="site-nav__links" aria-label="Điều hướng portfolio">
        {pageConfig.map((page) => {
          const Icon = navIcons[page.icon];

          return (
            <button
              key={page.id}
              type="button"
              className={page.id === activePage ? 'is-active' : ''}
              onClick={() => onNavigate(page.id)}
              aria-current={page.id === activePage ? 'page' : undefined}
            >
              <Icon size={16} />
              <span>{page.label}</span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
