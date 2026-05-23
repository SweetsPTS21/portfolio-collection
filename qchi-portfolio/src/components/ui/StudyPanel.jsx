import React from "react";
import { motion } from "framer-motion";
import { noteReveal } from "../../app/motionConfig";

export default function StudyPanel({
    title,
    icon,
    children,
    meta = "Research sheet",
    accent = "blue",
}) {
    return (
        <motion.article
            className={`study-panel ${accent}`}
            variants={noteReveal}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
        >
            <span className="paper-fastener fastener-left" aria-hidden="true" />
            <span className="paper-fastener fastener-right" aria-hidden="true" />
            <span className="panel-tape" aria-hidden="true" />
            <span className="panel-fold" aria-hidden="true" />
            <div className="panel-title">
                <span className="panel-icon">{icon}</span>
                <div>
                    <span className="panel-meta">{meta}</span>
                    <h2>{title}</h2>
                </div>
            </div>
            <div className="panel-body">{children}</div>
        </motion.article>
    );
}
