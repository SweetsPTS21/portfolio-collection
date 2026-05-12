import { ExternalLink } from 'lucide-react';

export default function HoloButton({ href, children }) {
  return (
    <a className="holo-button" href={href} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <ExternalLink size={16} strokeWidth={2.2} aria-hidden="true" />
    </a>
  );
}
