import React from "react";
import { Gavel, MoonStar, Sparkles } from "lucide-react";
import ReflectionHero from "../components/conclusion/ReflectionHero";
import PageShell from "../components/layout/PageShell";
import MagicPanel from "../components/ui/MagicPanel";
import { conclusion } from "../data/portfolioData";

export default function ConclutionPage() {
    return (
        <PageShell
            eyebrow="Compact mirror reflection"
            title="Tổng kết hành trình"
        >
            <ReflectionHero
                summary={conclusion.summary}
                skills={conclusion.skills}
            />
            <section className="reflection-lists">
                <MagicPanel title="Điểm tâm đắc" icon={<Sparkles size={22} />}>
                    <ul>
                        {conclusion.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </MagicPanel>
                <MagicPanel title="Thách thức" icon={<MoonStar size={22} />}>
                    <ul>
                        {conclusion.challenges.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </MagicPanel>
                <MagicPanel title="Định hướng" icon={<Gavel size={22} />}>
                    <ul>
                        {conclusion.direction.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </MagicPanel>
            </section>
        </PageShell>
    );
}
