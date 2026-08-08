import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    client: z.string(),
    title: z.string(),
    summary: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    year: z.string(),
    role: z.string(),
    tools: z.array(z.string()).optional(),
    stats: z.array(z.object({ label: z.string(), value: z.string() })).optional(),
    liveUrl: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { work };
