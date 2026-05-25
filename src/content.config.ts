import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const notesCollection = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/notes",
    generateId: ({ data }) => data.slug as string,
  }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    excludeFeed: z.boolean().optional(),
    slug: z.string(),
  }),
});

export const collections = {
  notes: notesCollection,
};
