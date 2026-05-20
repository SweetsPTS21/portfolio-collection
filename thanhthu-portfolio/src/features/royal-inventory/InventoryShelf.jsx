import { BookOpen, Feather, KeyRound, Landmark, Map, Moon } from 'lucide-react';
import crownKeyWandSet from '../../assets/storybook-royal-forest/crown-key-wand-set.svg';
import InventoryItemBadge from './InventoryItemBadge.jsx';

const inventory = [
  { icon: BookOpen, label: 'Nhật ký số' },
  { icon: Landmark, label: 'Tư duy luật học' },
  { icon: Map, label: 'Lộ trình học tập' },
  { icon: KeyRound, label: 'Kiểm chứng thông tin' },
  { icon: Moon, label: 'Nhịp sống tĩnh lặng' },
  { icon: Feather, label: 'Ngôn ngữ thanh lịch' },
];

export default function InventoryShelf() {
  return (
    <>
      <div className="tool-grid">
        {inventory.map((item) => (
          <InventoryItemBadge key={item.label} {...item} />
        ))}
      </div>
    </>
  );
}
