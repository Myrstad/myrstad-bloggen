import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.mortenmyrstad.no',
  compressHTML: true,
  integrations: [
    sitemap({
      filter: (page) => {
        //exclude pages from site.no/emne/*
        if (page.includes('/emne/') && page.split('/')[4]) {
          console.log(page, 'is excluded');
          return false;
        }
        //exclude pages from site.no/innlegg/*
        // if (page.includes('/innlegg/') && page.split('/')[4]) {
        //   console.log(page, 'is excluded');
        //   return false;
        // }
        return true;
      },
    }),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
    },
  },
});
