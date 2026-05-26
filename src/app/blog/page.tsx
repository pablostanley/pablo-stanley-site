import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "blog",
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl sm:text-4xl tracking-tight">blog</h1>
      {posts.length === 0 ? (
        <p className="text-zinc-700 dark:text-zinc-300">
          no posts yet. drop an <code className="font-mono">.md</code> file in <code className="font-mono">src/content/blog/</code>.
        </p>
      ) : (
        <ul className="flex flex-col gap-6">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="flex flex-col gap-1 group">
                <div className="flex justify-between items-baseline gap-4">
                  <h2 className="group-hover:underline underline-offset-4">{p.title}</h2>
                  <span className="font-mono text-sm text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                    {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }).toLowerCase()}
                  </span>
                </div>
                {p.summary && <p className="text-sm text-zinc-700 dark:text-zinc-300">{p.summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
