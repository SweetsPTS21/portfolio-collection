import { ExternalLink, FileText } from 'lucide-react';

export default function PdfLinkButton({ href, children = 'Mở bài tập' }) {
  return (
    <a className="pdf-link" href={href} target="_blank" rel="noreferrer">
      <FileText size={17} />
      <span>{children}</span>
      <ExternalLink size={15} />
    </a>
  );
}
