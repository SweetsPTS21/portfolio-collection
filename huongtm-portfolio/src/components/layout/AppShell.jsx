import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HuongNav } from "./HuongNav";
import { MeadowBackground } from "../../features/picnic-meadow-scene/MeadowBackground";
import { initLenis } from "../../app/lenisSetup";

export const AppShell = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Initialize Lenis smooth scroll
    const lenis = initLenis();

    // 2. Cleanup scroll context on route changes
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, [pathname]);

  return (
    <div className="app-shell">
      {/* 3D Parallax Landscape Background */}
      <MeadowBackground />

      {/* Sweet picnic-tag style Nav bar */}
      <HuongNav />

      {/* Main Content Router Port */}
      <main className="main-viewport">
        <Outlet />
      </main>
    </div>
  );
};
