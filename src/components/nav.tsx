import Link from "next/link";

const links = [
  { href: "/work", label: "work" },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
];

export function Nav() {
  return (
    <header className="w-full">
      <nav className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between font-mono text-sm">
        <Link href="/" className="hover:underline underline-offset-4">
          pablo stanley
        </Link>
        <ul className="flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:underline underline-offset-4">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
