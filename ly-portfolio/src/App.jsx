import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./app/AnimatedRoutes";
import LakeScene from "./components/layout/LakeScene";
import Navbar from "./components/layout/Navbar";
import { initLenis, destroyLenis } from "./app/lenisSetup";

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
        <LakeScene />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

