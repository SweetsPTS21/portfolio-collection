import { createBrowserRouter } from 'react-router-dom';
import ReefShell from '../components/layout/ReefShell';
import CoralReefHeroPage from '../pages/CoralReefHeroPage';
import AquariumProjectsPage from '../pages/AquariumProjectsPage';
import PearlReflectionPage from '../pages/PearlReflectionPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ReefShell />,
    children: [
      { index: true, element: <CoralReefHeroPage /> },
      { path: 'projects', element: <AquariumProjectsPage /> },
      { path: 'conclusion', element: <PearlReflectionPage /> },
    ],
  },
]);
