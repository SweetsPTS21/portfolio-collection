import React, { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import AnimatedRoutes from "./app/AnimatedRoutes";
import SkyScene from "./components/layout/SkyScene";
import Navbar from "./components/layout/Navbar";
import CloudyOwl from "./components/ui/CloudyOwl";
import { initLenis, destroyLenis } from "./app/lenisSetup";

// Derive the page key for CloudyOwl from the current pathname.
// This component lives inside BrowserRouter so it can call useLocation.
function GlobalOwl() {
  const { pathname } = useLocation();
  const page = pathname.startsWith("/projects")
    ? "projects"
    : pathname.startsWith("/conclusion")
      ? "conclusion"
      : "about";
  return <CloudyOwl page={page} />;
}

export default function App() {
  useEffect(() => {
    initLenis();
    return () => {
      destroyLenis();
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="app-shell">
        <SkyScene />
        <Navbar />
        {/* CloudyOwl sits outside AnimatedRoutes so it is never
            unmounted/remounted during page transitions — zero jump. */}
        <GlobalOwl />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
