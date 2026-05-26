import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          Hi, I&apos;m Pablo Stanley.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Designer, illustrator, and maker. I work at Vercel. I draw,
          write, ship side projects, and sometimes start companies.
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/work"
            className="rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See my work
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            Read the blog
          </Link>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Selected
        </h2>
        <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {featured.map((p) => (
            <li key={p.href} className="py-4">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-baseline gap-4 group"
              >
                <span className="font-medium group-hover:underline">{p.name}</span>
                <span className="text-sm text-zinc-500 dark:text-zinc-400 text-right">{p.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const featured: { name: string; href: string; blurb: string }[] = [
  { name: "Blush", href: "https://blush.design", blurb: "Customizable illustrations" },
  { name: "Bossa", href: "https://bossa.studio", blurb: "Design studio" },
  { name: "Stanley Colors", href: "https://stanleycolors.com", blurb: "Color tools" },
];
