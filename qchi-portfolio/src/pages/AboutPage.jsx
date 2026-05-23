import React from "react";
import { LibraryBig, Scale } from "lucide-react";
import AvatarCard from "../components/about/AvatarCard";
import StrengthStrip from "../components/about/StrengthStrip";
import PageShell from "../components/layout/PageShell";
import ChipCloud from "../components/ui/ChipCloud";
import InfoCard from "../components/ui/InfoCard";
import StudyPanel from "../components/ui/StudyPanel";
import { goals, profile, strengths, tools } from "../data/portfolioData";

export default function AboutPage() {
    return (
        <PageShell
            eyebrow="Azure study desk"
            title="WELCOME TO MY PORTFOLIO"
        >
            <section className="hero-grid">
                <div className="hero-copy">
                    <p className="quote">"{profile.quote}"</p>
                    <p>{profile.intro}</p>
                    <div className="identity-grid">
                        <InfoCard label="Họ và tên" value={profile.name} />
                        <InfoCard label="Ngành" value={profile.major} />
                        <InfoCard label="Trường" value={profile.school} />
                        <InfoCard
                            label="Phong cách"
                            value={profile.style.join(" · ")}
                        />
                    </div>
                </div>
                <AvatarCard />
            </section>

            <section className="two-column">
                <StudyPanel
                    title="Mục tiêu học tập"
                    icon={<Scale size={22} />}
                    meta="Learning goals"
                    accent="blue"
                >
                    <ul>
                        {goals.map((goal) => (
                            <li key={goal}>{goal}</li>
                        ))}
                    </ul>
                </StudyPanel>
                <StudyPanel
                    title="Công cụ đã dùng"
                    icon={<LibraryBig size={22} />}
                    meta="Tool index"
                    accent="brown"
                >
                    <ChipCloud items={tools} />
                </StudyPanel>
            </section>

            <StrengthStrip items={strengths} />
        </PageShell>
    );
}
