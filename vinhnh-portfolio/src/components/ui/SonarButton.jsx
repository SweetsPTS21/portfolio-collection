export default function SonarButton({ children, href }) {
  return (
    <a className="sonar-button" href={href} target={href?.startsWith("/") ? "_blank" : undefined} rel="noreferrer">
      <span />
      {children}
    </a>
  );
}
