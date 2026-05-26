"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/work", label: "work" },
  { href: "/blog", label: "blog" },
  { href: "/about", label: "about" },
];

export function Nav() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="w-full">
      <nav className="max-w-2xl mx-auto px-6 py-8 flex items-center justify-between font-mono text-sm">
        <Link href="/" className="hover:underline underline-offset-4">
          pablo stanley
        </Link>
        <ul className="flex items-center gap-6">
          <li className="flex items-center">
            <ThemeToggle />
          </li>
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`underline-offset-4 hover:underline ${isActive(l.href) ? "underline" : ""}`}
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
