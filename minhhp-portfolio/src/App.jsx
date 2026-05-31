import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RainNotebookShell from "./components/layout/RainNotebookShell.jsx";
import { routes } from "./app/routes.js";
import { setupLenis } from "./app/lenisSetup.js";

const normalizePath = () => {
  const path = window.location.pathname;
  return routes.some((route) => route.path === path) ? path : "/";
};

export default function App() {
  const [path, setPath] = useState(normalizePath);
  const activeRoute = useMemo(
    () => routes.find((route) => route.path === path) ?? routes[0],
    [path],
  );

  useEffect(() => setupLenis(), []);

  useEffect(() => {
    const onPopState = () => setPath(normalizePath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const Page = activeRoute.element;

  return (
    <RainNotebookShell activePath={path} onNavigate={navigate}>
      <AnimatePresence mode="wait">
        <motion.main
          key={activeRoute.path}
          className="route-stage"
          initial={{ opacity: 0, y: 34, rotateX: -4, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -22, rotateX: 4, filter: "blur(10px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <Page onNavigate={navigate} />
        </motion.main>
      </AnimatePresence>
    </RainNotebookShell>
  );
}
