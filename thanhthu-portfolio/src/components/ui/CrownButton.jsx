import { Crown } from 'lucide-react';
import { Link } from 'react-router';

export default function CrownButton({ href, children, variant = 'primary' }) {
  const className = `crown-button crown-button--${variant}`;
  const content = (
    <>
      <Crown size={16} />
      {children}
    </>
  );

  if (href.startsWith('/')) {
    return (
      <Link className={className} to={href}>
        {content}
      </Link>
    );
  }

  return (
    <a className={className} href={href}>
      {content}
    </a>
  );
}
