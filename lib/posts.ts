import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  category: "tech" | "lifestyle";
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function getAllFiles(dir: string): string[] {
  const d = fs.readdirSync(dir, { withFileTypes: true });
  return d.flatMap((ent) => {
    const res = path.resolve(dir, ent.name);
    if (ent.isDirectory()) return getAllFiles(res);
    return [res];
  });
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = getAllFiles(CONTENT_DIR).filter(f => f.endsWith(".mdx"));
  return files.map((filepath) => {
    const raw = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(raw);
    const slug = path.basename(filepath).replace(/\.mdx$/, "");
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      tags: Array.isArray(data.tags) ? data.tags : [],
      category: data.category === "lifestyle" ? "lifestyle" : "tech",
    } as Post;
  }).sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByCategory(category: "tech" | "lifestyle"): Post[] {
  return getAllPosts().filter(p => p.category === category);
}

export function getPostSlugs(): string[] {
  return getAllPosts().map(p => p.slug);
}
