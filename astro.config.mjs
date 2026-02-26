// @ts-check
import { defineConfig } from "astro/config";
import customTheme from "./theme.json";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://yukiisbo.red",
    integrations: [tailwind(), mdx(), react()],
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