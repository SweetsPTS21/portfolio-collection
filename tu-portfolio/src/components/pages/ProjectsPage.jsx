import { portfolioData } from '../../data/portfolioData.js';
import PdfLinkButton from '../ui/PdfLinkButton.jsx';
import { InfoTile, MosaicGrid, PrototypeCard, PrototypePanel } from '../ui/PrototypeCard.jsx';
import ScrollReveal from '../ui/ScrollReveal.jsx';
import SectionTitle from '../ui/SectionTitle.jsx';

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

      <PrototypePanel className="project-board" aria-label="Danh sách bài tập">
        <MosaicGrid className="project-grid">
          {portfolioData.projects.map((project, index) => (
            <ScrollReveal
              key={project.id}
              className={project.featured ? 'project-grid__featured' : undefined}
              delay={index * 0.04}
            >
              <PrototypeCard
                className="project-card"
                icon={project.icon}
                label={project.chapter}
                title={project.title}
                tone={project.accent}
                span={project.featured ? 'wide' : undefined}
                variant="ghostMedia"
                decor={{ src: project.visual.image }}
                action={
                  <PdfLinkButton href={project.pdf}>
                    Mở {project.chapter}
                  </PdfLinkButton>
                }
              >
                <div className="project-card__content">
                  <InfoTile label="Mục tiêu">
                    <p>{project.objective}</p>
                  </InfoTile>
                  <InfoTile label="Quá trình thực hiện">
                    <p>{project.process}</p>
                  </InfoTile>
                </div>
              </PrototypeCard>
            </ScrollReveal>
          ))}
        </MosaicGrid>
      </PrototypePanel>
    </div>
  );
}
