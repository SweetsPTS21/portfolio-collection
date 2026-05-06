import {
    Archive,
    BookOpen,
    ClipboardList,
    Compass,
    GraduationCap,
    Sparkles,
    Target,
} from "lucide-react";
import { about, profile } from "../../data/portfolioData.js";

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
                            <h3 className="study-section-heading">
                                Mục tiêu của portfolio
                            </h3>
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
                    Định hướng phát triển
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

            <section>
                <h3 className="study-section-heading">
                    <BookOpen className="text-[var(--lamp-green)]" size={24} />
                    Kỹ năng đang rèn luyện
                </h3>
                <div className="study-note-grid">
                    {about.trainingSkills.map((skill, index) => (
                        <article
                            key={skill.title}
                            className={`study-card span-4 ${["book", "pin", "note"][index]}`}
                        >
                            <div className="study-card-body">
                                <h4 className="study-card-title">
                                    <ClipboardList size={18} />
                                    {skill.title}
                                </h4>
                                <p className="study-card-text">{skill.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="study-section-heading">
                    <ClipboardList
                        className="text-[var(--lamp-green)]"
                        size={24}
                    />
                    Nguyên tắc thực hiện bài tập
                </h3>
                <div className="study-note-grid">
                    {about.principles.map((principle) => (
                        <article
                            key={principle.title}
                            className="study-card span-4 study-folder"
                        >
                            <div className="study-card-body">
                                <h4 className="study-card-title">
                                    <Sparkles size={18} />
                                    {principle.title}
                                </h4>
                                <p className="study-card-text">
                                    {principle.text}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="study-section-heading">
                    <Archive className="text-[var(--lamp-green)]" size={24} />
                    Năng lực nổi bật
                </h3>
                <div className="study-note-grid">
                    {about.strengths.map((item) => (
                        <article
                            key={item.title}
                            className="study-card span-6 book"
                        >
                            <div className="study-card-body">
                                <h4 className="study-card-title">
                                    <Archive size={18} />
                                    {item.title}
                                </h4>
                                <p className="study-card-text">{item.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section>
                <h3 className="study-section-heading">
                    <Sparkles className="text-[var(--lamp-green)]" size={24} />
                    Công cụ và nền tảng đã sử dụng
                </h3>
                <div className="study-note-grid">
                    {about.tools.map((tool) => (
                        <article
                            key={tool.category}
                            className="study-card span-4 note"
                        >
                            <div className="study-card-body">
                                <h4 className="study-card-title">
                                    <BookOpen size={18} />
                                    {tool.category}
                                </h4>
                                <p className="study-card-text">{tool.items}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
