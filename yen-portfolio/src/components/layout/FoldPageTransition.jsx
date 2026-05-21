import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { pageVariants } from "../../app/motionConfig";
import { routes } from "../../app/routes";

export default function FoldPageTransition() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/desk" replace />} />
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={
              <motion.main variants={pageVariants} initial="initial" animate="animate" exit="exit">
                {route.element}
              </motion.main>
            }
          />
        ))}
        <Route path="*" element={<Navigate to="/desk" replace />} />
      </Routes>
    </AnimatePresence>
  );
}
