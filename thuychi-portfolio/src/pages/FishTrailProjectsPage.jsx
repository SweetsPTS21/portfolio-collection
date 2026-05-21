import React from "react";
import PageShell from "../components/layout/PageShell";
import ReefProjectGrid from "../features/reef-projects/ReefProjectGrid";
import { projects } from "../data/portfolioData";

export default function FishTrailProjectsPage() {
  return (
    <PageShell eyebrow="Fish trail projects" title="Sản phẩm nghiên cứu">
      <p className="lead">
        Mỗi bài tập là một rạn san hô nhỏ trong hành trình học Công nghệ và
        Pháp luật, có cá bơi qua, bubble nổi lên và shell badge riêng.
      </p>
      <ReefProjectGrid projects={projects} />
    </PageShell>
  );
}
