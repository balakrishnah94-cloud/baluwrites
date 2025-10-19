import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { getPostSlugs } from "@/lib/posts";

const CONTENT_DIR = path.join(process.cwd(), "content");

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map(slug => ({ slug }));
}

function getPostSource(slug: string) {
  const file = path.join(CONTENT_DIR, "tech", `${slug}.mdx`);
  const alt = path.join(CONTENT_DIR, "lifestyle", `${slug}.mdx`);
  const filepath = fs.existsSync(file) ? file : alt;
  const mdx = fs.readFileSync(filepath, "utf-8");
  const { content, data } = matter(mdx);
  return { content, data };
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const { data } = getPostSource(params.slug);
  return {
    title: `${data.title} — ${SITE.name}`,
    description: data.excerpt || SITE.tagline
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { content, data } = getPostSource(params.slug);
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 prose dark:prose-invert">
      <h1 className="mb-2">{data.title}</h1>
      <div className="text-sm opacity-60">{new Date(data.date).toDateString()} • {Array.isArray(data.tags) ? data.tags.join(", ") : ""}</div>
      <article className="mt-6">
        {/* @ts-expect-error Server Component */}
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>
    </main>
  );
}
