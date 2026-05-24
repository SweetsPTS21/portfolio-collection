import { Anchor, Compass, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const icons = {
  anchor: Anchor,
  compass: Compass,
  mail: Mail,
};

export default function WoodButton({
  children,
  to,
  href,
  icon,
  className = '',
}) {
  const Icon = icons[icon] ?? Anchor;
  const content = (
    <>
      {icon && <Icon aria-hidden="true" size={22} strokeWidth={1.8} />}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a className={`wood-button ${className}`} href={href}>
        {content}
      </a>
    );
  }

  return (
    <Link className={`wood-button ${className}`} to={to}>
      {content}
    </Link>
  );
}
