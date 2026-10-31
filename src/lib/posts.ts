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
