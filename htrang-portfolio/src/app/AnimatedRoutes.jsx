import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { routes } from "./routes.jsx";

const pageMotion = {
    initial: { opacity: 0, y: 18, rotate: -0.5 },
    animate: { opacity: 1, y: 0, rotate: 0 },
    exit: { opacity: 0, y: -14, rotate: 0.35 },
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
};

export default function AnimatedRoutes() {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={
                            <motion.main className="route-stage" {...pageMotion}>
                                {route.element}
                            </motion.main>
                        }
                    />
                ))}
            </Routes>
        </AnimatePresence>
    );
}
