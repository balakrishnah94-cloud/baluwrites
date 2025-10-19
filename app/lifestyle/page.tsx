import { getPostsByCategory } from "@/lib/posts";
import PostFilter from "@/components/PostFilter";

export const metadata = { title: "Lifestyle — Balu Writes" };

export default function LifestylePage() {
  const posts = getPostsByCategory("lifestyle");
  return (
    <main className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-2">Lifestyle</h2>
      <p className="opacity-70 mb-6">Travel, photos, fitness, budgeting, and thoughts.</p>
      <PostFilter posts={posts} />
    </main>
  );
}
