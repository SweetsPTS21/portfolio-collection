import PageTransition from '../components/ui/PageTransition';
import PearlDropAnimation from '../features/pearl-reflection/PearlDropAnimation';
import PearlValueGrid from '../features/pearl-reflection/PearlValueGrid';
import ShellInsightCard from '../features/pearl-reflection/ShellInsightCard';

export default function PearlReflectionPage() {
  return (
    <PageTransition>
      <div className="pb-24 pt-8">
        <PearlDropAnimation />
        <PearlValueGrid />
        <ShellInsightCard />
      </div>
    </PageTransition>
  );
}
