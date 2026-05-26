import React from "react";
import { User, BookOpen, GraduationCap } from "lucide-react";
import AboutPage from "../pages/AboutPage";
import ProjectsPage from "../pages/ProjectsPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";
import ConclusionPage from "../pages/ConclusionPage";

export const navItems = [
  { to: "/about", label: "Ngọc Khánh", icon: User },
  { to: "/projects", label: "Sách Dự Án", icon: BookOpen },
  { to: "/conclusion", label: "Màn Kết", icon: GraduationCap },
];

export const routes = [
  { path: "/about", element: <AboutPage /> },
  { path: "/projects", element: <ProjectsPage /> },
  { path: "/projects/:chapter", element: <ProjectDetailPage /> },
  { path: "/conclusion", element: <ConclusionPage /> },
];
