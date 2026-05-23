import React from "react";
import { BookMarked, ClipboardList, Scale } from "lucide-react";
import ReflectionHero from "../components/conclusion/ReflectionHero";
import PageShell from "../components/layout/PageShell";
import StudyPanel from "../components/ui/StudyPanel";
import { conclusion } from "../data/portfolioData";

export default function ConclutionPage() {
    return (
        <PageShell
            eyebrow="Final study notes"
            title="Tổng kết hành trình"
        >
            <ReflectionHero
                summary={conclusion.summary}
                skills={conclusion.skills}
            />
            <section className="reflection-lists">
                <StudyPanel title="Điểm tâm đắc" icon={<BookMarked size={22} />}>
                    <ul>
                        {conclusion.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </StudyPanel>
                <StudyPanel title="Thách thức" icon={<ClipboardList size={22} />}>
                    <ul>
                        {conclusion.challenges.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </StudyPanel>
                <StudyPanel title="Định hướng" icon={<Scale size={22} />}>
                    <ul>
                        {conclusion.direction.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </StudyPanel>
            </section>
        </PageShell>
    );
}
