import React from "react";
import { Leaf, Trees, Sparkles } from "lucide-react";
import ReflectionHero from "../components/conclusion/ReflectionHero";
import PageShell from "../components/layout/PageShell";
import ForestPanel from "../components/ui/ForestPanel";
import { conclusion } from "../data/portfolioData";

export default function ConclusionPage() {
  return (
    <PageShell
      eyebrow="Acorn tree reflection"
      title="Tổng kết hành trình"
    >
      <ReflectionHero
        summary={conclusion.summary}
        skills={conclusion.skills}
      />
      <section className="reflection-lists">
        <ForestPanel title="Điểm tâm đắc" icon={<Sparkles size={22} />}>
          <ul>
            {conclusion.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ForestPanel>
        <ForestPanel title="Thách thức" icon={<Trees size={22} />}>
          <ul>
            {conclusion.challenges.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ForestPanel>
        <ForestPanel title="Định hướng" icon={<Leaf size={22} />}>
          <ul>
            {conclusion.direction.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </ForestPanel>
      </section>
    </PageShell>
  );
}
