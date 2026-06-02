import { Database, FolderKanban, Lightbulb, MonitorPlay, UsersRound } from "lucide-react";
import filmMusicStrip from "../../assets/stadium-ocean-motion/film-music-strip.svg";
import footballTrail from "../../assets/stadium-ocean-motion/football-trail.svg";
import scoreboardUi from "../../assets/stadium-ocean-motion/scoreboard-ui.svg";
import { portfolioData } from "../../data/portfolioData.js";

const icons = [FolderKanban, Database, Lightbulb, UsersRound, MonitorPlay];
const toolAssets = [scoreboardUi, footballTrail, filmMusicStrip];

export default function ToolChipGrid() {
  return (
    <div className="tool-grid">
      {portfolioData.tools.map((tool, index) => {
        const Icon = icons[index] ?? Lightbulb;
        return (
          <article className="tool-chip-card" key={tool.group}>
            <img
              className="card-football-asset tool-card-asset"
              src={toolAssets[index % toolAssets.length]}
              alt=""
            />
            <Icon size={20} />
            <div>
              <h3>{tool.group}</h3>
              <p>{tool.items.join(" / ")}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
