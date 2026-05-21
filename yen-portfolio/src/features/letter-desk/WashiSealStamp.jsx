import React from "react";
import { motion } from "framer-motion";

export default function WashiSealStamp({ label = "Sakura" }) {
  return (
    <motion.span className="washi-seal-stamp" initial={{ scale: 0, rotate: -12 }} animate={{ scale: 1, rotate: -4 }} transition={{ type: "spring", stiffness: 260, damping: 16 }}>
      {label}
    </motion.span>
  );
}
