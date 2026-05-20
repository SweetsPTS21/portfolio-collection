import QuestIconBadge from './QuestIconBadge.jsx';
import PageTurnDetail from './PageTurnDetail.jsx';

export default function ChapterCard({ project }) {
  return (
    <article className="chapter-card">
      <div className="chapter-card__top">
        <span>{project.chapter}</span>
        <QuestIconBadge icon={project.icon} />
      </div>
      <h3>{project.title}</h3>
      <p className="goal">{project.goal}</p>
      <PageTurnDetail>{project.action}</PageTurnDetail>
    </article>
  );
}
