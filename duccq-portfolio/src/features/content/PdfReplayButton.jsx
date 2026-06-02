import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function PdfReplayButton({ href, label = "Open replay" }) {
  return (
    <motion.a className="replay-button" href={href} target="_blank" rel="noreferrer" whileHover="hover">
      <span>{label}</span>
      <motion.span variants={{ hover: { x: 6 } }} className="replay-icon">
        <Play size={16} fill="currentColor" />
      </motion.span>
    </motion.a>
  );
}
