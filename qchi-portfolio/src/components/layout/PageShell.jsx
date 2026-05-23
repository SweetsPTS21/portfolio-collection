import React from "react";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../../app/motionConfig";

export default function PageShell({ eyebrow, title, children }) {
    return (
        <motion.main
            className="page-shell"
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={pageTransition}
        >
            <span className="page-binding" aria-hidden="true" />
            <p className="eyebrow">{eyebrow}</p>
            <h1>{title}</h1>
            {children}
        </motion.main>
    );
}
