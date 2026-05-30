import React, { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import OceanBackground from '@/components/ocean-scene/OceanBackground';
import OceanNav from './OceanNav';
import FooterShore from './FooterShore';

/**
 * AppShell — root layout.
 * - Initialises Lenis smooth scroll
 * - Holds fixed OceanBackground (shared across all routes)
 * - Contains nav + route outlet + footer
 */
export default function AppShell() {
  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* Fixed ocean background — persists across routes */}
      <OceanBackground />

      {/* App layout */}
      <div
        style={{
          position: 'relative',
          zIndex: 'var(--z-content)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <OceanNav />

        {/* Route content */}
        <main style={{ flex: 1 }}>
          <Outlet />
        </main>

        <FooterShore />
      </div>
    </>
  );
}
