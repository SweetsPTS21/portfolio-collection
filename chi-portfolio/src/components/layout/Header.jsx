const navItems = [
  { href: "#cover", label: "Cover" },
  { href: "#about", label: "Interview" },
  { href: "#projects", label: "Works" },
  { href: "#tools", label: "Tools" },
  { href: "#reflection", label: "Reflection" },
];

export default function Header() {
  return (
    <header className="editorial-nav">
      <a className="nav-brand" href="#cover">
        Digital Portfolio
      </a>
      <nav aria-label="Điều hướng portfolio">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
