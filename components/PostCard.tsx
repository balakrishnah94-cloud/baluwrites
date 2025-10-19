import Link from "next/link";
import type { Post } from "@/lib/posts";

function Tag({ children }: { children: React.ReactNode }) {
  return <span className="px-2 py-0.5 rounded-full text-xs border bg-gray-50 dark:bg-gray-900">{children}</span>;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="rounded-2xl border p-4 hover:shadow-lg transition-shadow">
      <h3 className="font-semibold text-base">
        <Link href={`/posts/${post.slug}`} className="underline-offset-4 hover:underline">{post.title}</Link>
      </h3>
      <div className="text-xs opacity-60 mt-1">{new Date(post.date).toDateString()}</div>
      <p className="text-sm mt-2">{post.excerpt}</p>
      <div className="flex flex-wrap gap-2 mt-3">{post.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>
    </div>
  );
}
