import AuroraGradient from '../../features/aurora-background/AuroraGradient';
import BokehOrbsLayer from '../../features/aurora-background/BokehOrbsLayer';
import SakuraPetalRain from '../../features/aurora-background/SakuraPetalRain';
import CrystalRefractionRays from '../../features/aurora-background/CrystalRefractionRays';
import ParallaxContainer from '../../features/aurora-background/ParallaxContainer';
import LargeAssetsLayer from '../../features/large-assets/LargeAssetsLayer';

export default function GlassShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Layer 1: Background color/gradient — z-0 */}
      <AuroraGradient />

      {/* Layer 2: Background effects with parallax — z-[1-2] */}
      <ParallaxContainer speed={0.15} className="fixed inset-0 z-[1]">
        <BokehOrbsLayer />
      </ParallaxContainer>

      <ParallaxContainer speed={0.25} className="fixed inset-0 z-[2]">
        <SakuraPetalRain />
      </ParallaxContainer>

      <CrystalRefractionRays />

      {/* Layer 3: Large decorative assets with parallax — z-[5] */}
      <ParallaxContainer speed={0.1} className="fixed inset-0 z-[5]">
        <LargeAssetsLayer />
      </ParallaxContainer>

      {/* Layer 4: UI Content — z-10 */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
