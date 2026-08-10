// @ts-check
import { defineConfig } from "astro/config";
import customTheme from "./theme.json";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import { unified } from "@astrojs/markdown-remark";
import rehypeOGCard from "rehype-og-card";

// https://astro.build/config
export default defineConfig({
  site: "https://yukiisbo.red",
  integrations: [tailwind(), mdx(), react()],
  markdown: {
    shikiConfig: {
      // @ts-ignore
      theme: customTheme,
    },
    processor: unified({
      rehypePlugins: [
        [
          rehypeOGCard,
          // See https://github.com/Robot-Inventor/astro-link-card/blob/main/src/index.ts#L16
          {
            // buildCache flag not only controls whether to create new cached
            // entries, but also whether to use the cache itself.
            //
            // https://github.com/Robot-Inventor/rehype-og-card/blob/e30830d74679e2b6eaab54863d147b9a0759a4fb/src/index.ts#L127
            buildCache: true,
            buildCachePath: "./.cache/og-card",
            buildCacheMaxAge: 31557600000,
            enableSameTextURLConversion: true,
            serverCache: true,
            serverCachePath: "./public",
          },
        ],
      ],
    }),
  },
  prefetch: {
    prefetchAll: true,
  },
});
