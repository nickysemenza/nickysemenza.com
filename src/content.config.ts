import { glob, file } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      // Transform string to Date object
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      // Project date range (for building posts that appear in timeline)
      startDate: z.coerce.date().optional(),
      endDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '*.yaml' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      startDate: z.coerce.date(),
      endDate: z.coerce.date().optional(),
      category: z.enum(['building', 'code', 'career', 'creative']),
      heroImage: image().optional(),
      emoji: z.string().optional(),
      githubUrl: z.string().url().optional(),
      externalUrl: z.string().url().optional(),
      blogPostSlug: z.string().optional(),
    }),
});

export const collections = { blog, projects };
