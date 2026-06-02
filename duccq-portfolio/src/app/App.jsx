import Lenis from "lenis";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import HomeFieldRoute from "../pages/HomeFieldRoute.jsx";
import MatchProjectsRoute from "../pages/MatchProjectsRoute.jsx";
import FinalWhistleRoute from "../pages/FinalWhistleRoute.jsx";
import StadiumOceanBackground from "../features/stadium-ocean-scene/StadiumOceanBackground.jsx";
import ScoreboardNav from "../features/stadium-ocean-scene/ScoreboardNav.jsx";

const pageMotion = {
  initial: { opacity: 0, x: 90, filter: "blur(10px)" },
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: { opacity: 0, x: -90, filter: "blur(10px)" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

function PageFrame({ children }) {
  return (
    <motion.main className="page-frame" {...pageMotion}>
      {children}
    </motion.main>
  );
}

export default function App() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, wheelMultiplier: 0.9 });
    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <div className="app-shell">
      <StadiumOceanBackground routeKey={location.pathname} />
      <ScoreboardNav />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageFrame><HomeFieldRoute /></PageFrame>} />
          <Route path="/projects" element={<PageFrame><MatchProjectsRoute /></PageFrame>} />
          <Route path="/recap" element={<PageFrame><FinalWhistleRoute /></PageFrame>} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}
