import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function get(context) {
  const blog = await getCollection('blog');
  return rss({
    title: 'RSS | Myrstadbloggen',
    description: 'Abonner her på Myrstadbloggen med RSS',
    site: 'https://blog.mortenmyrstad.no/',
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: post.data.customData,
      link: `/innlegg/${post.slug}/`,
    })),
  });
}
