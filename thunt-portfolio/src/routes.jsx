import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AppShell from '@/components/layout/AppShell';
import OceanIntroPage from '@/pages/OceanIntroPage';
import DiaryProjectsPage from '@/pages/DiaryProjectsPage';
import ShoreReflectionPage from '@/pages/ShoreReflectionPage';

/**
 * Application routes — 3 routes as specified in README §3.
 *
 * / → OceanIntroPage — Ocean Intro (About Me)
 * /projects → DiaryProjectsPage — Diary Projects (6 Chapters)
 * /reflection → ShoreReflectionPage — Shore Reflection (Conclusion)
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <OceanIntroPage />,
      },
      {
        path: 'projects',
        element: <DiaryProjectsPage />,
      },
      {
        path: 'reflection',
        element: <ShoreReflectionPage />,
      },
    ],
  },
]);

export default router;
