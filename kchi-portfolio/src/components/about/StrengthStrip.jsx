import React from "react";
import { motion } from "framer-motion";

export default function StrengthStrip({ items }) {
    return (
        <section className="menu-strip">
            {items.map((item, index) => (
                <motion.article
                    className="mini-menu"
                    key={item}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                >
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                </motion.article>
            ))}
        </section>
    );
}
