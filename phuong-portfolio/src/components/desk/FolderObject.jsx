import { FileText } from 'lucide-react';
import DeskObject from './DeskObject.jsx';

export default function FolderObject({ active, onClick }) {
  return (
    <DeskObject label="Tổng kết" active={active} onClick={onClick} className="folder">
      <div className="folder-back" />
      <div className="folder-paper">
        <div className="absolute left-5 top-7 right-5 space-y-3">
          <div className="h-2 rounded bg-[rgba(107,87,68,0.28)]" />
          <div className="h-2 rounded bg-[rgba(107,87,68,0.18)]" />
          <div className="h-2 w-2/3 rounded bg-[rgba(107,87,68,0.18)]" />
        </div>
      </div>
      <div className="folder-front">
        <div className="absolute bottom-7 left-7 flex items-center gap-2 text-sm font-extrabold text-[var(--ink)]">
          <FileText size={18} />
          <span>CONCLUSION</span>
        </div>
      </div>
    </DeskObject>
  );
}
