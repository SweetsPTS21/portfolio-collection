import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { AnimatePresence } from 'framer-motion';
import { theme } from '../../app/theme';
import { initLenis, destroyLenis } from '../../app/lenisSetup';
import ReefNav from './ReefNav';
import UnderwaterBackground from '../../features/underwater-scene/UnderwaterBackground';
import LightRayOverlay from '../../features/underwater-scene/LightRayOverlay';
import BubbleRiseLayer from '../../features/underwater-scene/BubbleRiseLayer';
import CoralFrameGrow from '../../features/underwater-scene/CoralFrameGrow';
import FishSwimLayer from '../../features/underwater-scene/FishSwimLayer';
import SeaweedSway from '../../features/underwater-scene/SeaweedSway';

export default function ReefShell() {
  const location = useLocation();

  useEffect(() => {
    initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Background scene layers */}
        <UnderwaterBackground />
        <LightRayOverlay />
        <BubbleRiseLayer />
        <CoralFrameGrow />
        <FishSwimLayer />
        <SeaweedSway />

        {/* Main content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <main className="flex-1 px-4 md:px-8 lg:px-16 py-8">
            <AnimatePresence mode="wait">
              <Outlet key={location.pathname} />
            </AnimatePresence>
          </main>
          <ReefNav />
        </div>
      </div>
    </ConfigProvider>
  );
}
