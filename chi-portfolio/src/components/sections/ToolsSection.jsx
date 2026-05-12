import { method, toolGroups } from '../../data/portfolioData.js';
import SectionShell from '../ui/SectionShell.jsx';

export default function ToolsSection() {
  return (
    <SectionShell
      id="tools"
      issue="03"
      eyebrow="Working Method"
      title="Công cụ"
      lead={method.text}
    >
      <div className="method-card">
        <span>{method.title}</span>
        <p>{method.aiUse}</p>
      </div>
      <div className="tool-grid">
        {toolGroups.map((group) => (
          <article className="tool-card" key={group.title}>
            <p>{group.title}</p>
            <span>{group.text}</span>
            <div>
              {group.items.map((item) => (
                <span key={item} className="tool-tag">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
