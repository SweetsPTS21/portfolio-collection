import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail, ShieldAlert, Target, Waves } from "lucide-react";
import { conclusion } from "../data/portfolioData.js";
import sailingBoat from "../assets/sunlit-ocean-life/sailing-boat.svg";

export default function ShellMailPage() {
  return (
    <div className="shell-mail-page">
      <header className="page-heading shell-mail-heading">
        <span className="ocean-badge"><Mail size={16} /> Shell Mail</span>
        <h1>Tổng kết hành trình</h1>
        <p>{conclusion.opening}</p>
      </header>

      <section className="shell-mail-layout">
        <motion.div className="shell-mail-core" initial={{ opacity: 0, scale: 0.88 }} animate={{ opacity: 1, scale: 1 }}>
          <img src={sailingBoat} alt="" />
        </motion.div>
        <div className="summary-stack">
          <motion.article className="summary-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <Target size={22} />
            <h2>Trải nghiệm và thay đổi</h2>
            <p>{conclusion.changes}</p>
          </motion.article>
          <motion.article className="summary-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.08 }}>
            <CheckCircle2 size={22} />
            <h2>Hành trang quý giá</h2>
            <p>{conclusion.values}</p>
          </motion.article>
          <motion.article className="summary-card" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.16 }}>
            <ShieldAlert size={22} />
            <h2>Định hướng</h2>
            <p>{conclusion.future}</p>
          </motion.article>
        </div>
      </section>

      <section className="reflection-grid">
        <article>
          <h2>Điểm tâm đắc</h2>
          {conclusion.highlights.map((item) => <p key={item}><CheckCircle2 size={17} /> {item}</p>)}
        </article>
        <article>
          <h2>Thách thức</h2>
          {conclusion.challenges.map((item) => <p key={item}><Waves size={17} /> {item}</p>)}
        </article>
      </section>

      <section className="thanks-panel">
        <h2>Lời nhắn gửi theo sóng</h2>
        <p>{conclusion.thanks}</p>
      </section>
    </div>
  );
}
