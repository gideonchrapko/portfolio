/**
 * Single source of truth for project tags (tech, skills, capabilities).
 * - Add or remove tags here to change what appears on the projects page filter.
 * - In project .md frontmatter use the slug: tags: [react, nextjs, editorial]
 * - Keep slugs lowercase, hyphenated (e.g. product-motion not product_motion).
 */
export type TagSlug = string;

export interface TagConfig {
  slug: TagSlug;
  label: string;
}

const tagsList = [
  { slug: '3d', label: '3D' },
  { slug: 'animation', label: 'Animation' },
  { slug: 'astro', label: 'Astro' },
  { slug: 'editorial', label: 'Editorial' },
  { slug: 'figma', label: 'Figma' },
  { slug: 'graphic-design', label: 'Graphic Design' },
  { slug: 'illustration', label: 'Illustration' },
  { slug: 'lottie', label: 'Lottie' },
  { slug: 'nextjs', label: 'Next.js' },
  { slug: 'product-motion', label: 'Product Motion' },
  { slug: 'react', label: 'React' },
  { slug: 'remix', label: 'Remix' },
  { slug: 'illustrator', label: 'Illustrator' },
  { slug: 'after-effects', label: 'After Effects' },
  { slug: 'typography', label: 'Typography' },
  { slug: 'typescript', label: 'TypeScript' },
  { slug: 'ux-motion', label: 'UX Motion' },
  { slug: 'vue', label: 'Vue' },
  { slug: 'visual-identity', label: 'Visual Identity' },
  { slug: 'sanity.io', label: 'Sanity.io' },
  { slug: 'shadcn', label: 'shadcn/ui' },
  { slug: 'shopify-hydrogen', label: 'Shopify Hydrogen' },
  { slug: 'supabase', label: 'Supabase' },
  { slug: 'e-commerce', label: 'E-commerce' },
] as const;

export type TagSlugType = (typeof tagsList)[number]['slug'];
export const tags: TagConfig[] = [...tagsList];
export const tagSlugs: TagSlugType[] = tagsList.map((t) => t.slug);
/** Use this to get a display label for a tag slug (e.g. in Experience, project filter summary). */
export const tagLabelsBySlug: Record<TagSlugType, string> = Object.fromEntries(
  tagsList.map((t) => [t.slug, t.label]),
) as Record<TagSlugType, string>;
