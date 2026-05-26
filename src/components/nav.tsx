import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

export function Nav() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <nav className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Pablo Stanley
        </Link>
        <ul className="flex gap-6 text-sm">
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
