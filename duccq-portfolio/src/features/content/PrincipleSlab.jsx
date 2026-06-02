import { ShieldCheck } from "lucide-react";
import { portfolioData } from "../../data/portfolioData.js";

export default function PrincipleSlab() {
  return (
    <section className="principle-slab">
      <ShieldCheck size={28} />
      <div>
        <p className="section-kicker">AI PRINCIPLE</p>
        <h2>Tư duy phản biện độc lập giữ quyền quyết định cuối cùng.</h2>
        <p>{portfolioData.aiPrinciple}</p>
      </div>
    </section>
  );
}
