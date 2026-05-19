import { motion } from "framer-motion";
import { BrainCircuit, GraduationCap, Sparkles, Target } from "lucide-react";
import avatar from "../../../docs/avatar.png";
import circuitMap from "../../assets/cyberpunk-city/circuit-map.svg";
import neonSkyline from "../../assets/cyberpunk-city/neon-skyline.svg";
import { profile } from "../../data/portfolioData.js";
import NeonPanel from "../ui/NeonPanel.jsx";
import SignalBadge from "../ui/SignalBadge.jsx";

export default function AboutPage() {
  return (
    <motion.section
      className="page-grid about-page"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.26 }}
    >
      <section className="hero-terminal">
        <img className="hero-skyline" src={neonSkyline} alt="" aria-hidden="true" />
        <div>
          <SignalBadge>LAW-TECH PROFILE</SignalBadge>
          <h1 className="glitch-text" data-text={profile.name}>
            {profile.name}
          </h1>
          <p className="hero-subtitle">{profile.headline}</p>
          <p className="hero-copy">{profile.intro}</p>
        </div>
        <figure className="avatar-terminal">
          <img src={avatar} alt="Mẫn Văn Nghĩa" />
          <figcaption>{profile.role}</figcaption>
        </figure>
      </section>

      <div className="split-grid">
        <NeonPanel eyebrow="IDENTITY" title="Hồ sơ học thuật">
          <dl className="fact-grid">
            <div>
              <dt>Ngành</dt>
              <dd>{profile.major}</dd>
            </div>
            <div>
              <dt>Trường</dt>
              <dd>{profile.school}</dd>
            </div>
            <div>
              <dt>Phong cách</dt>
              <dd>{profile.style}</dd>
            </div>
          </dl>
        </NeonPanel>

        <NeonPanel eyebrow="MISSION" title="Định hướng hiện tại">
          <p>{profile.focus}</p>
          <p>
            Portfolio này hoạt động như một kho dữ liệu pháp lý số: tiếp nhận dữ liệu thô,
            kiểm tra logic thông tin, rồi ứng dụng công nghệ để trình bày có trách nhiệm.
          </p>
        </NeonPanel>
      </div>

      <div className="content-grid">
        <NeonPanel eyebrow="INTERESTS" title="Nguồn năng lượng">
          <ul className="icon-list">
            {profile.interests.map((item) => (
              <li key={item}>
                <Sparkles size={18} aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </NeonPanel>

        <NeonPanel eyebrow="TOOLS" title="Stack kỹ năng số">
          <div className="tool-matrix">
            {profile.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </NeonPanel>

        <NeonPanel eyebrow="LEGAL CORE" title="Luật học trong hệ sinh thái số">
          <div className="signal-row">
            <GraduationCap aria-hidden="true" />
            <span>Luật Doanh nghiệp</span>
          </div>
          <div className="signal-row">
            <BrainCircuit aria-hidden="true" />
            <span>AI tạo sinh</span>
          </div>
          <div className="signal-row">
            <Target aria-hidden="true" />
            <span>Quản trị dữ liệu lớn</span>
          </div>
          <img className="panel-circuit" src={circuitMap} alt="" aria-hidden="true" />
        </NeonPanel>
      </div>
    </motion.section>
  );
}
