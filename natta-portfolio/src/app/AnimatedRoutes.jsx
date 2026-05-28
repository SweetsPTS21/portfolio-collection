import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { routes } from './routeConfig';
import PageTransition from '../components/layout/PageTransition';

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<PageTransition>{route.element}</PageTransition>}
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}
