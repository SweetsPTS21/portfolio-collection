import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./AnimatedRoutes";
import Navbar from "../components/layout/Navbar";
import BackgroundSideDecorations from "../features/underwater-scene/BackgroundSideDecorations";
import BubbleParticleLayer from "../features/underwater-scene/BubbleParticleLayer";
import CoralReefBase from "../features/underwater-scene/CoralReefBase";
import OceanGradientBackground from "../features/underwater-scene/OceanGradientBackground";
import SunbeamLayer from "../features/underwater-scene/SunbeamLayer";
import SwimmingFishLayer from "../features/underwater-scene/SwimmingFishLayer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <OceanGradientBackground />
        <SunbeamLayer />
        <BubbleParticleLayer />
        <CoralReefBase />
        <BackgroundSideDecorations />
        <SwimmingFishLayer />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
