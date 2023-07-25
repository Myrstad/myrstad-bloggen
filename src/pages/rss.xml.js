import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { formatBlogPosts } from "../js/utils";

export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Myrstadbloggen",
    description: "Abonner her på Myrstadbloggen med RSS",
    customData: "<language>no_NO</language>",
    site: "https://blog.mortenmyrstad.no/",
    items: formatBlogPosts(blog).map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      customData: post.data.customData,
      link: `/innlegg/${post.slug}/`,
      categories: post.data.tags,
    })),
  });
}
