import { Brain, CheckCircle2, ShieldCheck } from 'lucide-react';
import ScrollPanel from '../components/cards/ScrollPanel.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { goals, personalInfo } from '../data/portfolioData.js';

const conclusionPoints = [
  {
    icon: CheckCircle2,
    title: 'Làm việc có hệ thống',
    text: goals.portfolio,
  },
  {
    icon: Brain,
    title: 'Dùng công nghệ đúng vai trò',
    text: 'Em dùng công nghệ để tự động hóa những khâu tìm kiếm tốn thời gian, giúp bản thân rảnh rang hơn để tập trung vào chuyên môn hoặc dành thời gian cho các sở thích cá nhân.',
  },
  {
    icon: ShieldCheck,
    title: 'Giữ liêm chính học thuật',
    text: 'Tham khảo công cụ thì được, nhưng cấm tuyệt đối việc đạo văn.',
  },
];

export default function ConclusionPage() {
  return (
    <>
      <section className="route-hero conclusion-hero">
        <div>
          <SectionTitle eyebrow="Conclusion" title="Kết luận">
            Tổng kết tinh thần thực hiện portfolio của {personalInfo.name}: ngắn gọn, thực tế, phản biện độc lập và dùng công nghệ có trách nhiệm.
          </SectionTitle>
        </div>
        <img src="/assets/mascots/phoenix-accent.png" alt="" aria-hidden="true" />
      </section>

      <section className="conclusion-grid" aria-label="Tổng kết portfolio">
        {conclusionPoints.map(({ icon: Icon, title, text }) => (
          <article className="conclusion-card" key={title}>
            <div className="chapter-seal">
              <Icon size={24} aria-hidden="true" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <ScrollPanel className="principle-panel">
        <SectionTitle eyebrow="Chốt lại" title="Không nghe AI một chiều" />
        <p>{goals.principle}</p>
      </ScrollPanel>
    </>
  );
}
