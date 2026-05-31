import RainNotebookHeroPage from '../pages/RainNotebookHeroPage.jsx';
import NotebookEntriesProjectsPage from '../pages/NotebookEntriesProjectsPage.jsx';
import SignatureContactPage from '../pages/SignatureContactPage.jsx';

export const routes = [
  {
    path: '/',
    label: 'Giới thiệu',
    shortLabel: '01',
    element: RainNotebookHeroPage,
  },
  {
    path: '/entries',
    label: 'Dự án',
    shortLabel: '02',
    element: NotebookEntriesProjectsPage,
  },
  {
    path: '/signature',
    label: 'Tổng kết',
    shortLabel: '03',
    element: SignatureContactPage,
  },
];
