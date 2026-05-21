import { useEffect } from 'react';
import Lenis from 'lenis';

export default function PageShell({ children }) {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, smoothWheel: true });
    function raf(time) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    window.scrollTo(0, 0);
    return () => lenis.destroy();
  }, []);

  return (
    <main style={{ paddingTop: 72, position: 'relative', zIndex: 1 }}>
      {children}
    </main>
  );
}
