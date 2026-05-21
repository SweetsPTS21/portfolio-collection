import React from "react";
import { motion } from "framer-motion";
import { revealUp } from "../../app/motionConfig";
import InkSplashAccent from "../../features/sakura-scene/InkSplashAccent";

export default function PaperPageShell({ eyebrow, title, lead, children }) {
  return (
    <section className="page-shell">
      <InkSplashAccent />
      <motion.p className="eyebrow" variants={revealUp} initial="hidden" animate="visible">
        {eyebrow}
      </motion.p>
      <motion.h1 variants={revealUp} initial="hidden" animate="visible" custom={1}>
        {title}
      </motion.h1>
      {lead && (
        <motion.p className="lead" variants={revealUp} initial="hidden" animate="visible" custom={2}>
          {lead}
        </motion.p>
      )}
      {children}
    </section>
  );
}
