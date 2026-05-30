import { useEffect, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { initLenis, destroyLenis } from './lenisSetup';
import GlassShell from '../components/layout/GlassShell';
import GlassNav from '../components/layout/GlassNav';
import PageTransition from '../components/ui/PageTransition';
import { routes } from './routes';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <PageTransition key={location.pathname}>
        <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="w-8 h-8 rounded-full border-2 border-pastel-pink border-t-transparent animate-spin" />
            </div>
          }
        >
          <Routes location={location} key={location.pathname}>
            {routes.map(({ path, element: Element }) => (
              <Route key={path} path={path} element={<Element />} />
            ))}
          </Routes>
        </Suspense>
      </PageTransition>
    </AnimatePresence>
  );
}

export default function App() {
  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <BrowserRouter>
      <GlassShell>
        <GlassNav />
        <main className="relative z-10 pt-20 pb-24 md:pb-8">
          <AnimatedRoutes />
        </main>
      </GlassShell>
    </BrowserRouter>
  );
}
