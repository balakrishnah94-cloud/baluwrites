import { SITE } from "@/lib/site";
import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <div className="opacity-70">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <a href={SITE.linkedin} target="_blank" className="underline inline-flex items-center gap-1">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
