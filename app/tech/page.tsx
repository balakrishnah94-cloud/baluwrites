import { getPostsByCategory } from "@/lib/posts";
import PostFilter from "@/components/PostFilter";

export const metadata = { title: "Tech — Balu Writes" };

export default function TechPage() {
  const posts = getPostsByCategory("tech");
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-2">Tech Blog</h2>
      <p className="opacity-70 mb-6">Azure, ADF, Databricks, Delta Lake, PySpark, and more.</p>
      <PostFilter posts={posts} />
    </main>
  );
}
