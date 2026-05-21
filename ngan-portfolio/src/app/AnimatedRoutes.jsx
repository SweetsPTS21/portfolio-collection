import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { routes } from './routeConfig';

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
};

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {routes.map((r) => (
          <Route
            key={r.path}
            path={r.path}
            element={
              <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
                {r.element}
              </motion.div>
            }
          />
        ))}
      </Routes>
    </AnimatePresence>
  );
}
