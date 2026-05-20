import { Sparkles } from 'lucide-react';

export default function RibbonTag({ children }) {
  return (
    <span className="ribbon-badge">
      <Sparkles size={15} />
      {children}
    </span>
  );
}
