import React from 'react';
import PageShell from '../components/layout/PageShell';
import SeaGardenScene from '../features/sea-garden-skills/SeaGardenScene';
import { goals, strengths, tools } from '../data/portfolioData';

export default function SeaGardenSkillsPage() {
  return (
    <PageShell eyebrow="Sea garden skills" title="Vườn kỹ năng dưới nước">
      <p className="lead">
        Dưới đây là một số kỹ năng và công cụ mà mình đã tích lũy được trong
        hành trình phát triển sự nghiệp của mình. Mình tin rằng những kỹ năng
        này sẽ giúp mình tiếp tục phát triển và đạt được những mục tiêu mới
        trong tương lai.
      </p>
      <SeaGardenScene tools={tools} strengths={strengths} goals={goals} />
    </PageShell>
  );
}
