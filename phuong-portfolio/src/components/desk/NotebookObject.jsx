import { BookOpen } from 'lucide-react';
import DeskObject from './DeskObject.jsx';

export default function NotebookObject({ active, onClick }) {
  return (
    <DeskObject label="Giới thiệu" active={active} onClick={onClick} className="notebook">
      <div className="notebook-cover">
        <div className="absolute bottom-7 left-8 z-10 flex items-center gap-2 text-sm font-extrabold text-[var(--lamp-green)]">
          <BookOpen size={18} />
          <span>ABOUT ME</span>
        </div>
      </div>
      <div className="notebook-page" />
    </DeskObject>
  );
}
