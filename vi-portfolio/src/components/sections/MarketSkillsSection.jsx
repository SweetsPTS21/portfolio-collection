import HangingTag from '../floral/HangingTag.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import {
  capabilities,
  improvements,
  principles,
  tools,
} from '../../data/portfolioData.js';

function TagGroup({ title, items, tone }) {
  return (
    <div className="tag-group tag-group--tags">
      <h3>{title}</h3>
      <div className="tag-grid">
        {items.map((item) => (
          <HangingTag
            key={item.title}
            title={item.title}
            text={item.text}
            tone={tone}
          />
        ))}
      </div>
    </div>
  );
}

function SeedPacketGroup({ title, items }) {
  return (
    <div className="tag-group tag-group--packets">
      <h3>{title}</h3>
      <div className="seed-packet-grid">
        {items.map((item, index) => (
          <article className="seed-packet" key={item.title}>
            <span className="packet-number">{String(index + 1).padStart(2, '0')}</span>
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function MarketNoteGroup({ title, items }) {
  return (
    <div className="tag-group tag-group--notes">
      <h3>{title}</h3>
      <div className="market-note-grid">
        {items.map((item) => (
          <article className="market-note" key={item.title}>
            <span className="note-tape" aria-hidden="true" />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function ToolChipGroup({ title, items }) {
  return (
    <div className="tag-group tag-group--tools">
      <h3>{title}</h3>
      <div className="tool-chip-rack">
        {items.map((item) => (
          <article className="tool-chip" key={item.title}>
            <span className="tool-chip__dot" aria-hidden="true" />
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function MarketSkillsSection() {
  return (
    <section id="skills" className="market-section market-skills">
      <ScrollReveal className="section-heading">
        <span className="eyebrow">Hanging tags</span>
        <h2 className="section-title">{capabilities.title}</h2>
      </ScrollReveal>
      <div className="tag-market-board">
        <span className="twine-line board-line" aria-hidden="true" />
        <TagGroup title={capabilities.title} items={capabilities.items} tone="rose" />
        <SeedPacketGroup title={improvements.title} items={improvements.items} />
        <MarketNoteGroup title={principles.title} items={principles.items} />
        <ToolChipGroup title={tools.title} items={tools.items} />
      </div>
    </section>
  );
}
