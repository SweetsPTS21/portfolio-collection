import React from 'react';
import { Sparkles, Music, Heart } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ProjectDetailPage from '../pages/ProjectDetailPage';
import ConclusionPage from '../pages/ConclusionPage';

export const navItems = [
  { to: '/about', label: 'Khánh Ly', icon: Sparkles },
  { to: '/projects', label: 'Vở kịch Dự án', icon: Music },
  { to: '/conclusion', label: 'Màn kết', icon: Heart },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/projects/:chapter', element: <ProjectDetailPage /> },
  { path: '/conclusion', element: <ConclusionPage /> },
];
