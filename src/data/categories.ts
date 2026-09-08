export const CATEGORIES = {
	'brand-design': { label: 'Brand Design', color: 'acid' },
	'design-systems': { label: 'Design Systems', color: 'azure' },
	'web-development': { label: 'Web Development', color: 'gold' },
	'creative-engineering': { label: 'Creative Engineering', color: 'mint' },
	'visual-communications': { label: 'Visual Communications', color: 'hot-pink' },
	'motion-design': { label: 'Motion Design', color: 'fuchsia' },
} as const;

export type CategorySlug = keyof typeof CATEGORIES;

export const FALLBACK_CATEGORY: CategorySlug = 'brand-design';
