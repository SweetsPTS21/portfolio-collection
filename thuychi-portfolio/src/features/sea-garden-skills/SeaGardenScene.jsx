import React from "react";
import SeaweedSkillGroup from "./SeaweedSkillGroup";

export default function SeaGardenScene({ tools, strengths, goals }) {
  return (
    <section className="sea-garden-scene">
      <SeaweedSkillGroup title="Công cụ đã dùng" items={tools} />
      <SeaweedSkillGroup title="Điểm mạnh" items={strengths} />
      <SeaweedSkillGroup title="Mục tiêu" items={goals} />
    </section>
  );
}
