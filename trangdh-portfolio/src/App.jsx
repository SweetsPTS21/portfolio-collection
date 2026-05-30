import React from "react";
import { BrowserRouter } from "react-router-dom";
import TropicalPostcardShell from "./components/layout/TropicalPostcardShell.jsx";
import AnimatedRoutes from "./app/AnimatedRoutes.jsx";

export default function App() {
    return (
        <BrowserRouter>
            <TropicalPostcardShell>
                <AnimatedRoutes />
            </TropicalPostcardShell>
        </BrowserRouter>
    );
}
