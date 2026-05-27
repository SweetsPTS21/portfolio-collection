import { motion } from "framer-motion";
import { cardReveal } from "../../app/motionConfig";

export function PaperCard({ children, className = "", as = "article" }) {
  const Component = motion[as] || motion.article;

  return (
    <Component className={`paperCard ${className}`} variants={cardReveal} whileHover={{ y: -6 }}>
      {children}
    </Component>
  );
}
