import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "work",
};

type Project = {
  name: string;
  year: string;
  role: string;
  blurb: string;
  href?: string;
};

const current: Project[] = [
  {
    name: "v0",
    year: "2025–",
    role: "staff product designer, vercel",
    blurb: "vercel's ai product that turns prompts into react/next.js apps. working on model behavior, prompt ux, generative ui.",
    href: "https://v0.app",
  },
  {
    name: "efecto",
    year: "dec 2025–",
    role: "founder, solo",
    blurb: "ai design agency. a canvas where humans and agents collaborate on finished work. 64 mcp tools, multi-agent teams, living brand systems. nights and weekends.",
    href: "https://efecto.app",
  },
];

const past: Project[] = [
  {
    name: "lummi",
    year: "2023–2025",
    role: "co-founder & ceo",
    blurb: "ai image and design platform. acquired by udemy, june 2025.",
    href: "https://lummi.ai",
  },
  {
    name: "musho ai",
    year: "2022–2024",
    role: "co-founder",
    blurb: "one of the earliest text-to-design tools. prompt a brand or website, get a full draft.",
  },
  {
    name: "blush",
    year: "2019–2025",
    role: "co-founder",
    blurb: "illustration platform. figma plugin and web app for mix-and-match illustrations.",
    href: "https://blush.design",
  },
  {
    name: "carbon health",
    year: "2015–2018",
    role: "co-founder, design",
    blurb: "designed the patient experience across mobile and web. healthcare app from scratch.",
    href: "https://carbonhealth.com",
  },
  {
    name: "invision studio",
    year: "—",
    role: "lead designer, studio platform",
    blurb: "design tools for designers. design and design-systems work.",
  },
  { name: "lyft", year: "—", role: "staff designer", blurb: "earlier product design role.", href: "https://lyft.com" },
  { name: "udemy", year: "—", role: "ux designer", blurb: "student/instructor experience.", href: "https://udemy.com" },
];

type Side = { name: string; year?: string; href?: string; blurb: string };

const sideProjects: Side[] = [
  { name: "bueno", href: "https://bueno.art/", blurb: "little ai/design tool." },
  { name: "humaaans", year: "2018", href: "https://humaaans.com", blurb: "mix-and-match illustration system. #1 product hunt. defined the late-2010s saas illustration look." },
  { name: "open peeps", href: "https://openpeeps.com", blurb: "hand-drawn illustration library. cc0." },
  { name: "avataaars", href: "https://getavataaars.com", blurb: "avatar generator. used by millions." },
  { name: "bottts", blurb: "robot avatar generator." },
  { name: "robotos", href: "https://robotos.art/", blurb: "robot avatars." },
  { name: "buttsss", href: "https://buttsss.com/", blurb: "yes." },
  { name: "humankind", href: "https://www.humankind.art/", blurb: "illustration system." },
  { name: "open doodles", href: "https://opendoodles.com/", blurb: "open-source doodles." },
  { name: "the design team", href: "https://thedesignteam.io/", blurb: "webcomics about startup life." },
  { name: "latinxs who design", href: "https://latinxswhodesign.com", blurb: "directory for latinx designers in tech." },
  { name: "dreamer stories", year: "2017", href: "https://www.dreamerstories.com/", blurb: "illustrated portraits + oral histories of daca recipients." },
  { name: "sketch together", href: "https://www.youtube.com/@sketchtogether", blurb: "youtube design channel." },
  { name: "diseño cha cha chá", href: "https://podcasts.apple.com/us/podcast/dise%C3%B1o-cha-cha-ch%C3%A1/id1225335043", blurb: "spanish-language podcast for latinx designers in tech." },
];

function ProjectRow({ p }: { p: Project }) {
  const inner = (
    <div className="flex flex-col gap-1 group">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="group-hover:underline underline-offset-4">{p.name}</h3>
        <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{p.year}</span>
      </div>
      <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">{p.role}</span>
      <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{p.blurb}</p>
    </div>
  );
  return p.href ? (
    <a href={p.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Work() {
  return (
    <div className="flex flex-col gap-16">
      <h1 className="text-3xl sm:text-4xl tracking-tight">work</h1>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-sm text-zinc-500 dark:text-zinc-400">current</h2>
        <ul className="flex flex-col gap-8">
          {current.map((p) => (
            <li key={p.name}>
              <ProjectRow p={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-sm text-zinc-500 dark:text-zinc-400">past</h2>
        <ul className="flex flex-col gap-8">
          {past.map((p) => (
            <li key={p.name}>
              <ProjectRow p={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-6">
        <h2 className="font-mono text-sm text-zinc-500 dark:text-zinc-400">side projects + open source</h2>
        <ul className="flex flex-col gap-5">
          {sideProjects.map((p) => (
            <li key={p.name}>
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 group">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="group-hover:underline underline-offset-4">{p.name}</h3>
                    {p.year && <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400">{p.year}</span>}
                  </div>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{p.blurb}</p>
                </a>
              ) : (
                <div className="flex flex-col gap-1">
                  <h3>{p.name}</h3>
                  <p className="text-sm text-zinc-700 dark:text-zinc-300">{p.blurb}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
