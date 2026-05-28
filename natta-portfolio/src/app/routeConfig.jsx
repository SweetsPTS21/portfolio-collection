import GreenhouseHeroPage from '../pages/GreenhouseHeroPage';
import StrawberryBasketsPage from '../pages/StrawberryBasketsPage';
import JamFactoryPage from '../pages/JamFactoryPage';

export const routes = [
  { path: '/', element: <GreenhouseHeroPage />, label: 'Trang chủ' },
  { path: '/projects', element: <StrawberryBasketsPage />, label: 'Bài tập' },
  { path: '/conclusion', element: <JamFactoryPage />, label: 'Kết luận' },
];
