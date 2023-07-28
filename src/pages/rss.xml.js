import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { formatBlogPosts } from '../js/utils';

export async function get(context) {
  const blog = await getCollection('blog');
  const sorted = blog
    .sort((a, b) => {
      return new Date(a.data.date) - new Date(b.data.date);
    })
    .reverse();
  return rss({
    title: 'Myrstadbloggen',
    description: 'Abonner her på Myrstadbloggen med RSS',
    customData: '<language>no-NO</language>',
    site: 'https://blog.mortenmyrstad.no/',
    xmlns: { media: 'http://search.yahoo.com/mrss/' },
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: `<media:content medium="image" url="${
        context.site.origin + post.data.image.src
      }"></media:content>`,
      link: `/innlegg/${post.slug}/`,
      categories: post.data.tags,
    })),
  });
}
