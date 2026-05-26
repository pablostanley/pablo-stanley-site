import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
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
    role: "Staff Product Designer, Vercel",
    blurb: "Vercel's AI product that turns prompts into React/Next.js apps. Working on model behavior, prompt UX, generative UI.",
    href: "https://v0.app",
  },
  {
    name: "Efecto",
    year: "Dec 2025–",
    role: "Founder, solo",
    blurb: "AI design agency. A canvas where humans and agents collaborate on finished work. 64 MCP tools, multi-agent teams, living brand systems. Nights and weekends.",
    href: "https://efecto.app",
  },
];

const past: Project[] = [
  {
    name: "Lummi",
    year: "2023–2025",
    role: "Co-founder & CEO",
    blurb: "AI image and design platform. Acquired by Udemy, June 2025.",
    href: "https://lummi.ai",
  },
  {
    name: "Musho AI",
    year: "2022–2024",
    role: "Co-founder",
    blurb: "One of the earliest text-to-design tools. Prompt a brand or website, get a full draft.",
  },
  {
    name: "Blush",
    year: "2019–2025",
    role: "Co-founder",
    blurb: "Illustration platform. Figma plugin and web app for mix-and-match illustrations.",
    href: "https://blush.design",
  },
  {
    name: "Carbon Health",
    year: "2015–2018",
    role: "Co-founder, Design",
    blurb: "Designed the patient experience across mobile and web. Healthcare app from scratch.",
    href: "https://carbonhealth.com",
  },
  {
    name: "InVision Studio",
    year: "—",
    role: "Lead Designer, Studio Platform",
    blurb: "Design tools for designers. Design and design-systems work.",
  },
  { name: "Lyft", year: "—", role: "Staff Designer", blurb: "Earlier product design role.", href: "https://lyft.com" },
  { name: "Udemy", year: "—", role: "UX Designer", blurb: "Student/instructor experience.", href: "https://udemy.com" },
];

type Side = { name: string; year?: string; href?: string; blurb: string };

const sideProjects: Side[] = [
  { name: "Bueno", href: "https://bueno.art/", blurb: "Little AI/design tool." },
  { name: "Humaaans", year: "2018", href: "https://humaaans.com", blurb: "Mix-and-match illustration system. #1 Product Hunt. Defined the late-2010s SaaS illustration look." },
  { name: "Open Peeps", href: "https://openpeeps.com", blurb: "Hand-drawn illustration library. CC0." },
  { name: "Avataaars", href: "https://avataaars.com", blurb: "Avatar generator. Used by millions." },
  { name: "Bottts", blurb: "Robot avatar generator." },
  { name: "Robotos", href: "https://robotos.art/", blurb: "Robot avatars." },
  { name: "Buttsss", href: "https://buttsss.com/", blurb: "Yes." },
  { name: "Humankind", href: "https://www.humankind.art/", blurb: "Illustration system." },
  { name: "Open Doodles", href: "https://opendoodles.com/", blurb: "Open-source doodles." },
  { name: "The Design Team", href: "https://thedesignteam.io/", blurb: "Webcomics about startup life." },
  { name: "Latinxs Who Design", href: "https://latinxswhodesign.com", blurb: "Professional directory for Latinx designers in tech." },
  { name: "Dreamer Stories", year: "2017", href: "https://www.dreamerstories.com/", blurb: "Illustrated portraits + oral histories of DACA recipients." },
  { name: "Sketch Together", href: "https://youtube.com/sketchtogether", blurb: "YouTube design channel." },
  { name: "Diseño Cha Cha Chá", href: "https://podcasts.apple.com/us/podcast/dise%C3%B1o-cha-cha-ch%C3%A1/id1225335043", blurb: "Spanish-language podcast for Latinx designers in tech." },
];

function ProjectRow({ p }: { p: Project }) {
  const inner = (
    <div className="flex flex-col gap-1 group">
      <div className="flex justify-between items-baseline gap-4">
        <h3 className="text-lg font-medium group-hover:underline">{p.name}</h3>
        <span className="text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">{p.year}</span>
      </div>
      <span className="text-sm text-zinc-500 dark:text-zinc-400">{p.role}</span>
      <p className="text-zinc-600 dark:text-zinc-400">{p.blurb}</p>
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
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Work</h1>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Current</h2>
        <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {current.map((p) => (
            <li key={p.name} className="py-6">
              <ProjectRow p={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Past</h2>
        <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {past.map((p) => (
            <li key={p.name} className="py-6">
              <ProjectRow p={p} />
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">Side projects + open source</h2>
        <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {sideProjects.map((p) => (
            <li key={p.name} className="py-4">
              {p.href ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1 group">
                  <div className="flex justify-between items-baseline gap-4">
                    <h3 className="font-medium group-hover:underline">{p.name}</h3>
                    {p.year && <span className="text-sm text-zinc-500 dark:text-zinc-400">{p.year}</span>}
                  </div>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.blurb}</p>
                </a>
              ) : (
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{p.blurb}</p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
