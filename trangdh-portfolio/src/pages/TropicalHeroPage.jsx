import React from "react";
import { motion } from "framer-motion";
import { BookOpen, BriefcaseBusiness, CheckCircle2, GraduationCap, PenLine } from "lucide-react";
import { profile, portfolioGoals, principles, toolGroups } from "../data/portfolioData.js";
import PostcardPanel from "../components/ui/PostcardPanel.jsx";
import StampBadge from "../components/ui/StampBadge.jsx";
import passportFrame from "../assets/tropical-postcard/passport-page-frame.svg";
import luggageTags from "../assets/tropical-postcard/luggage-tag-shapes.svg";
import heroTravelGirl from "../assets/tropical-postcard/generated/hero-travel-girl-cutout.png";
import tropicalSuitcase from "../assets/tropical-postcard/generated/tropical-suitcase-cutout.png";

const facts = [
    { icon: GraduationCap, label: "Ngành", value: profile.major },
    { icon: BriefcaseBusiness, label: "Định hướng", value: "Pháp chế doanh nghiệp" },
    { icon: PenLine, label: "Phong cách", value: "Tĩnh lặng, tối giản, học thuật" },
    { icon: BookOpen, label: "Mã SV", value: profile.studentId },
];

export default function TropicalHeroPage() {
    return (
        <div className="page-grid hero-page">
            <section className="hero-copy">
                <StampBadge>Destination: Law & Digital Skills</StampBadge>
                <h1>{profile.name}</h1>
                <p className="hero-lead">{profile.headline}</p>
                <div className="hero-actions" aria-label="Portfolio sections">
                    <a href="/postcards">Open postcards</a>
                    <a href="/passport">View passport</a>
                </div>
            </section>

            <PostcardPanel className="profile-postcard" label="Boarding Pass">
                <img className="hero-girl-cutout" src={heroTravelGirl} alt="Travel portrait illustration" />
                <div className="avatar-ring">
                    <img src="/avatar.jpg" alt="Đỗ Huyền Trang" />
                </div>
                <div className="profile-copy">
                    <h2>{profile.school}</h2>
                    <p>{profile.opening}</p>
                    <p>{profile.hobbies}</p>
                </div>
            </PostcardPanel>

            <section className="fact-grid" aria-label="Profile facts">
                {facts.map((fact, index) => {
                    const Icon = fact.icon;
                    return (
                        <motion.article
                            className="fact-card"
                            key={fact.label}
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.08 * index }}
                        >
                            <Icon size={22} />
                            <span>{fact.label}</span>
                            <strong>{fact.value}</strong>
                        </motion.article>
                    );
                })}
            </section>

            <PostcardPanel className="goals-panel" label="Learning Plan">
                <div className="goals-copy">
                    <h2>Mục tiêu học tập và định hướng phát triển bản thân</h2>
                    <div className="direction-list">
                        {profile.directionLines.map((line) => (
                            <p key={line}><CheckCircle2 size={17} /> {line}</p>
                        ))}
                    </div>
                    <h3>Mục tiêu của Portfolio</h3>
                    <div className="goal-list">
                        {portfolioGoals.map((goal) => (
                            <p key={goal}>{goal}</p>
                        ))}
                    </div>
                </div>
            </PostcardPanel>

            <PostcardPanel className="tools-panel" label="Travel Kit">
                <div className="panel-media">
                    <img className="passport-art" src={passportFrame} alt="" />
                </div>
                <div className="tools-copy">
                    <h2>Công cụ đã dùng</h2>
                    <div className="tool-group-list">
                        {toolGroups.map((group) => (
                            <article className="tool-group-card" key={group.task}>
                                <h3>{group.task}</h3>
                                <p>{group.description}</p>
                                <div className="tool-cloud">
                                    {group.tools.map((tool) => (
                                        <span key={tool}>{tool}</span>
                                    ))}
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </PostcardPanel>

            <PostcardPanel className="values-panel" label="Values">
                <div className="luggage-stack">
                    <img className="luggage-art" src={luggageTags} alt="" />
                    <img className="suitcase-cutout" src={tropicalSuitcase} alt="" />
                </div>
                <div className="values-copy">
                    <h2>Nguyên tắc thực hiện bài tập</h2>
                    <div className="value-list">
                        {principles.map((value) => (
                            <p key={value}>{value}</p>
                        ))}
                    </div>
                </div>
            </PostcardPanel>
        </div>
    );
}
