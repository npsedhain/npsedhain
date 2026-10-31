import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { getPosts } from '../lib/posts';

export const GET: APIRoute = (context) =>
  rss({
    title: site.name,
    description: site.description,
    site: context.site ?? site.url,
    items: getPosts().map((post) => ({
      title: post.title,
      description: post.description,
      link: post.url,
      pubDate: new Date(`${post.date}T00:00:00Z`),
      categories: [post.kind],
    })),
  });
