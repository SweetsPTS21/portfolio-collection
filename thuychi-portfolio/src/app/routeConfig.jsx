import React from 'react';
import { Trees, Map, Leaf } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ConclusionPage from '../pages/ConclusionPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: Trees },
  { to: '/projects', label: 'Dự án', icon: Map },
  { to: '/conclusion', label: 'Kết luận', icon: Leaf },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/conclusion', element: <ConclusionPage /> },
];
