import PostCard from "@/components/PostCard";
import Newsletter from "@/components/Newsletter";
import { getPostsByCategory } from "@/lib/posts";

export default function HomePage() {
  const tech = getPostsByCategory("tech").slice(0, 3);
  const life = getPostsByCategory("lifestyle").slice(0, 3);

  return (
    <main>
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Hi, I’m Balu — I turn <span className="underline decoration-dashed">data</span> into stories.</h1>
          <p className="mt-3 opacity-80">
            I write about Azure, Databricks, ETL patterns, and the moments in-between — travel, photos, and thoughts from life in the UK.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="/tech" className="rounded-2xl border px-3 py-2 text-sm">Explore Tech</a>
            <a href="/lifestyle" className="rounded-2xl border px-3 py-2 text-sm">Explore Lifestyle</a>
          </div>
        </div>
        <div className="md:justify-self-end">
          <div className="aspect-video w-full md:w-[480px] rounded-2xl border grid place-items-center">
            <div className="text-center p-6">
              <div className="font-semibold text-lg">Balu Writes</div>
              <div className="text-sm opacity-70">Where data meets daily life.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-12">
        <h2 className="text-xl font-bold mb-4">Latest Tech</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tech.map(p => <PostCard key={p.slug} post={p} />)}
        </div>

        <h2 className="text-xl font-bold mt-10 mb-4">Latest Lifestyle</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {life.map(p => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </main>
  );
}
