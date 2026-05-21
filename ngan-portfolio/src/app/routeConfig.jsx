import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ConclusionPage from '../pages/ConclusionPage';

export const routes = [
  { path: '/', element: <AboutPage />, label: 'About' },
  { path: '/projects', element: <ProjectsPage />, label: 'Projects' },
  { path: '/conclusion', element: <ConclusionPage />, label: 'Conclusion' },
];
