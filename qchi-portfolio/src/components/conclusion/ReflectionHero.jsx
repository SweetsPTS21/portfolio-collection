import React from "react";
import { motion } from "framer-motion";
import brassClipsPins from "../../assets/azure-study-desk/brass-clips-pins.svg";
import clipboardFinalNotes from "../../assets/azure-study-desk/clipboard-final-notes.svg";
import deskToolIcons from "../../assets/azure-study-desk/desk-tool-icons.svg";
import penUnderlineAnimated from "../../assets/azure-study-desk/pen-underline-animated.svg";
import { noteReveal } from "../../app/motionConfig";
import ChipCloud from "../ui/ChipCloud";

export default function ReflectionHero({ summary, skills }) {
    return (
        <section className="reflection-grid reflection-pinboard">
            <motion.div
                className="mirror-card final-note"
                variants={noteReveal}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
            >
                <img className="final-note-pen" src={penUnderlineAnimated} alt="" />
                <img className="final-note-clip" src={brassClipsPins} alt="" />
                <span className="reflection-stamp">Final notes</span>
                <p>{summary}</p>
            </motion.div>
            <motion.div
                className="constellation-card final-clipboard"
                variants={noteReveal}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
            >
                <img className="clipboard-art" src={clipboardFinalNotes} alt="" />
                <img className="panel-tool-icons" src={deskToolIcons} alt="" />
                <ChipCloud items={skills} variant="dark" />
            </motion.div>
        </section>
    );
}
