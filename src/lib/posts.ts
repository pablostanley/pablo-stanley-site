import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  summary?: string;
};

export type Post = PostMeta & { content: string };

const POSTS_DIR = path.join(process.cwd(), "src/content/blog");

function readPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: String(data.title ?? slug),
        date: String(data.date ?? new Date().toISOString()),
        summary: data.summary ? String(data.summary) : undefined,
        content,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllPosts(): PostMeta[] {
  return readPosts().map(({ content: _content, ...meta }) => meta);
}

export function getPostBySlug(slug: string): Post | undefined {
  return readPosts().find((p) => p.slug === slug);
}

export async function renderMarkdown(md: string): Promise<string> {
  const result = await remark().use(html).process(md);
  return result.toString();
}
