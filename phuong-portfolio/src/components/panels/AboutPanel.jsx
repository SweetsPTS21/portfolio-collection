import {
    Archive,
    BookOpen,
    Bot,
    ClipboardList,
    Compass,
    FolderOpen,
    GraduationCap,
    Palette,
    Sparkles,
    Target,
    Users,
} from "lucide-react";
import { createElement } from "react";
import { about, profile } from "../../data/portfolioData.js";
import StudyNoteSection from "../ui/StudyNoteSection.jsx";

const toolIcons = [FolderOpen, GraduationCap, Bot, Palette, Users];

function ToolIconSection() {
    return (
        <section>
            <h3 className="study-section-heading">
                <Sparkles className="text-[var(--lamp-green)]" size={24} />
                Công cụ
            </h3>
            <div className="tool-icon-sheet">
                {about.tools.map((tool, index) => {
                    const ToolIcon = toolIcons[index] || BookOpen;

                    return (
                        <div className="tool-icon-note" key={tool.category}>
                            {createElement(ToolIcon, { size: 26 })}
                            <span>{tool.category}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default function AboutPanel() {
    return (
        <div className="space-y-6">
            <section className="study-book">
                <div className="study-book-page">
                    <p className="panel-kicker">Notebook profile</p>
                    <h3 className="study-book-title">{profile.name}</h3>
                    <p className="mt-5 text-lg leading-8 text-[var(--muted)]">
                        {about.intro}
                    </p>

                    <div className="study-profile-strip">
                        <div className="study-profile-item">
                            <span className="study-profile-label">Ngành</span>
                            <strong>{profile.major}</strong>
                        </div>
                        <div className="study-profile-item">
                            <span className="study-profile-label">Trường</span>
                            <span>{profile.university}</span>
                        </div>
                        <div className="study-profile-item">
                            <span className="study-profile-label">
                                Sở thích
                            </span>
                            <span>{profile.interests.join(", ")}</span>
                        </div>
                    </div>
                </div>

                <div className="study-book-page">
                    <div className="flex items-start gap-4">
                        <div className="rounded-full bg-[var(--sticky-green)] p-3 text-[var(--lamp-green)]">
                            <Compass size={28} />
                        </div>
                        <div>
                            <p className="panel-kicker">Study direction</p>
                            <h3 className="study-section-heading">Mục tiêu</h3>
                            <p className="m-0 text-lg leading-8 text-[var(--muted)]">
                                {about.portfolioGoal}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <h3 className="study-section-heading">
                    <GraduationCap
                        className="text-[var(--lamp-green)]"
                        size={24}
                    />
                    Định hướng
                </h3>
                <div className="study-note-grid">
                    {about.developmentGoals.map((goal, index) => (
                        <article
                            key={goal.title}
                            className={`study-card span-6 ${index === 0 ? "note" : "book"}`}
                        >
                            <div className="study-card-body">
                                <h4 className="study-card-title">
                                    <Target size={18} />
                                    {goal.title}
                                </h4>
                                <p className="study-card-text">{goal.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <StudyNoteSection
                heading="Kỹ năng"
                HeadingIcon={BookOpen}
                ItemIcon={ClipboardList}
                items={about.trainingSkills}
                getTitle={(item) => item.title}
                getText={(item) => item.text}
            />

            <StudyNoteSection
                heading="Nguyên tắc"
                HeadingIcon={ClipboardList}
                ItemIcon={Sparkles}
                items={about.principles}
                getTitle={(item) => item.title}
                getText={(item) => item.text}
            />

            <StudyNoteSection
                heading="Năng lực"
                HeadingIcon={Archive}
                ItemIcon={Archive}
                items={about.strengths}
                getTitle={(item) => item.title}
                getText={(item) => item.text}
                columns="two"
            />

            <ToolIconSection />
        </div>
    );
}
