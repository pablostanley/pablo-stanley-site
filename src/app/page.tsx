import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <section className="flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl tracking-tight">
          pablo stanley
        </h1>
        <p className="leading-relaxed">
          hola, i&apos;m pabs. designer and creative-tools builder. i ship in code. 20 years across product and illustration systems... last four mostly ai.
        </p>
        <p className="leading-relaxed">
          right now i&apos;m designing{" "}
          <a className="font-medium hover:underline underline-offset-4" href="https://v0.app" target="_blank" rel="noopener noreferrer">v0</a>{" "}
          at{" "}
          <a className="font-medium hover:underline underline-offset-4" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel</a>.
          on the side, i&apos;m building{" "}
          <a className="font-medium hover:underline underline-offset-4" href="https://efecto.app" target="_blank" rel="noopener noreferrer">efecto.app</a>.
          previously i co-founded{" "}
          <a className="font-medium hover:underline underline-offset-4" href="https://lummi.ai" target="_blank" rel="noopener noreferrer">lummi</a>{" "}
          (acquired by udemy, 2025).
        </p>
        <div className="flex gap-6 font-mono text-sm pt-2">
          <Link href="/work" className="font-medium hover:underline underline-offset-4">see my work →</Link>
          <a
            href="https://pablostanley.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium hover:underline underline-offset-4"
          >
            read my newsletter →
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
