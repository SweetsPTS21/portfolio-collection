import MotionPanel from '../ui/MotionPanel.jsx';

export default function DeskObject({ label, active, onClick, children, className = '' }) {
  return (
    <MotionPanel className="h-full">
      <button
        type="button"
        className={`desk-object ${active ? 'is-active' : ''} ${className}`}
        onClick={onClick}
        aria-label={`Mở ${label}`}
      >
        {children}
        <span className="object-label">{label}</span>
      </button>
    </MotionPanel>
  );
}
