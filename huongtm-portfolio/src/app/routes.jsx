import React from "react";
import { Navigate } from "react-router-dom";
import { AppShell } from "../components/layout/AppShell";
import { AboutPage } from "../pages/AboutPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ConclusionPage } from "../pages/ConclusionPage";

export const routes = [
  {
    path: "/",
    element: <AppShell />,
    children: [
      { index: true, element: <Navigate to="/about" replace /> },
      { path: "about", element: <AboutPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "conclusion", element: <ConclusionPage /> },
      { path: "*", element: <Navigate to="/about" replace /> },
    ],
  },
];
