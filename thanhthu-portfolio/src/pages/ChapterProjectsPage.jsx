import ChapterCardGrid from '../features/chapter-projects/ChapterCardGrid.jsx';
import SectionShell from './SectionShell.jsx';

export default function ChapterProjectsPage() {
  return (
    <SectionShell
      eyebrow="Six chapters"
      id="projects"
      lead="Dưới đây là 6 mảnh ghép tri thức, được trình bày như các chương trong một cuốn truyện cổ tích số."
      title="Những chương học trên đường tới lâu đài"
    >
      <ChapterCardGrid />
    </SectionShell>
  );
}
