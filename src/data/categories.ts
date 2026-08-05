/**
 * Project categories: single source of truth for slugs, labels, and badge styling.
 * Use with CategoryBadge and anywhere you need category order/labels (nav, projects index).
 */

export const categorySlugs = ['engineering', 'motion', 'graphic-design'] as const;
export type CategorySlug = (typeof categorySlugs)[number];

export type CategoryBadgeColor =
  'amber' | 'emerald' | 'rose' | 'sky' | 'violet' | 'orange' | 'lime' | 'cyan' | 'fuchsia' | 'teal';

export interface CategoryConfig {
  slug: CategorySlug;
  label: string;
  /** Badge color key for CategoryBadge */
  badgeColor: CategoryBadgeColor;
}

export const categories: CategoryConfig[] = [
  { slug: 'engineering', label: 'engineering', badgeColor: 'sky' },
  { slug: 'motion', label: 'motion', badgeColor: 'violet' },
  { slug: 'graphic-design', label: 'design', badgeColor: 'amber' },
];

export const categoryLabels: Record<CategorySlug, string> = Object.fromEntries(
  categories.map((c) => [c.slug, c.label]),
) as Record<CategorySlug, string>;

export const categoryBySlug: Record<CategorySlug, CategoryConfig> = Object.fromEntries(
  categories.map((c) => [c.slug, c]),
) as Record<CategorySlug, CategoryConfig>;
