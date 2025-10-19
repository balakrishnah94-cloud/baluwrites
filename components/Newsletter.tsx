"use client";
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [ok, setOk] = useState(false);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder — integrate Substack/Mailchimp later
    setOk(true);
  }

  return (
    <div className="rounded-2xl border p-4">
      <h3 className="font-semibold">Subscribe for new posts</h3>
      <p className="text-sm opacity-70">No spam. Just tech & life notes.</p>
      <form onSubmit={onSubmit} className="mt-3 flex gap-2">
        <input
          type="email"
          required
          value={email}
          onChange={e=>setEmail(e.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-2xl border px-3 py-2 text-sm bg-transparent"
        />
        <button className="rounded-2xl border px-3 py-2 text-sm" type="submit">Subscribe</button>
      </form>
      {ok && <div className="text-xs mt-2">Thanks! (Hook this to Substack/Mailchimp later.)</div>}
    </div>
  );
}
