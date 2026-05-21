import React from 'react';
import { Fish, Mail, Shell, Waves } from 'lucide-react';
import BottleNoteContactPage from '../pages/BottleNoteContactPage';
import FishTrailProjectsPage from '../pages/FishTrailProjectsPage';
import OceanReefHeroPage from '../pages/OceanReefHeroPage';
import SeaGardenSkillsPage from '../pages/SeaGardenSkillsPage';

export const navItems = [
  { to: '/reef', label: 'Hồ sơ', icon: Waves },
  { to: '/fish-trail', label: 'Dự án', icon: Fish },
  { to: '/sea-garden', label: 'Kỹ năng', icon: Shell },
  { to: '/bottle-note', label: 'Tổng kết', icon: Mail },
];

export const routes = [
  { path: '/reef', element: React.createElement(OceanReefHeroPage) },
  { path: '/fish-trail', element: React.createElement(FishTrailProjectsPage) },
  { path: '/sea-garden', element: React.createElement(SeaGardenSkillsPage) },
  { path: '/bottle-note', element: React.createElement(BottleNoteContactPage) },
];
