import React from "react";
import { AnimatePresence } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { routes } from "./routes";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/reef" replace />} />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
        <Route path="*" element={<Navigate to="/reef" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
