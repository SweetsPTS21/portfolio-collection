import React from "react";
import { Sparkles, CloudRain, Rainbow } from "lucide-react";
import ReflectionHero from "../components/conclusion/ReflectionHero";
import PageShell from "../components/layout/PageShell";
import GardenPanel from "../components/ui/GardenPanel";
import { conclusion } from "../data/portfolioData";
import swanSleeping from "../assets/ballet-swan-lake/swan-sleeping.svg";
import swanPeek from "../assets/ballet-swan-lake/swan-peek.svg";
import rosePetal from "../assets/ballet-swan-lake/rose-petal.svg";

export default function ConclusionPage() {
  return (
    <PageShell eyebrow="Vũ khúc tổng kết" title="Tổng kết hành trình">
      <ReflectionHero summary={conclusion.summary} skills={conclusion.skills} />

      <section className="reflection-lists">
        <GardenPanel title="Điều tâm đắc nhất" icon={<Sparkles size={22} />}>
          <p>{conclusion.insight}</p>
        </GardenPanel>
        <GardenPanel title="Thách thức & Cách vượt qua" icon={<CloudRain size={22} />}>
          <p>{conclusion.challenge}</p>
        </GardenPanel>
        <GardenPanel title="Định hướng tương lai" icon={<Rainbow size={22} />}>
          <ul>
            {conclusion.future.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GardenPanel>
      </section>

      <div className="conclusion-ending">
        <img className="ending-bunny-sleep" src={swanSleeping} alt="" />
        <p className="ending-quote">
          "{conclusion.acknowledgement}"
        </p>
      </div>

      <div className="conclusion-ground">
        <img className="grass-footer" src={rosePetal} alt="" />
        <img className="peek-bunny" src={swanPeek} alt="" />
      </div>

      <footer className="site-footer">
        © 2026 • Tô Khánh Ly • Ballet Swan Lake Portfolio
      </footer>
    </PageShell>
  );
}
