import { Check, Mountain, Sparkles } from "lucide-react";
import { conclusion } from "../../data/portfolioData.js";
import Island from "../world/Island.jsx";
import DreamyCard from "../ui/DreamyCard.jsx";

export default function ConclusionIsland() {
    return (
        <Island
            id="conclusion"
            title={conclusion.title}
            eyebrow={conclusion.reflectionTitle}
            variant="blue"
        >
            <p className="section-lead">{conclusion.intro}</p>
            <div className="subsection">
                <h3>{conclusion.coreTitle}</h3>
                <ul className="milestone-list">
                    {conclusion.coreSkills.map((item) => (
                        <li key={item}>
                            <Check size={18} strokeWidth={2.4} />
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="card-grid card-grid--two subsection">
                {conclusion.reflections.map((item, index) => (
                    <DreamyCard
                        icon={index === 0 ? Sparkles : Mountain}
                        title={item.title}
                        key={item.title}
                    >
                        <p>{item.text}</p>
                    </DreamyCard>
                ))}
            </div>
            <div className="future-panel">
                <h3>{conclusion.futureTitle}</h3>
                <p>{conclusion.futureIntro}</p>
                <ul>
                    {conclusion.futureItems.map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>
        </Island>
    );
}
