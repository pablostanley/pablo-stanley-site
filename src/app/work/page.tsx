import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
};

type Project = {
  name: string;
  year: string;
  blurb: string;
  href?: string;
};

const projects: Project[] = [
  { name: "Blush", year: "2020–", blurb: "Customizable illustrations library", href: "https://blush.design" },
  { name: "Bossa Studio", year: "2018–", blurb: "Design studio building products", href: "https://bossa.studio" },
  { name: "Stanley Colors", year: "2023–", blurb: "Color tools for designers", href: "https://stanleycolors.com" },
];

export default function Work() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Work</h1>
      <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
        {projects.map((p) => (
          <li key={p.name} className="py-6">
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1 group"
            >
              <div className="flex justify-between items-baseline gap-4">
                <h2 className="text-lg font-medium group-hover:underline">{p.name}</h2>
                <span className="text-sm text-zinc-500 dark:text-zinc-400">{p.year}</span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400">{p.blurb}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
