import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import HarborShell from "./components/layout/HarborShell.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ConclutionsPage from "./pages/ConclutionsPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.pathname, location.hash]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/conclutions" element={<ConclutionsPage />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <HarborShell>
        <AnimatedRoutes />
      </HarborShell>
    </BrowserRouter>
  );
}
