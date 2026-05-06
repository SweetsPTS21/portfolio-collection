import { Briefcase } from 'lucide-react';
import DeskObject from './DeskObject.jsx';

export default function LaptopObject({ active, onClick }) {
  return (
    <DeskObject label="Dự án" active={active} onClick={onClick} className="laptop">
      <div className="laptop-screen">
        <div className="screen-card one" />
        <div className="screen-card two" />
        <div className="screen-card three" />
        <div className="absolute bottom-6 right-7 flex items-center gap-2 rounded-full bg-[rgba(255,253,247,0.78)] px-3 py-2 text-sm font-extrabold text-[var(--ink)]">
          <Briefcase size={17} />
          <span>PROJECT</span>
        </div>
      </div>
      <div className="laptop-base" />
      <div className="laptop-trackpad" />
    </DeskObject>
  );
}
