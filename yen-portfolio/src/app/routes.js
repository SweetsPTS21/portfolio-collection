import React from "react";
import { Feather, Mail, Palette, ScrollText } from "lucide-react";
import InkPaletteSkillsPage from "../pages/InkPaletteSkillsPage";
import LetterMailboxContactPage from "../pages/LetterMailboxContactPage";
import LetterProjectsPage from "../pages/LetterProjectsPage";
import SakuraDeskHeroPage from "../pages/SakuraDeskHeroPage";

export const navItems = [
  { to: "/desk", label: "Bàn thư", icon: Feather },
  { to: "/letters", label: "Dự án", icon: ScrollText },
  { to: "/palette", label: "Bảng mực", icon: Palette },
  { to: "/mailbox", label: "Hộp thư", icon: Mail },
];

export const routes = [
  { path: "/desk", element: React.createElement(SakuraDeskHeroPage) },
  { path: "/letters", element: React.createElement(LetterProjectsPage) },
  { path: "/palette", element: React.createElement(InkPaletteSkillsPage) },
  { path: "/mailbox", element: React.createElement(LetterMailboxContactPage) },
];
