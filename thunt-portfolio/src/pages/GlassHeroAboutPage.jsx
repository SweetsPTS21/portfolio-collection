import HeroGlassPanel from '../features/glass-hero/HeroGlassPanel';
import AboutGlassCards from '../features/glass-hero/AboutGlassCards';
import ToolBadgeRow from '../features/glass-hero/ToolBadgeRow';

export default function GlassHeroAboutPage() {
  return (
    <div className="relative min-h-screen">
      <HeroGlassPanel />
      <AboutGlassCards />
      <ToolBadgeRow />
    </div>
  );
}
