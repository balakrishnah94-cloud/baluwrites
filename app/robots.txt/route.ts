import { NextResponse } from "next/server";
export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";
  const body = `User-agent: *\nAllow: /\nSitemap: ${baseUrl}/sitemap.xml`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain" } });
}
