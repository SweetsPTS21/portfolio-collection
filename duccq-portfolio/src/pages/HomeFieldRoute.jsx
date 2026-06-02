import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import ballNetImpact from "../assets/stadium-ocean-motion/ball-net-impact.svg";
import cornerFlagWave from "../assets/stadium-ocean-motion/corner-flag-wave.svg";
import footballTrail from "../assets/stadium-ocean-motion/football-trail.svg";
import goldenBootBurst from "../assets/stadium-ocean-motion/golden-boot-burst.svg";
import { portfolioData } from "../data/portfolioData.js";
import ToolChipGrid from "../features/content/ToolChipGrid.jsx";
import ProfileFieldCard from "../features/motion-cards/ProfileFieldCard.jsx";

const goalAssets = [ballNetImpact, goldenBootBurst, cornerFlagWave, footballTrail];

export default function HomeFieldRoute() {
  return (
    <div className="route-stack home-route">
      <section className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-kicker">HOME FIELD / DIGITAL STORAGE SPACE</p>
          <h1>Chào mừng bạn đến với không gian của mình!</h1>
          <p>{portfolioData.personal.interests}</p>
          <div className="hero-actions">
            <Link to="/projects" className="primary-cta">
              Xem 6 trận đấu <ArrowRight size={18} />
            </Link>
            <Link to="/recap" className="ghost-cta">
              Tổng kết
            </Link>
          </div>
        </motion.div>
        <ProfileFieldCard />
      </section>

      <section className="section-band">
        <div className="section-heading">
          <p className="section-kicker">GOAL LINE</p>
          <h2>Mục tiêu học tập và định hướng phát triển.</h2>
        </div>
        <div className="goal-grid">
          {portfolioData.goals.map((goal, index) => (
            <motion.article
              className="goal-card"
              key={goal}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <img
                className={`card-football-asset goal-card-asset goal-card-asset-${index + 1}`}
                src={goalAssets[index % goalAssets.length]}
                alt=""
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{goal}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-band tools-section">
        <div className="section-heading">
          <p className="section-kicker">
            <Zap size={15} /> TOOL KIT
          </p>
          <h2>Hệ sinh thái công cụ tốc độ cao.</h2>
        </div>
        <ToolChipGrid />
      </section>
    </div>
  );
}
