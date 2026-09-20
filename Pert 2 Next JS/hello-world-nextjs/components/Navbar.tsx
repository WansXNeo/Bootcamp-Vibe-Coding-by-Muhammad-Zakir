import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  logo?: string;
  items: NavItem[];
};

export default function Navbar({
  logo = "RIFIQ.",
  items,
}: NavbarProps) {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href="/"
          className="font-mono text-lg font-bold tracking-[0.2em] text-accent transition hover:text-accent-light"
        >
          {logo}
        </Link>

        <div className="flex items-center gap-1 overflow-x-auto">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="whitespace-nowrap px-3 py-2 font-mono text-xs tracking-wider text-muted transition hover:bg-surface-light hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}