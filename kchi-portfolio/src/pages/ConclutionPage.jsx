import React from "react";
import { Scale, Cat, Coffee } from "lucide-react";
import ReflectionHero from "../components/conclusion/ReflectionHero";
import PageShell from "../components/layout/PageShell";
import CafePanel from "../components/ui/CafePanel";
import { conclusion } from "../data/portfolioData";

export default function ConclutionPage() {
    return (
        <PageShell
            eyebrow="Last sip reflection"
            title="Tổng kết hành trình"
        >
            <ReflectionHero
                summary={conclusion.summary}
                skills={conclusion.skills}
            />
            <section className="reflection-lists">
                <CafePanel title="Điểm tâm đắc" icon={<Coffee size={22} />}>
                    <ul>
                        {conclusion.highlights.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </CafePanel>
                <CafePanel title="Thách thức" icon={<Cat size={22} />}>
                    <ul>
                        {conclusion.challenges.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </CafePanel>
                <CafePanel title="Định hướng" icon={<Scale size={22} />}>
                    <ul>
                        {conclusion.direction.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </CafePanel>
            </section>
        </PageShell>
    );
}
