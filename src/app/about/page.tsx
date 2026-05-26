import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <article className="flex flex-col gap-6 prose dark:prose-invert max-w-none">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h1>

      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        I&apos;m Pablo. Mexican, lives in the US. New dad. I design things and I use AI to build them.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Right now I&apos;m a Staff Product Designer at <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">Vercel</a>, working on <a href="https://v0.app" target="_blank" rel="noopener noreferrer">v0</a>. On the side, I&apos;m building <a href="https://efecto.app" target="_blank" rel="noopener noreferrer">Efecto</a>... an AI design agency, solo. Nights and weekends and 2am sessions.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        The last four years of my work have mostly been AI tools, built with AI tools. I write and ship my own designs in React, Tailwind, and TypeScript, and I run Claude Code, v0, Cursor, and Codex most days. Still forming opinions on what AI products should feel like.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Before that, I co-founded <a href="https://lummi.ai" target="_blank" rel="noopener noreferrer">Lummi</a> (acquired by Udemy, June 2025), Musho AI, Blush, and Carbon Health. Earlier, I led design on InVision Studio and did design at Lyft and Udemy.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        On the side I make open-source illustration and avatar systems used by millions... Humaaans, Open Peeps, Avataaars, Bottts, Robotos, Buttsss, Humankind, Open Doodles. Plus little tools like <a href="https://bueno.art/" target="_blank" rel="noopener noreferrer">Bueno</a>. I also draw <a href="https://thedesignteam.io" target="_blank" rel="noopener noreferrer">The Design Team</a>, a webcomic about startup life, and I write a <a href="https://pablostanley.substack.com" target="_blank" rel="noopener noreferrer">newsletter</a> about AI, design, creativity, and what speed costs us.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        I&apos;ve talked at Awwwards, Design Matters (Tokyo, Mexico City, Copenhagen), Kinference, Forward Festival, RETHINK, Domestika, and a few others. I illustrated <i>The Making of a Manager</i> by Julie Zhuo.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Reach me at <a href="mailto:pablostanley1@gmail.com">pablostanley1@gmail.com</a>, or on{" "}
        <a href="https://x.com/pablostanley" target="_blank" rel="noopener noreferrer">Twitter</a> /{" "}
        <a href="https://linkedin.com/in/pablostanley1" target="_blank" rel="noopener noreferrer">LinkedIn</a> /{" "}
        <a href="https://github.com/pablostanley" target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>

      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Un abrazote,<br />
        Pabs
      </p>
    </article>
  );
}
