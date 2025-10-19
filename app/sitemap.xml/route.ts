import { NextResponse } from "next/server";
import { buildSitemapXML } from "@/lib/rss";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const xml = buildSitemapXML(baseUrl);
  return new NextResponse(xml, { headers: { "Content-Type": "application/xml" } });
}
