import React from 'react';
import { User, Coffee, BookOpen, Sparkles } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ConclusionPage from '../pages/ConclusionPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: User },
  { to: '/projects', label: 'Dự án', icon: BookOpen },
  { to: '/conclusion', label: 'Kết luận', icon: Sparkles },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/conclusion', element: <ConclusionPage /> },
  // Optional fallback for conclution spelling just in case
  { path: '/conclution', element: <ConclusionPage /> },
];
