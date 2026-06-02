import { motion } from "framer-motion";
import { Film, Music, Trophy } from "lucide-react";
import { portfolioData } from "../../data/portfolioData.js";
import pitchStrategyBoard from "../../assets/stadium-ocean-motion/pitch-strategy-board.svg";
import cornerFlagWave from "../../assets/stadium-ocean-motion/corner-flag-wave.svg";
import scoreboardUi from "../../assets/stadium-ocean-motion/scoreboard-ui.svg";

export default function ProfileFieldCard() {
  const { personal } = portfolioData;
  return (
    <motion.article className="profile-field-card" initial={{ opacity: 0, y: 35, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -1 }} transition={{ delay: 0.15, duration: 0.65 }}>
      <img className="card-football-asset profile-board-asset" src={pitchStrategyBoard} alt="" />
      <img className="card-football-asset profile-flag-asset" src={cornerFlagWave} alt="" />
      <img className="card-football-asset profile-scoreboard-asset" src={scoreboardUi} alt="" />
      <div className="profile-photo-wrap">
        <img src="/avatar.jpg" alt={personal.fullName} />
        <span className="jersey-badge">{personal.studentId}</span>
      </div>
      <div className="profile-copy">
        <p className="section-kicker">PLAYER PROFILE</p>
        <h2>{personal.fullName}</h2>
        <dl>
          <div><dt>Ngành</dt><dd>{personal.major}</dd></div>
          <div><dt>Trường</dt><dd>{personal.school}</dd></div>
        </dl>
        <p>{personal.style}</p>
        <div className="interest-row">
          <span><Trophy size={16} /> Bóng đá</span>
          <span><Film size={16} /> Phim ảnh</span>
          <span><Music size={16} /> Âm nhạc</span>
        </div>
      </div>
    </motion.article>
  );
}
