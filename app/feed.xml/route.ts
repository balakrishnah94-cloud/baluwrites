import { NextResponse } from "next/server";
import { buildRssXML } from "@/lib/rss";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const xml = buildRssXML(baseUrl);
  return new NextResponse(xml, { headers: { "Content-Type": "application/rss+xml" } });
}
