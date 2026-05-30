import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Lenis from "lenis";
import AnimatedRoutes from "./app/AnimatedRoutes";
import StationeryShell from "./components/layout/StationeryShell";
import StationeryNav from "./components/layout/StationeryNav";

export default function App() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

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
    <BrowserRouter>
      <div className="app-shell">
        <StationeryShell />
        <StationeryNav />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
