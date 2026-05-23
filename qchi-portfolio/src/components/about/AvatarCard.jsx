import React from "react";
import { motion } from "framer-motion";
import avatar from "../../assets/azure-study-desk/avatar.jpg";
import brassClipsPins from "../../assets/azure-study-desk/brass-clips-pins.svg";
import openNotebookLayered from "../../assets/azure-study-desk/open-notebook-layered.svg";
import paperStackSet from "../../assets/azure-study-desk/paper-stack-set.svg";
import penUnderlineAnimated from "../../assets/azure-study-desk/pen-underline-animated.svg";
import { noteReveal } from "../../app/motionConfig";

export default function AvatarCard() {
    return (
        <motion.div
            className="avatar-card"
            variants={noteReveal}
            initial="initial"
            animate="animate"
        >
            <img className="avatar-notebook" src={openNotebookLayered} alt="" />
            <img className="avatar-paper-stack" src={paperStackSet} alt="" />
            <figure className="profile-sheet">
                <img className="avatar" src={avatar} alt="Vũ Thị Quỳnh Chi" />
                <figcaption>Business law portfolio</figcaption>
            </figure>
            <img className="avatar-clip" src={brassClipsPins} alt="" />
            <img className="avatar-pen" src={penUnderlineAnimated} alt="" />
        </motion.div>
    );
}
