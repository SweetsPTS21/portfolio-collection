import { useLocation } from 'react-router-dom';
import CrystalRoseFloat from './CrystalRoseFloat';
import SakuraBranchCurve from './SakuraBranchCurve';
import CrescentMoonGlow from './CrescentMoonGlow';
import GlassButterflyDrift from './GlassButterflyDrift';
import CrystalDiamondSpin from './CrystalDiamondSpin';
import QuartzClusterGlow from './QuartzClusterGlow';
import RoseWreathFrame from './RoseWreathFrame';
import CrystalSwanFloat from './CrystalSwanFloat';
import RainbowArcShift from './RainbowArcShift';
import PinkCloudDrift from './PinkCloudDrift';

export default function LargeAssetsLayer() {
  const { pathname } = useLocation();

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      aria-hidden="true"
      style={{ willChange: 'transform', contain: 'layout' }}
    >
      {/* Hero assets */}
      {pathname === '/' && (
        <>
          <CrescentMoonGlow />
          <SakuraBranchCurve />
          <CrystalRoseFloat />
          <GlassButterflyDrift />
        </>
      )}

      {/* Projects assets */}
      {pathname === '/projects' && (
        <>
          <CrystalDiamondSpin />
          <QuartzClusterGlow />
          <RoseWreathFrame />
        </>
      )}

      {/* Summary assets */}
      {pathname === '/summary' && (
        <>
          <CrystalSwanFloat />
          <RainbowArcShift />
          <PinkCloudDrift />
        </>
      )}
    </div>
  );
}
