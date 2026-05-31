import ChapterTalismanCard from '../components/cards/ChapterTalismanCard.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { chapters, projectFiles } from '../data/portfolioData.js';

export default function ProjectsPage() {
  return (
    <>
      <section className="route-hero compact">
        <SectionTitle eyebrow="Projects" title="Sáu chương kỹ năng số">
          Các bài tập được ghi chép ngắn gọn, súc tích và bám sát đúng yêu cầu môn học.
        </SectionTitle>
        <img src="/assets/mascots/dragon-corner.png" alt="" aria-hidden="true" />
      </section>
      <section className="chapter-grid" aria-label="Danh sách bài tập">
        {chapters.map((chapter, index) => (
          <ChapterTalismanCard key={chapter.id} chapter={chapter} index={index} pdfFile={projectFiles[index]} />
        ))}
      </section>
    </>
  );
}
