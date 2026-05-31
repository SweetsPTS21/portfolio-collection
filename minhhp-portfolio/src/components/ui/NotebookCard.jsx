import { motion } from "framer-motion";

export default function NotebookCard({ children, className = "", delay = 0 }) {
  return (
    <motion.article
      className={`notebook-card ${className}`}
      initial={{ opacity: 0, y: 24, rotate: -1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -8, rotate: 0.6, boxShadow: "0 28px 70px rgba(45, 139, 216, 0.22)" }}
      transition={{ duration: 0.48, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.article>
  );
}
