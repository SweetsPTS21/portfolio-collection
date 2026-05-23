import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./app/AnimatedRoutes";
import CafeScene from "./components/layout/CafeScene";
import Navbar from "./components/layout/Navbar";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-shell">
                <CafeScene />
                <Navbar />
                <AnimatedRoutes />
            </div>
        </BrowserRouter>
    );
}
