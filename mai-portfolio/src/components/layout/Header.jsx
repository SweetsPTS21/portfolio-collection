import { Button } from "antd";
import { Anchor } from "lucide-react";

const navItems = [
  ["Giới thiệu", "about"],
  ["Dự án", "projects"],
  ["Tổng kết", "conclusion"],
];

export default function Header() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top" aria-label="Nguyễn Thị Xuân Mai">
        <Anchor size={18} />
        <span>Xuân Mai</span>
      </a>
      <nav>
        {navItems.map(([label, id]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>
      <Button type="primary" href="#projects">
        Xem bài tập
      </Button>
    </header>
  );
}
