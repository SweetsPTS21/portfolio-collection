import { motion } from "framer-motion";
import { ExternalLink, FileCode2 } from "lucide-react";
import neonSigns from "../../assets/cyberpunk-city/neon-signs.svg";
import { projects } from "../../data/portfolioData.js";
import NeonPanel from "../ui/NeonPanel.jsx";
import SignalBadge from "../ui/SignalBadge.jsx";

export default function ProjectsPage() {
    return (
        <motion.section
            className="projects-page"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.26 }}
        >
            <header className="page-heading">
                <SignalBadge tone="pink">PROJECT DISTRICT</SignalBadge>
                <h2>Những biển hiệu neon của quá trình chuyển đổi số</h2>
                <p>
                    Mỗi bài tập là một tòa nhà trong thành phố dữ liệu: từ thao
                    tác hệ thống tệp, nghiên cứu học thuật, prompt AI, cộng tác
                    cloud đến liêm chính học thuật.
                </p>
                <img src={neonSigns} alt="" aria-hidden="true" />
            </header>

            <div className="project-grid">
                {projects.map((project, index) => (
                    <NeonPanel
                        key={project.id}
                        eyebrow={project.signal}
                        title={project.title}
                        className="project-card"
                    >
                        <div className="project-index">0{index + 1}</div>
                        <p>
                            <strong>Mục tiêu:</strong> {project.goal}
                        </p>
                        <p>{project.summary}</p>
                        <a
                            className="transmission-link"
                            href={project.evidence}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FileCode2 size={17} aria-hidden="true" />
                            <span>Mở bài tập</span>
                            <ExternalLink size={15} aria-hidden="true" />
                        </a>
                    </NeonPanel>
                ))}
            </div>
        </motion.section>
    );
}
