import React from 'react';
import { Cat, BookOpen, Sparkles } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ConclutionPage from '../pages/ConclutionPage';
import ProjectsPage from '../pages/ProjectsPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: Cat },
  { to: '/projects', label: 'Dự án', icon: BookOpen },
  { to: '/conclution', label: 'Kết luận', icon: Sparkles },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/conclution', element: <ConclutionPage /> },
];
