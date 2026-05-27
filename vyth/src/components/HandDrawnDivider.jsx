import { motion } from 'framer-motion';

export default function HandDrawnDivider() {
  // SVG drawing configuration triggers
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 0.75,
      transition: {
        pathLength: { type: "spring", duration: 2.2, bounce: 0 },
        opacity: { duration: 0.4 }
      }
    }
  };

  return (
    <div className="divider-wrapper my-12 w-full flex justify-center overflow-visible select-none">
      <svg width="100%" height="24" viewBox="0 0 1000 24" fill="none" className="overflow-visible w-full">
        {/* Procedural sketch line simulating quick double graphite strokes */}
        <motion.path
          d="M5 12 C 160 4, 340 20, 500 12 C 660 4, 840 20, 995 12"
          stroke="var(--pencil-stroke)"
          strokeWidth="1.8"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        />
        <motion.path
          d="M12 14 C 180 8, 320 18, 510 14 C 680 8, 820 18, 988 13"
          stroke="var(--pencil-light)"
          strokeWidth="0.8"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-70px" }}
        />
      </svg>
    </div>
  );
}
