import React from "react";
import CoralProjectCard from "./CoralProjectCard";

export default function ReefProjectGrid({ projects }) {
  return (
    <section className="reef-project-grid">
      {projects.map((project, index) => (
        <CoralProjectCard key={project.title} project={project} index={index} />
      ))}
    </section>
  );
}
