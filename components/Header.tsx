"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import { SITE } from "@/lib/site";
import { NotebookPen, Laptop, Images, FileText, Mail, Home, Linkedin } from "lucide-react";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const active = pathname === href;
  return (
    <Link href={href} className={`px-3 py-2 rounded-2xl text-sm border ${active ? "bg-gray-100 dark:bg-gray-800" : "hover:bg-gray-50 dark:hover:bg-gray-800"}`}>
      {children}
    </Link>
  );
};

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 dark:bg-black/40 border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <NotebookPen className="h-6 w-6" />
          <div className="leading-tight">
            <div className="font-bold text-lg">{SITE.name}</div>
            <div className="text-xs opacity-70">{SITE.tagline}</div>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          <NavLink href="/"><Home className="h-4 w-4 inline-block mr-1" />Home</NavLink>
          <NavLink href="/tech"><Laptop className="h-4 w-4 inline-block mr-1" />Tech</NavLink>
          <NavLink href="/lifestyle"><Images className="h-4 w-4 inline-block mr-1" />Lifestyle</NavLink>
          <NavLink href="/about"><FileText className="h-4 w-4 inline-block mr-1" />About</NavLink>
          <NavLink href="/contact"><Mail className="h-4 w-4 inline-block mr-1" />Contact</NavLink>
          <a href={SITE.linkedin} target="_blank" className="px-3 py-2 rounded-2xl text-sm border inline-flex items-center gap-2">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
