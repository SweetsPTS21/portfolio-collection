import React from 'react';
import { Heart, BookOpen, Sparkles } from 'lucide-react';
import StationeryAboutPage from '../pages/StationeryAboutPage';
import StickerProjectsPage from '../pages/StickerProjectsPage';
import NotebookConclutionPage from '../pages/NotebookConclutionPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: Heart },
  { to: '/projects', label: 'Bài tập', icon: BookOpen },
  { to: '/conclution', label: 'Kết luận', icon: Sparkles },
];

export const routes = [
  { path: '/about', element: <StationeryAboutPage /> },
  { path: '/projects', element: <StickerProjectsPage /> },
  { path: '/conclution', element: <NotebookConclutionPage /> },
];
