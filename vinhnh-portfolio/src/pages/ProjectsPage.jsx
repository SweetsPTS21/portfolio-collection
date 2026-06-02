import { motion } from "framer-motion";
import { useState } from "react";
import ProjectLogCard from "../components/cards/ProjectLogCard.jsx";
import ProjectProcessModal from "../components/projects/ProjectProcessModal.jsx";
import TextStack from "../components/ui/TextStack.jsx";
import { projects, projectsIntro } from "../data/portfolioData.js";

export default function ProjectsPage() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="projects-page">
      <div className="page-heading">
        <span className="ice-badge">Sonar project map</span>
        <h1>Catalog bài tập</h1>
        <TextStack items={projectsIntro} />
      </div>
      <div className="project-grid">
        {projects.map((project, index) => (
          <motion.div
            key={`${project.id}-${project.chapter}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
          >
            <ProjectLogCard project={project} index={index} onOpenProcess={setActiveProject} />
          </motion.div>
        ))}
      </div>
      <ProjectProcessModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
