import { SITE } from "@/lib/site";

export const metadata = { title: "About — Balu Writes" };

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 space-y-6">
      <h2 className="text-2xl font-bold">About</h2>
      <p className="opacity-80">
        I’m Balu — a Data Engineer working across Azure, Databricks, ADF, and Delta Lake. I enjoy building
        metadata-driven pipelines, optimising workloads, and turning complex data into clean models and stories.
      </p>
      <p className="opacity-80">
        Outside tech, I write about travel in the UK, photography experiments, gym routines, and practical budgeting.
        This blog is a place where both worlds meet — <em>where data meets daily life</em>.
      </p>
      <div className="flex gap-3">
        <a href={SITE.linkedin} target="_blank" className="rounded-2xl border px-3 py-2 text-sm">LinkedIn</a>
      </div>
    </main>
  );
}
