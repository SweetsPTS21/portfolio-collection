import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./app/AnimatedRoutes";
import ParfaitScene from "./components/layout/ParfaitScene";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <ParfaitScene />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
