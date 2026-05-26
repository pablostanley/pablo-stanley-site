import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
};

export default function Blog() {
  const posts = getAllPosts();
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-zinc-600 dark:text-zinc-400">
          No posts yet. Drop an <code>.md</code> file in <code>src/content/blog/</code>.
        </p>
      ) : (
        <ul className="flex flex-col divide-y divide-zinc-200 dark:divide-zinc-800">
          {posts.map((p) => (
            <li key={p.slug} className="py-6">
              <Link href={`/blog/${p.slug}`} className="flex flex-col gap-1 group">
                <div className="flex justify-between items-baseline gap-4">
                  <h2 className="text-lg font-medium group-hover:underline">{p.title}</h2>
                  <span className="text-sm text-zinc-500 dark:text-zinc-400">
                    {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                </div>
                {p.summary && <p className="text-zinc-600 dark:text-zinc-400">{p.summary}</p>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
