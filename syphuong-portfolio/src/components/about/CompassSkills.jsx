import { BookOpen, BrainCircuit, Database, Scale, ShieldCheck, UsersRound } from "lucide-react";
import compas from "../../assets/compas.png";
import skillsBg from "../../assets/skills-bg.png";
import { skills } from "../../data/portfolioData.js";

const icons = [Scale, Database, BookOpen, BrainCircuit, UsersRound, ShieldCheck];

export default function CompassSkills() {
  return (
    <section id="skills" className="compass-skills" style={{ backgroundImage: `url(${skillsBg})` }}>
      <div className="skills-copy">
        <h2>Compass Skills</h2>
        <div className="board-wave" aria-hidden="true" />
        <p>Kỷ luật, tư duy hệ thống và khả năng học hỏi công nghệ là nền tảng cho quá trình phát triển.</p>
      </div>

      <div className="compass-map">
        <img className="compass-image" src={compas} alt="La ban dinh huong ky nang" />
        <div className="skill-badges">
          {skills.map((skill, index) => {
            const Icon = icons[index] ?? Scale;
            return (
              <article className={`skill-badge skill-${index + 1}`} key={skill.title}>
                <Icon size={34} strokeWidth={1.7} />
                <div>
                  <h3>{skill.title}</h3>
                  <p>{skill.detail}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
