import { ArrowRight } from "lucide-react";

export default function InkButton({ children, onClick, variant = "primary" }) {
  return (
    <button className={`ink-button ink-button-${variant}`} onClick={onClick} type="button">
      <span>{children}</span>
      <ArrowRight size={18} strokeWidth={2.4} />
    </button>
  );
}
