import PageTransition from '../components/ui/PageTransition';
import CoralHero from '../features/coral-hero/CoralHero';
import PearlAboutCard from '../features/coral-hero/PearlAboutCard';
import StrengthCluster from '../features/anemone-skills/StrengthCluster';
import ToolsetCluster from '../features/anemone-skills/ToolsetCluster';

export default function CoralReefHeroPage() {
  return (
    <PageTransition>
      <div className="pb-24">
        <CoralHero />
        <PearlAboutCard />
        <StrengthCluster />
        <ToolsetCluster />
      </div>
    </PageTransition>
  );
}
