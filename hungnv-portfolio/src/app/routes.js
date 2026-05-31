import React from "react";
import { Scale, FolderOpen, Award } from "lucide-react";
import CourtroomBriefHeroPage from "../pages/CourtroomBriefHeroPage.jsx";
import CaseFileProjectsPage from "../pages/CaseFileProjectsPage.jsx";
import SignSealConclusionPage from "../pages/SignSealConclusionPage.jsx";

export const navItems = [
  { to: "/about", label: "Hồ sơ cá nhân", icon: Scale },
  { to: "/projects", label: "Hồ sơ vụ việc", icon: FolderOpen },
  { to: "/conclution", label: "Tổng kết & Cam kết", icon: Award },
];

export const routes = [
  { path: "/about", element: React.createElement(CourtroomBriefHeroPage) },
  { path: "/projects", element: React.createElement(CaseFileProjectsPage) },
  { path: "/conclution", element: React.createElement(SignSealConclusionPage) },
];

