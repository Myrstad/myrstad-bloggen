import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

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
    customData:
      '<language>no-NO</language><atom:link href="https://blog.mortenmyrstad.no/rss.xml" rel="self" type="application/rss+xml" />',
    site: 'https://blog.mortenmyrstad.no/',
    xmlns: {
      media: 'http://search.yahoo.com/mrss/',
      atom: 'http://www.w3.org/2005/Atom',
    },
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
