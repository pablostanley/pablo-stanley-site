import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
          holaaaa, I&apos;m Pablo.
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Designer and creative-tools builder. Ships in code. 20 years across
          product and illustration systems... last four mostly AI.
        </p>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Currently designing <a className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100" href="https://v0.app" target="_blank" rel="noopener noreferrer">v0</a> at <a className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100" href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>. On the side, building <a className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100" href="https://efecto.app" target="_blank" rel="noopener noreferrer">efecto.app</a>. Previously co-founded <a className="underline underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100" href="https://lummi.ai" target="_blank" rel="noopener noreferrer">Lummi</a> (acquired by Udemy, 2025).
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/work"
            className="rounded-full bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            See the work
          </Link>
          <a
            href="https://pablostanley.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-300 dark:border-zinc-700 px-5 py-2 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          >
            Read the newsletter
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Right now
        </h2>
        <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {now.map((p) => (
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

const now: { name: string; href: string; blurb: string }[] = [
  { name: "v0 at Vercel", href: "https://v0.app", blurb: "Designing model behavior + generative UI" },
  { name: "Efecto", href: "https://efecto.app", blurb: "AI design agency, solo build" },
  { name: "Substack", href: "https://pablostanley.substack.com", blurb: "Essays + comics about AI, design, creativity" },
];
