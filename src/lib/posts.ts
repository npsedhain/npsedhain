// Posts are plain .astro files in src/pages/writing/. Each one exports its metadata:
//
//   export const meta = { title, date: 'YYYY-MM-DD', description, kind: 'essay' | 'story' }
//
// and wraps its HTML body in <Post meta={meta}>. This module collects them for lists and RSS.

export type PostKind = 'essay' | 'story';

export interface PostMeta {
  title: string;
  date: string;
  description: string;
  kind: PostKind;
  featured?: boolean;
}

export interface PostEntry extends PostMeta {
  slug: string;
  url: string;
}

const modules = import.meta.glob<{ meta?: PostMeta }>('../pages/writing/*.astro', {
  eager: true,
});

export function getPosts(): PostEntry[] {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split('/').pop()!.replace(/\.astro$/, '');
      if (slug === 'index' || slug.startsWith('_') || !mod.meta) return null;
      return { ...mod.meta, slug, url: `/writing/${slug}` };
    })
    .filter((post): post is PostEntry => post !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function formatDate(date: string, style: 'long' | 'short' = 'long') {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    timeZone: 'UTC',
    year: 'numeric',
    month: style === 'long' ? 'long' : 'short',
    day: 'numeric',
  });
}

export const kindLabel: Record<PostKind, string> = { essay: 'Essay', story: 'Story' };

/** Neighbours of a post in date order: `newer` was published after it, `older` before. */
export function getAdjacentPosts(slug: string): { newer?: PostEntry; older?: PostEntry } {
  const posts = getPosts();
  const i = posts.findIndex((post) => post.slug === slug);
  if (i === -1) return {};
  return { newer: posts[i - 1], older: posts[i + 1] };
}

/** Posts grouped by publication year, newest year first. */
export function groupByYear(posts: PostEntry[]): { year: string; posts: PostEntry[] }[] {
  const groups = new Map<string, PostEntry[]>();
  for (const post of posts) {
    const year = post.date.slice(0, 4);
    groups.set(year, [...(groups.get(year) ?? []), post]);
  }
  return [...groups].map(([year, posts]) => ({ year, posts }));
}

/** Strips tags (and script/style contents) from an HTML string. */
export function htmlToText(html: string) {
  return html
    .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(amp|lt|gt|quot|#39|apos);/g, (_m, e: string) => ({ amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'", apos: "'" })[e]!)
    .replace(/&[a-z0-9#]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Whole minutes at ~230 words per minute, never less than one. */
export function readingTime(html: string) {
  const words = htmlToText(html).split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 230));
}

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-');
}

export interface Heading {
  depth: 2 | 3;
  id: string;
  text: string;
}

/**
 * Gives every h2/h3 in a rendered post body an id (keeping any it already has) and a
 * hover anchor link. Returns the rewritten HTML and the headings found, in order.
 */
export function processHeadings(html: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = [];
  const used = new Set<string>();
  const out = html.replace(/<h([23])(\s[^>]*)?>([\s\S]*?)<\/h\1>/gi, (_match, level: string, attrs = '', inner: string) => {
    const text = htmlToText(inner);
    const existing = /\sid=["']([^"']+)["']/i.exec(attrs)?.[1];
    let id = existing ?? (slugify(text) || 'section');
    if (!existing) {
      const base = id;
      for (let n = 2; used.has(id); n++) id = `${base}-${n}`;
    }
    used.add(id);
    headings.push({ depth: Number(level) as 2 | 3, id, text });
    const withId = existing ? attrs : `${attrs} id="${id}"`;
    return `<h${level}${withId}>${inner}<a class="heading-anchor" href="#${id}" aria-label="Link to this section">#</a></h${level}>`;
  });
  return { html: out, headings };
}
