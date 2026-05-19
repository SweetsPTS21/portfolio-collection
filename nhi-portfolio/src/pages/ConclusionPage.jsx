import React from "react";
import { Sparkles, CloudRain, Rainbow } from "lucide-react";
import ReflectionHero from "../components/conclusion/ReflectionHero";
import PageShell from "../components/layout/PageShell";
import GardenPanel from "../components/ui/GardenPanel";
import { conclusion } from "../data/portfolioData";
import bunnySleeping from "../assets/bunny-cloud-garden/bunny-sleeping.svg";
import bunnyPeek from "../assets/bunny-cloud-garden/bunny-peek.svg";
import grassBottom from "../assets/bunny-cloud-garden/grass-bottom.svg";

export default function ConclusionPage() {
  return (
    <PageShell eyebrow="Garden reflection" title="Tổng kết hành trình">
      <ReflectionHero summary={conclusion.summary} skills={conclusion.skills} />

      <section className="reflection-lists">
        <GardenPanel title="Điều tâm đắc" icon={<Sparkles size={22} />}>
          <p>{conclusion.insight}</p>
        </GardenPanel>
        <GardenPanel title="Thách thức" icon={<CloudRain size={22} />}>
          <p>{conclusion.challenge}</p>
        </GardenPanel>
        <GardenPanel title="Định hướng" icon={<Rainbow size={22} />}>
          <ul>
            {conclusion.future.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </GardenPanel>
      </section>

      <div className="conclusion-ending">
        <img className="ending-bunny-sleep" src={bunnySleeping} alt="" />
        <p className="ending-quote">
          "Khép lại môn học, điều em nhận được không chỉ là kỹ năng công nghệ, mà còn là khả năng thích nghi và sự chủ động trong thời đại số."
        </p>
      </div>

      <div className="conclusion-ground">
        <img className="grass-footer" src={grassBottom} alt="" />
        <img className="peek-bunny" src={bunnyPeek} alt="" />
      </div>

      <footer className="site-footer">
        © 2026 • Nguyễn Phương Nhi • Bunny Cloud Garden Portfolio
      </footer>
    </PageShell>
  );
}
