import { motion } from "framer-motion";
import { portfolioContent } from "./portfolioContent";
import { cardStagger, listStagger } from "../../app/motionConfig";
import { RailTag } from "../../components/ui/RailTag";
import { SparkleDivider } from "../../components/ui/SparkleDivider";

function splitConclusionSection(section) {
  if (section.items) return section.items;

  return section.body
    .split(/(?<=\.)\s+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ConclusionArrivalPanel() {
  const conclusion = portfolioContent.conclusion;

  return (
    <div className="arrival-panel">
      <section className="arrival-board glass-surface">
        <RailTag tone="gold">Trang Tổng kết (Conclusion)</RailTag>
        <p>{conclusion.intro}</p>
      </section>

      <motion.div className="arrival-section-grid" variants={listStagger} initial="hidden" animate="visible">
        {conclusion.sections.map((section, sectionIndex) => {
          const notes = splitConclusionSection(section);

          return (
            <motion.section className="arrival-section glass-surface" variants={cardStagger} key={section.title}>
              <div className="arrival-section-heading">
                <span className="flip-panel" aria-hidden="true" />
                <RailTag tone={sectionIndex % 2 === 0 ? "rose" : "mint"}>{`Ga ${String(sectionIndex + 1).padStart(2, "0")}`}</RailTag>
                <h2>{section.title}</h2>
              </div>
              <SparkleDivider />
              <div className="arrival-note-grid">
                {notes.map((note, noteIndex) => (
                  <article className="arrival-note-card" data-testid="arrival-note-card" key={note}>
                    <span>{`Note ${String(noteIndex + 1).padStart(2, "0")}`}</span>
                    <p>{note}</p>
                  </article>
                ))}
              </div>
            </motion.section>
          );
        })}
      </motion.div>
    </div>
  );
}
