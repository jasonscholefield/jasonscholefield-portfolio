import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: ['**/*.{md,mdx}', '!**/_*.{md,mdx}'], base: './src/content/work' }),
  schema: ({ image }) => z.object({
    client: z.string(),
    title: z.string(),
    summary: z.string(),
    coverImage: image().optional(),
    screenshots: z.array(image()).optional(),
    beforeAfters: z
      .array(
        z.object({
          before: image(),
          after: image(),
          beforeLabel: z.string().optional(),
          afterLabel: z.string().optional(),
        })
      )
      .optional(),
    category: z.string(),
    tags: z.array(z.string()),
    year: z.string(),
    role: z.string(),
    responsibilities: z.string().optional(),
    tools: z.array(z.string()).optional(),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!**/_*.md'], base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    coverImage: image().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, blog };
