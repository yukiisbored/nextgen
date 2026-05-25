// @ts-check
import { defineConfig } from "astro/config";
import customTheme from "./theme.json";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import linkCard from "astro-link-card";

// https://astro.build/config
export default defineConfig({
    site: "https://yukiisbo.red",
    integrations: [tailwind(), mdx(), react(), linkCard()],
    markdown: {
        shikiConfig: {
            // @ts-ignore
            theme: customTheme,
        },
    },
    prefetch: {
        prefetchAll: true,
    },
});