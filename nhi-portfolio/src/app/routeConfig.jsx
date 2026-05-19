import React from 'react';
import { Flower2, BookOpen, Heart } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ConclusionPage from '../pages/ConclusionPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: Flower2 },
  { to: '/projects', label: 'Dự án', icon: BookOpen },
  { to: '/conclusion', label: 'Tổng kết', icon: Heart },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/conclusion', element: <ConclusionPage /> },
];
