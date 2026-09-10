import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const mediaVideo = z.union([
	z.string(),
	z.object({
		mp4: z.string().optional(),
		webm: z.string().optional(),
		mux: z.string().optional(),
		controls: z.boolean().optional(),
		backgroundImage: z.string().optional(),
	}),
]);

const section = z.object({
	id: z.string().optional(),
	title: z.string(),
	description: z.string().optional(),
	link: z.string().optional(),
	images: z.array(z.string()).optional(),
	videos: z.array(mediaVideo).optional(),
	pdf: z.string().optional(),
	embed: z.string().optional(),
	lottie: z.union([z.string(), z.array(z.string())]).optional(),
});

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.optional(image()),
		}),
});

const projects = defineCollection({
	// Load Markdown and MDX files in the `src/content/projects/` directory.
	loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
	schema: () =>
		z.object({
			title: z.string(),
			description: z.string().optional(),
			date: z.coerce.date(),
			categories: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			tags: z.array(z.string()).default([]),
			roles: z.array(z.string()).default([]),
			tools: z.array(z.string()).default([]),
			url: z.string().optional(),
			image: z.string().optional(),
			overview: z.string().optional(),
			images: z.array(z.string()).default([]),
			videos: z.array(mediaVideo).default([]),
			pdfs: z.array(z.string()).default([]),
			showVideoControls: z.boolean().default(false),
			sections: z.array(section).default([]),
		}),
});

export const collections = { blog, projects };
