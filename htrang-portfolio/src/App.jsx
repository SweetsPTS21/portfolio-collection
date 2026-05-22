import { ConfigProvider } from "antd";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import OceanDiaryShell from "./components/layout/OceanDiaryShell.jsx";
import AboutPage from "./components/pages/AboutPage.jsx";
import ConclusionPage from "./components/pages/ConclusionPage.jsx";
import ProjectsPage from "./components/pages/ProjectsPage.jsx";
import { theme } from "./theme.js";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/conclusion" element={<ConclusionPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ConfigProvider theme={theme}>
      <BrowserRouter>
        <OceanDiaryShell>
          <AnimatedRoutes />
        </OceanDiaryShell>
      </BrowserRouter>
    </ConfigProvider>
  );
}
