import { useState } from "react";
import { Eye, Image } from "lucide-react";
import { projects } from "../../data/portfolioData.js";
import PdfViewerModal from "../ui/PdfViewerModal.jsx";
import Island from "../world/Island.jsx";

export default function ProjectsIsland() {
    const [viewingProject, setViewingProject] = useState(null);

    return (
        <Island
            id="projects"
            title={projects.title}
            eyebrow={projects.chooser}
            variant="rose"
        >
            <p className="section-lead">{projects.intro}</p>
            <div className="project-path" aria-label={projects.chooser}>
                {projects.items.map((project, index) => (
                    <article className="project-islet" key={project.title}>
                        <div className="project-orb" aria-hidden="true">
                            <Image size={24} strokeWidth={2.1} />
                            <span>{String(index + 1).padStart(2, "0")}</span>
                        </div>
                        <div className="project-copy">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <button
                                type="button"
                                className="project-view-button"
                                onClick={() => setViewingProject(project)}
                                aria-label={`Xem ${project.title}`}
                            >
                                <Eye size={17} />
                                <span>Xem</span>
                            </button>
                        </div>
                    </article>
                ))}
            </div>
            <PdfViewerModal
                project={viewingProject}
                onClose={() => setViewingProject(null)}
            />
        </Island>
    );
}
