import React from "react";
import { Gavel, Sparkles } from "lucide-react";
import AvatarCard from "../components/about/AvatarCard";
import StrengthStrip from "../components/about/StrengthStrip";
import PageShell from "../components/layout/PageShell";
import ChipCloud from "../components/ui/ChipCloud";
import InfoCard from "../components/ui/InfoCard";
import MagicPanel from "../components/ui/MagicPanel";
import { goals, profile, strengths, tools } from "../data/portfolioData";

export default function AboutPage() {
    return (
        <PageShell
            eyebrow="Transformation profile"
            title="WELCOME TO MY PORTFOLIO"
        >
            <section className="hero-grid">
                <div className="hero-copy">
                    <p className="quote">“{profile.quote}”</p>
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
                <MagicPanel title="Mục tiêu học tập" icon={<Gavel size={22} />}>
                    <ul>
                        {goals.map((goal) => (
                            <li key={goal}>{goal}</li>
                        ))}
                    </ul>
                </MagicPanel>
                <MagicPanel
                    title="Công cụ đã dùng"
                    icon={<Sparkles size={22} />}
                >
                    <ChipCloud items={tools} />
                </MagicPanel>
            </section>

            <StrengthStrip items={strengths} />
        </PageShell>
    );
}
