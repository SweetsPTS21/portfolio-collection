import terminalFrame from "../../assets/cyberpunk-city/terminal-frame.svg";

export default function NeonPanel({ eyebrow, title, children, className = "" }) {
  return (
    <article className={`neon-panel ${className}`}>
      <img className="terminal-frame" src={terminalFrame} alt="" aria-hidden="true" />
      {eyebrow ? <p className="panel-eyebrow">{eyebrow}</p> : null}
      {title ? <h3>{title}</h3> : null}
      <div className="neon-panel__body">{children}</div>
    </article>
  );
}
