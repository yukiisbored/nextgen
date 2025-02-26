// @ts-check
import { defineConfig } from "astro/config";
import customTheme from "./theme.json";

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://yukiisbo.red",
	integrations: [tailwind(), mdx()],
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
