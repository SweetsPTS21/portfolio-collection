import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimatedRoutes from './app/AnimatedRoutes';
import GreenhouseBackground from './components/background/GreenhouseBackground';

export default function App() {
  useEffect(() => {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div className="app-shell">
      <GreenhouseBackground />
      <Navbar />
      <main className="main-content">
        <AnimatedRoutes />
      </main>
      <Footer />
    </div>
  );
}
