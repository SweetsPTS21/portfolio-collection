import { ConfigProvider } from "antd";
import { AnimatePresence } from "framer-motion";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import LagoonShell from "../components/layout/LagoonShell.jsx";
import LagoonHeroPage from "../components/pages/LagoonHeroPage.jsx";
import CheckpointProjectsPage from "../components/pages/CheckpointProjectsPage.jsx";
import PaddleToolkitSkillsPage from "../components/pages/PaddleToolkitSkillsPage.jsx";
import LagoonSignalContactPage from "../components/pages/LagoonSignalContactPage.jsx";
import { theme } from "./theme.js";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LagoonHeroPage />} />
        <Route path="/projects" element={<CheckpointProjectsPage />} />
        <Route path="/skills" element={<PaddleToolkitSkillsPage />} />
        <Route path="/contact" element={<LagoonSignalContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <HashRouter>
        <LagoonShell>
          <AnimatedRoutes />
        </LagoonShell>
      </HashRouter>
    </ConfigProvider>
  );
}
