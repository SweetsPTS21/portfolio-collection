import { Anchor, CheckCircle2 } from "lucide-react";
import PageTransition from "../ui/PageTransition.jsx";
import RopeCard from "../ui/RopeCard.jsx";
import lanternSetUrl from "../../assets/sunset-cruise-log/lantern-set.svg";
import starConstellationUrl from "../../assets/sunset-cruise-log/star-constellation.svg";
import { conclusion } from "../../data/portfolioData.js";

export default function ConclusionPage() {
  return (
    <PageTransition className="conclusion-page">
      <header className="page-heading">
        <p className="eyebrow">Final signal</p>
        <h2>{conclusion.title}</h2>
        <p>Tab tổng kết giữ đúng tinh thần tối ưu, độc lập và liêm chính học thuật.</p>
        <img className="asset-stars" src={starConstellationUrl} alt="" aria-hidden="true" />
      </header>

      <div className="conclusion-stack">
        {conclusion.items.map((item) => (
          <RopeCard title={item.title} eyebrow="Log close" key={item.title}>
            {item.text ? <p>{item.text}</p> : null}
            {item.points ? (
              <ul className="icon-list">
                {item.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={16} aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </RopeCard>
        ))}
      </div>

      <aside className="signal-card">
        <img className="signal-lantern" src={lanternSetUrl} alt="" aria-hidden="true" />
        <Anchor size={22} aria-hidden="true" />
        <span>Portfolio này là nỗ lực giữ mọi thứ tối ưu nhất có thể.</span>
      </aside>
    </PageTransition>
  );
}
