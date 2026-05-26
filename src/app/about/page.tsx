import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <article className="flex flex-col gap-6 prose dark:prose-invert max-w-none">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
        I&apos;m Pablo. I design, draw, and build things on the web. Currently at Vercel.
      </p>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
        Replace this with your actual bio — work history, what you care about,
        what you&apos;re currently obsessed with, how to get in touch.
      </p>
    </article>
  );
}
