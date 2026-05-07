import {
    Bot,
    FileArchive,
    FileCheck2,
    FolderKanban,
    GraduationCap,
    Palette,
    SearchCheck,
    ShieldCheck,
    UsersRound,
    Waves,
} from "lucide-react";
import {
    coreSkills,
    practicingSkills,
    tools,
} from "../../data/portfolioData.js";
import PostcardFrame from "../summer/PostcardFrame.jsx";
import StickerBadge from "../ui/StickerBadge.jsx";

const skillIcons = [FolderKanban, SearchCheck, Bot];
const coreIcons = [FileArchive, GraduationCap, Bot, Waves];
const toolIcons = [FolderKanban, SearchCheck, Bot, Palette, UsersRound];
const tones = ["blue", "yellow", "green", "peach", "blue"];

export default function SkillsSection() {
    return (
        <PostcardFrame
            id="skills"
            title={coreSkills.title}
            eyebrow="Stickers & notes"
            accent="green"
        >
            <div className="sticker-row" aria-label={tools.title}>
                {tools.items.map((tool, index) => {
                    const Icon = toolIcons[index];
                    return (
                        <StickerBadge
                            icon={Icon}
                            key={tool.title}
                            label={tool.title}
                            tone={tones[index]}
                        />
                    );
                })}
            </div>

            <div className="summer-card-grid">
                {coreSkills.items.map((item, index) => {
                    const Icon = coreIcons[index];
                    return (
                        <article className="summer-note-card" key={item.title}>
                            <Icon size={22} strokeWidth={2.3} />
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </article>
                    );
                })}
            </div>

            <div className="subsection">
                <h3>{practicingSkills.title}</h3>
                <div className="summer-card-grid three">
                    {practicingSkills.items.map((item, index) => {
                        const Icon = skillIcons[index];
                        return (
                            <article
                                className="summer-note-card compact"
                                key={item.title}
                            >
                                <Icon size={21} strokeWidth={2.3} />
                                <h3>{item.title}</h3>
                                <p>{item.text}</p>
                            </article>
                        );
                    })}
                </div>
            </div>
        </PostcardFrame>
    );
}
