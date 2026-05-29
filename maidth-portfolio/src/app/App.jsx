import { useEffect, useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { normalizePath } from "./routes";
import { setupLenis } from "./lenisSetup";
import { GlassPageShell } from "../components/layout/GlassPageShell";
import { StationTransition } from "../components/layout/StationTransition";
import { CloudStationAboutPage } from "../pages/CloudStationAboutPage";
import { TrainCarProjectsPage } from "../pages/TrainCarProjectsPage";
import { ArrivalConclutionPage } from "../pages/ArrivalConclutionPage";

const pages = {
  "/about": CloudStationAboutPage,
  "/projects": TrainCarProjectsPage,
  "/conclution": ArrivalConclutionPage,
};

export default function App() {
  const [path, setPath] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => setupLenis(), []);

  useEffect(() => {
    const normalized = normalizePath(window.location.pathname);
    if (normalized !== window.location.pathname) {
      window.history.replaceState({}, "", normalized);
    }

    const handlePopState = () => setPath(normalizePath(window.location.pathname));
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const CurrentPage = useMemo(() => pages[path] ?? CloudStationAboutPage, [path]);

  const navigate = (nextPath) => {
    const normalized = normalizePath(nextPath);
    window.history.pushState({}, "", normalized);
    setPath(normalized);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GlassPageShell activePath={path} onNavigate={navigate}>
      <AnimatePresence mode="wait">
        <StationTransition key={path}>
          <CurrentPage />
        </StationTransition>
      </AnimatePresence>
    </GlassPageShell>
  );
}

