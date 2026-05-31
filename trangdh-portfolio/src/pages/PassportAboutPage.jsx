import React from "react";
import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Compass, Flag, ShieldCheck } from "lucide-react";
import { conclusion, profile } from "../data/portfolioData.js";
import PostcardPanel from "../components/ui/PostcardPanel.jsx";
import StampBadge from "../components/ui/StampBadge.jsx";
import flamingo from "../assets/tropical-postcard/flamingo-set.svg";
import cocktail from "../assets/tropical-postcard/coconut-cocktail-icons.svg";
import coconutCocktail from "../assets/tropical-postcard/generated/coconut-cocktail-cutout.png";
import flamingoFloat from "../assets/tropical-postcard/generated/flamingo-float-cutout.png";

export default function PassportAboutPage() {
    const conclusionSections = [
        { icon: BookOpen, label: "Kỹ năng quan trọng", items: conclusion.learnedSkills },
        { icon: CheckCircle2, label: "Điểm tâm đắc", items: conclusion.highlights },
        { icon: ShieldCheck, label: "Thách thức", items: conclusion.challenges },
    ];

    return (
        <div className="passport-page">
            <header className="page-heading passport-heading">
                <StampBadge tone="gold">Conclusion Notes</StampBadge>
                <h1>Tổng kết hành trình</h1>
                <p>{conclusion.opening}</p>
            </header>

            <section className="passport-layout">
                <PostcardPanel className="passport-book" label="Passport">
                    <div className="passport-photo">
                        <img src="/avatar.jpg" alt="Đỗ Huyền Trang" />
                    </div>
                    <div className="passport-fields">
                        <span>Full name</span>
                        <strong>{profile.name}</strong>
                        <span>Major</span>
                        <strong>{profile.major}</strong>
                        <span>School</span>
                        <strong>{profile.school}</strong>
                    </div>
                    <img className="flamingo-art" src={flamingo} alt="" />
                    <img className="flamingo-float-cutout" src={flamingoFloat} alt="" />
                </PostcardPanel>

                <div className="passport-notes conclusion-notes">
                    {conclusionSections.map((section, index) => {
                        const Icon = section.icon;
                        return (
                            <motion.article
                                key={section.label}
                                className="passport-note conclusion-note"
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <Icon size={22} />
                                <h2>{section.label}</h2>
                                <div className="conclusion-list">
                                    {section.items.map((item) => (
                                        <p key={item}>{item}</p>
                                    ))}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            <section className="reflection-strip conclusion-strip" aria-label="Future direction">
                <div className="contact-art-stack">
                    <img src={cocktail} alt="" />
                    <img src={coconutCocktail} alt="" />
                </div>
                <div className="conclusion-copy">
                    <h2>Định hướng tương lai</h2>
                    <p><Flag size={18} /> {conclusion.future}</p>
                    <p><Compass size={18} /> {conclusion.thanks}</p>
                </div>
            </section>
        </div>
    );
}
