import { motion } from "framer-motion";
import rainWindowBlue from "../../assets/blue-rain-notebook/rain-window-blue.svg";
import notebookSpreadFrame from "../../assets/blue-rain-notebook/notebook-spread-frame.svg";
import bluePenSet from "../../assets/blue-rain-notebook/blue-pen-set.svg";
import paperFloatParticles from "../../assets/blue-rain-notebook/paper-float-particles.svg";
import indexTabsLabels from "../../assets/blue-rain-notebook/index-tabs-labels.svg";

const rainDrops = Array.from({ length: 34 }, (_, index) => ({
  left: `${(index * 19) % 100}%`,
  delay: `${(index % 12) * -0.42}s`,
  duration: `${2.8 + (index % 7) * 0.34}s`,
  height: `${70 + (index % 5) * 30}px`,
}));

export default function RainNotebookBackground() {
  return (
    <div className="rain-notebook-stage" aria-hidden="true">
      <motion.img
        className="rain-window-blue rain-breathe"
        src={rainWindowBlue}
        alt=""
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <img className="notebook-spread-frame page-turn" src={notebookSpreadFrame} alt="" />
      <img className="blue-pen-set ink-glow" src={bluePenSet} alt="" />
      <img className="paper-float-particles paper-float" src={paperFloatParticles} alt="" />
      <img className="index-tabs-labels sparkle-twinkle" src={indexTabsLabels} alt="" />
      <div className="rain-layer">
        {rainDrops.map((drop, index) => (
          <i
            className="rain-slide"
            key={index}
            style={{ left: drop.left, animationDelay: drop.delay, animationDuration: drop.duration, height: drop.height }}
          />
        ))}
      </div>
      <div className="glass-sparkles">
        {Array.from({ length: 22 }, (_, index) => (
          <b key={index} style={{ left: `${(index * 23) % 100}%`, top: `${12 + ((index * 17) % 72)}%` }} />
        ))}
      </div>
    </div>
  );
}
