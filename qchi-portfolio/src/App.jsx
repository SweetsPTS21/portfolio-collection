import React from "react";
import { BrowserRouter } from "react-router-dom";
import AnimatedRoutes from "./app/AnimatedRoutes";
import Navbar from "./components/layout/Navbar";
import StudyDeskScene from "./components/layout/StudyDeskScene";

export default function App() {
    return (
        <BrowserRouter>
            <div className="app-shell">
                <StudyDeskScene />
                <Navbar />
                <AnimatedRoutes />
            </div>
        </BrowserRouter>
    );
}
