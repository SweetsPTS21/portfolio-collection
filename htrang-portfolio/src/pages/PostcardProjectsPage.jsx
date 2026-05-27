import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPinned } from "lucide-react";
import { projects } from "../data/portfolioData.js";
import StampBadge from "../components/ui/StampBadge.jsx";
import flowers from "../assets/tropical-postcard/tropical-flowers.svg";
import postcardStack from "../assets/tropical-postcard/generated/blue-postcard-stack-cutout.png";
import flowerCluster from "../assets/tropical-postcard/generated/plumeria-flower-cluster-cutout.png";

export default function PostcardProjectsPage() {
    return (
        <div className="projects-page">
            <header className="page-heading">
                <StampBadge>Postcard Gallery</StampBadge>
                <img className="postcard-stack-cutout" src={postcardStack} alt="" />
                <h1>Nhật ký dự án qua 6 điểm dừng</h1>
                <p>Mỗi postcard ghi lại một chương học, mục tiêu, cách thực hiện và kỹ năng số được giữ lại sau hành trình.</p>
            </header>

            <section className="postcard-grid" aria-label="Project postcards">
                {projects.map((project, index) => (
                    <motion.article
                        className="project-postcard"
                        key={project.chapter}
                        initial={{ opacity: 0, y: 24, rotate: index % 2 ? 1.2 : -1.2 }}
                        whileInView={{ opacity: 1, y: 0, rotate: index % 2 ? 0.5 : -0.5 }}
                        whileHover={{ y: -8, rotate: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.45, delay: index * 0.04 }}
                    >
                        <img className="postcard-flower" src={index % 2 ? flowerCluster : flowers} alt="" />
                        <div className="postcard-topline">
                            <span>{project.chapter}</span>
                            <strong>{project.stamp}</strong>
                        </div>
                        <h2>{project.title}</h2>
                        <p className="destination"><MapPinned size={16} /> {project.destination}</p>
                        <p><strong>Mục tiêu:</strong> {project.goal}</p>
                        <p>{project.process}</p>
                        <a href="/passport" aria-label={`View reflection for ${project.chapter}`}>
                            Reflection <ArrowUpRight size={16} />
                        </a>
                    </motion.article>
                ))}
            </section>
        </div>
    );
}
