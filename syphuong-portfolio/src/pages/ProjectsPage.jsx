import exploreProjects from '../assets/explore-projects.png';
import projectBg from '../assets/project-bg.png';
import ProjectDockGrid from '../components/projects/ProjectDockGrid.jsx';
import PageTransition from '../components/ui/PageTransition.jsx';

export default function ProjectsPage() {
  return (
    <PageTransition
      className="projects-page"
      style={{ backgroundImage: `url(${projectBg})` }}
    >
      <section className="projects-dock">
        <div className="section-heading">
          <h1>Dock Projects</h1>
          <div className="board-wave" aria-hidden="true" />
          <p>
            Tập hợp các bài thực hành minh chứng cho quá trình làm chủ công cụ
            công nghệ.
          </p>
        </div>
        <ProjectDockGrid />
      </section>
    </PageTransition>
  );
}
