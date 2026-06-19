import { defineCollection, z } from "astro:content";

const entries = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    ref: z.string(),
    clusterId: z.string(),
    cluster: z.string(),
    stripeColor: z.string().optional(),
    flags: z.array(
      z.object({
        key: z.enum(["pub", "new", "gm", "fl"]),
        label: z.string(),
      })
    ).default([]),
    deck: z.string().optional(),
    summary: z.string(),
    sections: z.array(
      z.object({
        heading: z.string(),
        html: z.string(),
      })
    ).default([]),
    related: z.array(z.string()).default([]),
    sourceNotes: z.string().optional(),
    status: z.enum(["draft", "published", "flagship"]).default("published"),
  }),
});

export const collections = {
  entries,
};
