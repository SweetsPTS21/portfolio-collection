import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SunlitOceanShell from "./components/layout/SunlitOceanShell.jsx";
import { routes } from "./app/routes.js";

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

  const navigate = (nextPath) => {
    window.history.pushState({}, "", nextPath);
    setPath(nextPath);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  React.useEffect(() => {
    const onPopState = () => setPath(normalizePath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const Page = activeRoute.element;

  return (
    <SunlitOceanShell activePath={path} onNavigate={navigate}>
      <AnimatePresence mode="wait">
        <motion.main
          key={activeRoute.path}
          className="route-stage"
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -16, filter: "blur(8px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Page onNavigate={navigate} />
        </motion.main>
      </AnimatePresence>
    </SunlitOceanShell>
  );
}
