// src/App.jsx
import React from "react";
import { RouterProvider, useRouter } from "./app/routes";
import { AppShell } from "./components/layout/AppShell";
import { PageTransition } from "./components/layout/PageTransition";
import { AboutPage } from "./pages/AboutPage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { ConclusionPage } from "./pages/ConclusionPage";
import { AnimatePresence } from "framer-motion";

function AppContent() {
  const { currentPath } = useRouter();

  return (
    <AppShell>
      {/* Route transitions backed by unique keys */}
      <AnimatePresence mode="wait">
        {currentPath === "/about" && (
          <PageTransition key="about">
            <AboutPage />
          </PageTransition>
        )}
        {currentPath === "/projects" && (
          <PageTransition key="projects">
            <ProjectsPage />
          </PageTransition>
        )}
        {currentPath === "/conclusion" && (
          <PageTransition key="conclusion">
            <ConclusionPage />
          </PageTransition>
        )}
      </AnimatePresence>
    </AppShell>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
