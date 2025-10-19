import { SITE } from "@/lib/site";

export const metadata = { title: "Contact — Balu Writes" };

const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "your_formspree_id";

export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-2">Contact</h2>
      <p className="opacity-70 mb-6">Say hello or pitch a collaboration.</p>
      <form className="grid gap-4" action={`https://formspree.io/f/${FORMSPREE_ID}`} method="POST">
        <div className="grid gap-2">
          <label className="text-sm">Your email</label>
          <input name="email" className="w-full rounded-xl border bg-transparent p-2" placeholder="you@example.com" type="email" required />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Message</label>
          <textarea name="message" className="w-full rounded-xl border bg-transparent p-2 min-h-28" placeholder="Hi Balu, I wanted to…" required />
        </div>
        <input type="hidden" name="_subject" value="New message from Balu Writes" />
        <div className="flex gap-3 items-center">
          <button className="rounded-2xl border px-3 py-2 text-sm" type="submit">Send</button>
          <a href={`mailto:${SITE.email}`} className="text-sm underline">or email: {SITE.email}</a>
        </div>
      </form>
      <p className="text-xs opacity-60 mt-2">Tip: set NEXT_PUBLIC_FORMSPREE_ID in your Vercel env to enable this form.</p>
    </main>
  );
}
