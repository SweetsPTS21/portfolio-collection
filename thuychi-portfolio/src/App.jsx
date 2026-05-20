import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./app/AnimatedRoutes";
import ForestScene from "./components/layout/ForestScene";
import Navbar from "./components/layout/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <ForestScene />
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}
