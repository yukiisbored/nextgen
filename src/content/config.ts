import { defineCollection, z } from "astro:content";

const notesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    draft: z.boolean().optional(),
    excludeFeed: z.boolean().optional(),
    slug: z.string().optional(),
  }),
});

export const collections = {
  notes: notesCollection,
};
