import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Compass, HeartHandshake, ShieldCheck } from "lucide-react";
import { profile, reflections } from "../data/portfolioData.js";
import PostcardPanel from "../components/ui/PostcardPanel.jsx";
import StampBadge from "../components/ui/StampBadge.jsx";
import flamingo from "../assets/tropical-postcard/flamingo-set.svg";
import cocktail from "../assets/tropical-postcard/coconut-cocktail-icons.svg";
import coconutCocktail from "../assets/tropical-postcard/generated/coconut-cocktail-cutout.png";
import flamingoFloat from "../assets/tropical-postcard/generated/flamingo-float-cutout.png";

const passportItems = [
    { icon: Compass, label: "Mục tiêu", text: "Hệ thống hóa kỹ năng số bằng tư duy tối giản, nhẹ nhàng và học thuật." },
    { icon: ShieldCheck, label: "Liêm chính", text: "Đối chiếu cẩn thận nguồn pháp lý gốc trước khi dùng kết quả từ AI." },
    { icon: HeartHandshake, label: "Hợp tác", text: "Lắng nghe, tôn trọng nhịp làm việc và chia sẻ tài liệu rõ ràng." },
];

export default function PassportAboutPage() {
    return (
        <div className="passport-page">
            <header className="page-heading passport-heading">
                <StampBadge tone="gold">Passport Notes</StampBadge>
                <h1>Tổng kết hành trình</h1>
                <p>{profile.direction}</p>
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

                <div className="passport-notes">
                    {passportItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.article
                                key={item.label}
                                className="passport-note"
                                initial={{ opacity: 0, x: 24 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <Icon size={22} />
                                <h2>{item.label}</h2>
                                <p>{item.text}</p>
                            </motion.article>
                        );
                    })}
                </div>
            </section>

            <section className="reflection-strip" aria-label="Reflections">
                <div className="contact-art-stack">
                    <img src={cocktail} alt="" />
                    <img src={coconutCocktail} alt="" />
                </div>
                <div>
                    <h2>Những điều giữ lại</h2>
                    {reflections.map((reflection) => (
                        <p key={reflection}><CheckCircle2 size={18} /> {reflection}</p>
                    ))}
                </div>
            </section>
        </div>
    );
}
