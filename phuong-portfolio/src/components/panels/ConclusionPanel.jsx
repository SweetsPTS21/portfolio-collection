import { CheckCircle2, Flag, Lightbulb, NotebookPen, Target } from 'lucide-react';
import { conclusion } from '../../data/portfolioData.js';

export default function ConclusionPanel() {
  return (
    <div className="space-y-6">
      <section className="study-book">
        <div className="study-book-page">
          <p className="panel-kicker">Final note</p>
          <h3 className="study-book-title">Conclusion</h3>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{conclusion.opening}</p>
        </div>

        <div className="study-book-page">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-[var(--sticky-yellow)] p-3 text-[var(--ink)]">
              <NotebookPen size={28} />
            </div>
            <div>
              <p className="panel-kicker">Learning log</p>
              <h3 className="study-section-heading">Điểm nhìn tổng kết</h3>
              <p className="m-0 text-lg leading-8 text-[var(--muted)]">
                Phần tổng kết được trình bày như một trang ghi chú cuối kỳ: tách rõ kỹ năng đã
                đạt, trải nghiệm đáng nhớ và các việc cần tiếp tục cải thiện.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="study-section-heading">
          <Target className="text-[var(--lamp-green)]" size={24} />
          Những kiến thức và kỹ năng cốt lõi đã đạt được
        </h3>
        <div className="study-note-grid">
          {conclusion.coreSkills.map((item, index) => (
            <article
              key={item.title}
              className={`study-card span-4 ${['book', 'study-folder', 'note'][index]}`}
            >
              <div className="study-card-body">
                <h4 className="study-card-title">
                  <Target size={18} />
                  {item.title}
                </h4>
                <p className="study-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="study-section-heading">
          <Lightbulb className="text-[var(--lamp-green)]" size={24} />
          Điểm tâm đắc và thách thức lớn nhất
        </h3>
        <div className="study-note-grid">
          {conclusion.reflections.map((item) => (
            <article key={item.title} className="study-card span-6 pin">
              <div className="study-card-body">
                <h4 className="study-card-title">
                  <Lightbulb size={18} />
                  {item.title}
                </h4>
                <p className="study-card-text">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h3 className="study-section-heading">
          <Flag className="text-[var(--lamp-green)]" size={24} />
          Hướng phát triển trong tương lai
        </h3>
        <ul className="future-checklist m-0 list-none p-0">
          {conclusion.future.map((item, index) => (
            <li key={item}>
              <CheckCircle2 className="mt-1 text-[var(--lamp-green)]" size={20} />
              <span>
                <strong>{String(index + 1).padStart(2, '0')}.</strong> {item}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
