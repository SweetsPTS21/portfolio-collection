import React from 'react';
import { Shell, Sparkles, Waves } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ConclusionPage from '../pages/ConclusionPage';
import ProjectsPage from '../pages/ProjectsPage';

export const navItems = [
  { to: '/about', label: 'Shore', icon: Waves },
  { to: '/projects', label: 'Activities', icon: Shell },
  { to: '/conclusion', label: 'Beach mail', icon: Sparkles },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/conclusion', element: <ConclusionPage /> },
];
