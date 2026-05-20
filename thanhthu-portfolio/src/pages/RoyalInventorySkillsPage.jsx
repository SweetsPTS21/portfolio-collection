import InventoryShelf from '../features/royal-inventory/InventoryShelf.jsx';
import SkillScrollTooltip from '../features/royal-inventory/SkillScrollTooltip.jsx';
import SectionShell from './SectionShell.jsx';

export default function RoyalInventorySkillsPage() {
  return (
    <SectionShell
      eyebrow="Royal inventory"
      id="inventory"
      lead="Bộ kỹ năng và công cụ mà mình đã tích lũy được trên hành trình học tập và phát triển cá nhân."
      title="Kỹ năng đạt được"
    >
      <InventoryShelf />
      <SkillScrollTooltip>
        Kiểm chứng, tối giản, phản biện và điều phối AI có trách nhiệm.
      </SkillScrollTooltip>
    </SectionShell>
  );
}
