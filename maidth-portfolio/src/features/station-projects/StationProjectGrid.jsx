import { motion } from "framer-motion";
import { useState } from "react";
import { listStagger } from "../../app/motionConfig";
import { portfolioContent } from "../journey-content/portfolioContent";
import { ProjectDetailScreen } from "./ProjectDetailScreen";
import { TrainCarProjectCard } from "./TrainCarProjectCard";

export function StationProjectGrid() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (selectedProject) {
    return <ProjectDetailScreen project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <motion.div className="project-grid" variants={listStagger} initial="hidden" animate="visible">
      {portfolioContent.projects.map((project) => (
        <TrainCarProjectCard key={project.title} project={project} onSelect={setSelectedProject} />
      ))}
    </motion.div>
  );
}
