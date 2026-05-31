import SunCovePage from '../pages/SunCovePage.jsx';
import OceanLogsPage from '../pages/OceanLogsPage.jsx';
import ShellMailPage from '../pages/ShellMailPage.jsx';

export const routes = [
  {
    path: '/',
    label: 'Về mình',
    shortLabel: '01',
    element: SunCovePage,
  },
  {
    path: '/logs',
    label: 'Dự án',
    shortLabel: '02',
    element: OceanLogsPage,
  },
  {
    path: '/beacon',
    label: 'Tổng kết',
    shortLabel: '03',
    element: ShellMailPage,
  },
];
