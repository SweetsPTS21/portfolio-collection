import { conclusion } from "../../data/portfolioData.js";
import SectionShell from "../ui/SectionShell.jsx";

function MiniList({ title, items }) {
  return (
    <article className="mini-list">
      <h3>{title}</h3>
      {items.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </article>
  );
}

export default function ConclusionSection() {
  return (
    <SectionShell
      id="reflection"
      issue="04"
      eyebrow="Reflection"
      title="Lời kết và định hướng"
      lead={conclusion.lead}
    >
      <div className="reflection-grid">
        <article className="reflection-lead">
          <p>{conclusion.value}</p>
        </article>
        <div className="change-list">
          {conclusion.changes.map((change, index) => (
            <article key={change.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{change.title}</h3>
              <p>{change.text}</p>
            </article>
          ))}
        </div>
      </div>
      <div className="mini-list-grid">
        <MiniList title="Những điều tâm đắc nhất" items={conclusion.proud} />
        <MiniList title="Khó khăn trong quá trình thực hiện" items={conclusion.difficulties} />
        <MiniList title="Định hướng phát triển trong tương lai" items={conclusion.future} />
      </div>
      <blockquote className="closing-quote">{conclusion.closing}</blockquote>
    </SectionShell>
  );
}
