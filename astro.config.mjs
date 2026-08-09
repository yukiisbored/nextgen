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
            buildCache: true,
            buildCachePath: "./node_modules/.astro",
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
