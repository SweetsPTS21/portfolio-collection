import { Sparkles } from "lucide-react";

export default function MarginNote({ label, children, tone = "pink" }) {
  return (
    <aside className={`margin-note margin-note-${tone}`}>
      <Sparkles size={16} strokeWidth={2.6} />
      <strong>{label}</strong>
      <p>{children}</p>
    </aside>
  );
}
