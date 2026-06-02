import { FileText, Radar } from "lucide-react";
import SonarButton from "../ui/SonarButton.jsx";

export default function ProjectLogCard({ project, index, onOpenProcess }) {
  return (
    <article className="project-log-card ice-card">
      <div className="log-code">ROUTE {String(index + 1).padStart(2, "0")}</div>
      <FileText size={26} />
      <span>{project.chapter}</span>
      <h3>{project.title}</h3>
      <p>{project.objective}</p>
      <div className="process-preview">
        <Radar size={18} />
        <strong>{project.processSteps.length} bước thực hiện</strong>
      </div>
      <button className="secondary-action" onClick={() => onOpenProcess(project)} type="button">Xem quá trình</button>
      <SonarButton href={project.file}>Mở file PDF</SonarButton>
    </article>
  );
}
