import React from 'react';
import { Sparkles, Layers, Heart } from 'lucide-react';
import DessertIslandHeroPage from '../pages/DessertIslandHeroPage';
import JellyProjectsPage from '../pages/JellyProjectsPage';
import WishFountainConclutionPage from '../pages/WishFountainConclutionPage';

export const navItems = [
  { to: '/about', label: 'Về tôi', icon: Sparkles },
  { to: '/projects', label: 'Dự án', icon: Layers },
  { to: '/conclution', label: 'Kết luận', icon: Heart },
];

export const routes = [
  { path: '/about', element: <DessertIslandHeroPage /> },
  { path: '/projects', element: <JellyProjectsPage /> },
  { path: '/conclution', element: <WishFountainConclutionPage /> },
];
