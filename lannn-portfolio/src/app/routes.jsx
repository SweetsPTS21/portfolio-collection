import { Navigate } from "react-router-dom";
import { BookOpen, FolderKanban, Sparkles } from "lucide-react";
import { AboutPage } from "../pages/AboutPage";
import { ProjectsPage } from "../pages/ProjectsPage";
import { ConclusionPage } from "../pages/ConclusionPage";

export const navItems = [
  { path: "/about", label: "About", icon: BookOpen },
  { path: "/projects", label: "Projects", icon: FolderKanban },
  { path: "/conclusion", label: "Conclusion", icon: Sparkles },
];

export const appRoutes = [
  { path: "/", element: <Navigate to="/about" replace /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/conclusion", element: <ConclusionPage /> },
];
