import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AppShell from "./components/layout/AppShell.jsx";
import ConclusionPage from "./pages/ConclusionPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

const routes = {
  "/": HomePage,
  "/projects": ProjectsPage,
  "/conclusion": ConclusionPage,
};

export default function App() {
  const [activeRoute, setActiveRoute] = useState(window.location.pathname in routes ? window.location.pathname : "/");
  const ActivePage = routes[activeRoute];

  function navigate(path) {
    window.history.pushState({}, "", path);
    setActiveRoute(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handlePop = () => setActiveRoute(window.location.pathname in routes ? window.location.pathname : "/");
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, []);

  return (
    <AppShell activeRoute={activeRoute} onNavigate={navigate}>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeRoute}
          initial={{ opacity: 0, y: 18, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -12, scale: 0.985 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        >
          <ActivePage onNavigate={navigate} />
        </motion.div>
      </AnimatePresence>
    </AppShell>
  );
}
