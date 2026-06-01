import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { BrowserRouter } from 'react-router-dom';
import AnimatedRoutes from './app/AnimatedRoutes';
import BeachScene from './components/layout/BeachScene';
import Navbar from './components/layout/Navbar';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true });
    let frameId;

    function raf(time) {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    }

    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <BeachScene />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
