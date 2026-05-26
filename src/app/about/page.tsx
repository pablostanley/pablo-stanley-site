import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "about",
};

export default function About() {
  return (
    <article className="flex flex-col gap-6 max-w-none">
      <h1 className="text-3xl sm:text-4xl tracking-tight">about</h1>

      <p className="leading-relaxed">
        i&apos;m pablo. mexican, lives in the us. new dad. i design things and i use ai to build them.
      </p>

      <p className="leading-relaxed">
        right now i&apos;m a staff product designer at <a className="font-medium hover:underline underline-offset-4" href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel</a>, working on <a className="font-medium hover:underline underline-offset-4" href="https://v0.app" target="_blank" rel="noopener noreferrer">v0</a>. on the side, i&apos;m building <a className="font-medium hover:underline underline-offset-4" href="https://efecto.app" target="_blank" rel="noopener noreferrer">efecto</a>... an ai design agency, solo. nights and weekends and 2am sessions.
      </p>

      <p className="leading-relaxed">
        the last four years of my work have mostly been ai tools, built with ai tools. i write and ship my own designs in react, tailwind, and typescript, and i run claude code, v0, cursor, and codex most days. still forming opinions on what ai products should feel like.
      </p>

      <p className="leading-relaxed">
        before that, i co-founded <a className="font-medium hover:underline underline-offset-4" href="https://lummi.ai" target="_blank" rel="noopener noreferrer">lummi</a> (acquired by udemy, june 2025), musho ai, blush, and carbon health. earlier, i led design on invision studio and did design at lyft and udemy.
      </p>

      <p className="leading-relaxed">
        on the side i make open-source illustration and avatar systems used by millions... humaaans, open peeps, avataaars, bottts, robotos, buttsss, humankind, open doodles. plus little tools like <a className="font-medium hover:underline underline-offset-4" href="https://bueno.art/" target="_blank" rel="noopener noreferrer">bueno</a>. i also draw <a className="font-medium hover:underline underline-offset-4" href="https://thedesignteam.io" target="_blank" rel="noopener noreferrer">the design team</a>, a webcomic about startup life, and i write a <a className="font-medium hover:underline underline-offset-4" href="https://pablostanley.substack.com" target="_blank" rel="noopener noreferrer">newsletter</a> about ai, design, creativity, and what speed costs us.
      </p>

      <p className="leading-relaxed">
        i&apos;ve talked at awwwards, design matters (tokyo, mexico city, copenhagen), kinference, forward festival, rethink, domestika, and a few others. i illustrated <i>the making of a manager</i> by julie zhuo.
      </p>

      <p className="leading-relaxed">
        reach me at <a className="font-medium hover:underline underline-offset-4" href="mailto:pablostanley1@gmail.com">pablostanley1@gmail.com</a>, or on{" "}
        <a className="font-medium hover:underline underline-offset-4" href="https://x.com/pablostanley" target="_blank" rel="noopener noreferrer">twitter</a> /{" "}
        <a className="font-medium hover:underline underline-offset-4" href="https://linkedin.com/in/pablostanley1" target="_blank" rel="noopener noreferrer">linkedin</a> /{" "}
        <a className="font-medium hover:underline underline-offset-4" href="https://github.com/pablostanley" target="_blank" rel="noopener noreferrer">github</a>.
      </p>

      <p className="leading-relaxed font-mono text-sm">
        un abrazote,<br />
        pabs
      </p>
    </article>
  );
}
