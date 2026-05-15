import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./app/AnimatedRoutes";
import MagicalScene from "./components/layout/MagicalScene";
import Navbar from "./components/layout/Navbar";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-shell">
                <MagicalScene />
                <Navbar />
                <AnimatedRoutes />
            </div>
        </BrowserRouter>
    );
}
