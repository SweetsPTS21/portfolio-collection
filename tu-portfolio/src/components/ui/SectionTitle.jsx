import IconBadge from './IconBadge.jsx';

export default function SectionTitle({ eyebrow, title, children, icon }) {
  return (
    <div className="section-title">
      {eyebrow ? (
        <span className="section-title__eyebrow">
          {icon ? <IconBadge icon={icon} size="small" /> : null}
          {eyebrow}
        </span>
      ) : null}
      <h1>{title}</h1>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
