import { SITE } from "./site";
import { getAllPosts } from "./posts";

export function buildRssXML(baseUrl: string) {
  const posts = getAllPosts();
  const items = posts.map(p => `
    <item>
      <title><![CDATA[${p.title}]]></title>
      <link>${baseUrl}/posts/${p.slug}</link>
      <guid>${baseUrl}/posts/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description><![CDATA[${p.excerpt}]]></description>
    </item>
  `).join("\n");

  return `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>${SITE.name}</title>
      <link>${baseUrl}</link>
      <description>${SITE.tagline}</description>
      ${items}
    </channel>
  </rss>`;
}

export function buildSitemapXML(baseUrl: string) {
  const posts = getAllPosts();
  const urls = [
    "", "/tech", "/lifestyle", "/about", "/contact",
    ...posts.map(p => `/posts/${p.slug}`)
  ];
  const items = urls.map(u => `
    <url><loc>${baseUrl}${u}</loc></url>
  `).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${items}
  </urlset>`;
}
