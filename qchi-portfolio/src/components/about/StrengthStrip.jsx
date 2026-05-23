import React from "react";
import { motion } from "framer-motion";
import indexTabSet from "../../assets/azure-study-desk/index-tab-set.svg";
import { noteReveal, tabSlide } from "../../app/motionConfig";

export default function StrengthStrip({ items }) {
    return (
        <section className="index-strip" aria-label="Điểm mạnh cá nhân">
            {items.map((item, index) => (
                <motion.article
                    className="index-card"
                    key={item}
                    variants={index % 2 === 0 ? noteReveal : tabSlide}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: index * 0.08 }}
                >
                    <img className="index-card-tabs" src={indexTabSet} alt="" />
                    <span className="index-card-number">0{index + 1}</span>
                    <p>{item}</p>
                </motion.article>
            ))}
        </section>
    );
}
