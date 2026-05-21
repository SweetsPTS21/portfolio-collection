import React from "react";
import { motion } from "framer-motion";

export default function SealButton({ href, children, download, variant = "primary" }) {
  return (
    <motion.a
      className={`seal-button ${variant}`}
      href={href}
      target={download ? undefined : "_blank"}
      rel={download ? undefined : "noreferrer"}
      download={download}
      whileHover={{ y: -2, rotate: -1 }}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.a>
  );
}
