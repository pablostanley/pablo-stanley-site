import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl tracking-tight">
          holaaaa, i&apos;m pablo.
        </h1>
        <p className="leading-relaxed">
          designer and creative-tools builder. ships in code. 20 years across
          product and illustration systems... last four mostly ai.
        </p>
        <p className="leading-relaxed">
          currently designing{" "}
          <a className="underline underline-offset-4" href="https://v0.app" target="_blank" rel="noopener noreferrer">v0</a>{" "}
          at{" "}
          <a className="underline underline-offset-4" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel</a>.
          on the side, building{" "}
          <a className="underline underline-offset-4" href="https://efecto.app" target="_blank" rel="noopener noreferrer">efecto.app</a>.
          previously co-founded{" "}
          <a className="underline underline-offset-4" href="https://lummi.ai" target="_blank" rel="noopener noreferrer">lummi</a>{" "}
          (acquired by udemy, 2025).
        </p>
        <div className="flex gap-6 font-mono text-sm pt-2">
          <Link href="/work" className="underline underline-offset-4">see the work →</Link>
          <a
            href="https://pablostanley.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4"
          >
            read the newsletter →
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-sm text-zinc-500 dark:text-zinc-400">right now</h2>
        <ul className="flex flex-col gap-4">
          {now.map((p) => (
            <li key={p.href}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-between items-baseline gap-4 group"
              >
                <span className="group-hover:underline underline-offset-4">{p.name}</span>
                <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 text-right">{p.blurb}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const now: { name: string; href: string; blurb: string }[] = [
  { name: "v0 at vercel", href: "https://v0.app", blurb: "model behavior + generative ui" },
  { name: "efecto", href: "https://efecto.app", blurb: "ai design agency, solo build" },
  { name: "substack", href: "https://pablostanley.substack.com", blurb: "essays + comics" },
];
