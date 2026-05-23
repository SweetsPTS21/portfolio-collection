import React from "react";
import { Scale, Coffee } from "lucide-react";
import AvatarCard from "../components/about/AvatarCard";
import StrengthStrip from "../components/about/StrengthStrip";
import PageShell from "../components/layout/PageShell";
import ChipCloud from "../components/ui/ChipCloud";
import InfoCard from "../components/ui/InfoCard";
import CafePanel from "../components/ui/CafePanel";
import { goals, profile, strengths, tools } from "../data/portfolioData";

export default function AboutPage() {
    return (
        <PageShell
            eyebrow="Kitty café profile"
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
                <CafePanel title="Mục tiêu học tập" icon={<Scale size={22} />}>
                    <ul>
                        {goals.map((goal) => (
                            <li key={goal}>{goal}</li>
                        ))}
                    </ul>
                </CafePanel>
                <CafePanel
                    title="Công cụ đã dùng"
                    icon={<Coffee size={22} />}
                >
                    <ChipCloud items={tools} />
                </CafePanel>
            </section>

            <StrengthStrip items={strengths} />
        </PageShell>
    );
}
