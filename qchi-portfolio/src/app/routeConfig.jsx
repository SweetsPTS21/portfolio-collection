import React from 'react';
import { ClipboardCheck, NotebookTabs, UserRound } from 'lucide-react';
import AboutPage from '../pages/AboutPage';
import ConclutionPage from '../pages/ConclutionPage';
import ProjectsPage from '../pages/ProjectsPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: UserRound },
  { to: '/projects', label: 'Dự án', icon: NotebookTabs },
  { to: '/conclution', label: 'Kết luận', icon: ClipboardCheck },
];

export const routes = [
  { path: '/about', element: <AboutPage /> },
  { path: '/projects', element: <ProjectsPage /> },
  { path: '/conclution', element: <ConclutionPage /> },
];
