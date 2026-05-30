import { lazy } from 'react';

const GlassHeroAboutPage = lazy(() => import('../pages/GlassHeroAboutPage'));
const CrystalProjectsPage = lazy(() => import('../pages/CrystalProjectsPage'));
const DreamConclusionPage = lazy(() => import('../pages/DreamConclusionPage'));

export const routes = [
  { path: '/', element: GlassHeroAboutPage, label: 'Giới thiệu', icon: 'Home' },
  { path: '/projects', element: CrystalProjectsPage, label: 'Dự án', icon: 'FolderOpen' },
  { path: '/summary', element: DreamConclusionPage, label: 'Tổng kết', icon: 'Sparkles' },
];
