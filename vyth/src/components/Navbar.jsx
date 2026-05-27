import { motion } from 'framer-motion';
import { User, Scale, FileText } from 'lucide-react';

export default function Navbar({ current, onChange }) {
  const navItems = [
    { id: 'about', label: 'Giới thiệu', icon: User, testId: 'navbar-about' },
    { id: 'projects', label: 'Bài tập nghiên cứu', icon: Scale, testId: 'navbar-projects' },
    { id: 'conclusion', label: 'Tổng kết & Định hướng', icon: FileText, testId: 'navbar-conclusion' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-20 bg-paper-breath/70 backdrop-blur-md border-b border-pencil-light/20 z-30 flex items-center justify-between px-8 select-none">
      {/* Brand logo container */}
      <div 
        onClick={() => onChange('about')}
        className="flex items-center gap-3 cursor-pointer"
      >
        <span className="hand-drawn-pill font-serif font-bold text-base px-3 py-1">VYTH</span>
        <span className="text-xs font-mono border-l border-pencil-light pl-2 text-graphite-gray uppercase tracking-widest hidden sm:inline">Portfolio</span>
      </div>

      {/* Nav Menu */}
      <nav className="flex items-center gap-2 sm:gap-6">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = current === item.id;

          return (
            <button
              key={item.id}
              onClick={() => onChange(item.id)}
              data-testid={item.testId}
              id={`nav-${item.id}`}
              className={`relative px-3 py-2 flex items-center gap-2 rounded-lg text-sm font-medium transition-colors duration-300 ${
                isActive ? 'text-charcoal-black' : 'text-graphite-gray hover:text-charcoal-black'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-accent-sepia' : 'text-graphite-gray'} />
              <span className="hidden md:inline">{item.label}</span>
              
              {/* Organic graphite underline highlight via layout morphing */}
              {isActive && (
                <motion.div
                  layoutId="navbar-underline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-accent-sepia"
                  style={{
                    borderRadius: '2px',
                    boxShadow: '0 1px 2px rgba(133, 110, 63, 0.4)'
                  }}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
