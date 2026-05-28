import { portfolioData } from '../../data/portfolioData.js';
import PdfLinkButton from '../ui/PdfLinkButton.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';
import SoftCard from '../ui/SoftCard.jsx';

export default function ProjectsPage() {
  return (
    <div className="portfolio-page projects-page">
      <section className="content-section content-section--hero">
        <SectionTitle
          eyebrow="Projects"
          title="Hành trình nâng cấp bản thân qua 6 chương"
          icon="FolderKanban"
        >
          Mỗi bài tập không chỉ là nhiệm vụ môn học, mà là một sản phẩm nhỏ được
          chăm chút từ nội dung, quy trình đến hình thức trình bày.
        </SectionTitle>
      </section>

      <section className="project-grid" aria-label="Danh sách bài tập">
        {portfolioData.projects.map((project, index) => (
          <ScrollReveal
            key={project.id}
            className={project.featured ? 'project-grid__featured' : undefined}
            delay={index * 0.04}
          >
            <SoftCard
              className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
              icon={project.icon}
              label={project.chapter}
              title={project.title}
              tone={project.accent}
              action={
                <PdfLinkButton href={project.pdf}>
                  Mở {project.chapter}
                </PdfLinkButton>
              }
            >
              <div
                className={`project-card__decor project-card__decor--${project.visual.motif}`}
                aria-hidden="true"
              >
                <img src={project.visual.image} alt="" loading="lazy" />
              </div>
              <div className="project-card__content">
                <div>
                  <span>Mục tiêu</span>
                  <p>{project.objective}</p>
                </div>
                <div>
                  <span>Quá trình thực hiện</span>
                  <p>{project.process}</p>
                </div>
              </div>
            </SoftCard>
          </ScrollReveal>
        ))}
      </section>
    </div>
  );
}

