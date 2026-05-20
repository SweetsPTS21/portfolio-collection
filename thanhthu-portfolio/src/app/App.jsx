import { Route, Routes, useLocation } from 'react-router';
import StorybookShell from '../components/layout/StorybookShell.jsx';
import { routes } from './routes.js';
import StorybookHeroPage from '../pages/StorybookHeroPage.jsx';
import ChapterProjectsPage from '../pages/ChapterProjectsPage.jsx';
import RoyalInventorySkillsPage from '../pages/RoyalInventorySkillsPage.jsx';
import RoyalLetterContactPage from '../pages/RoyalLetterContactPage.jsx';
import { personalInfo } from '../data/portfolioData.js';

function HomePage() {
  return (
    <>
      <StorybookHeroPage />
      <main aria-label="Nguyễn Thanh Thư portfolio">
        <StorybookHeroPage.About />
        <RoyalInventorySkillsPage />
      </main>
    </>
  );
}

function ProjectsPage() {
  return (
    <main className="page-main" aria-label="Nguyễn Thanh Thư projects">
      <ChapterProjectsPage />
    </main>
  );
}

function ConclutionsPage() {
  return (
    <main className="page-main" aria-label="Nguyễn Thanh Thư conclutions">
      <RoyalLetterContactPage />
    </main>
  );
}

export default function App() {
  const routeIds = routes.map((route) => route.id).join(' ');
  const location = useLocation();

  return (
    <StorybookShell routeIds={routeIds}>
      <div className="page-transition" data-page={location.pathname} key={location.pathname}>
        <Routes location={location}>
          <Route element={<HomePage />} path="/" />
          <Route element={<ProjectsPage />} path="/projects" />
          <Route element={<ConclutionsPage />} path="/conclutions" />
          <Route element={<HomePage />} path="*" />
        </Routes>
      </div>
      <footer>{personalInfo.footer}</footer>
    </StorybookShell>
  );
}
