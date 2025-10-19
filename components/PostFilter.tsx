"use client";
import { useMemo, useState } from "react";
import type { Post } from "@/lib/posts";
import PostCard from "./PostCard";

export default function PostFilter({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState<string>("");

  const tags = useMemo(() => {
    const t = new Set<string>();
    posts.forEach(p => p.tags?.forEach(x => t.add(x)));
    return Array.from(t).sort((a,b)=>a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return posts.filter(p => {
      const matchesQ = !q || (p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.join(" ").toLowerCase().includes(q));
      const matchesTag = !tag || p.tags.includes(tag);
      return matchesQ && matchesTag;
    });
  }, [posts, query, tag]);

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
        <input
          className="flex-1 rounded-2xl border px-3 py-2 text-sm bg-transparent"
          placeholder="Search posts by title, excerpt, or tag..."
          value={query}
          onChange={e=>setQuery(e.target.value)}
        />
        <select
          value={tag}
          onChange={e=>setTag(e.target.value)}
          className="rounded-2xl border px-3 py-2 text-sm bg-transparent"
          aria-label="Filter by tag"
        >
          <option value="">All tags</option>
          {tags.map(t => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(p => <PostCard key={p.slug} post={p} />)}
        {filtered.length===0 && <div className="opacity-70 text-sm">No posts match your filters.</div>}
      </div>
    </div>
  );
}
