import type { TagSlugType } from './tags';

export type ExperienceEntry = {
  company: string;
  /** Company website URL – if set, company name becomes a link */
  url?: string;
  role: string;
  type: string; // "Full-time On-site", "Contract · Remote", etc.
  location?: string;
  current?: boolean; // true = show "Current" badge (e.g. Botpress)
  /** e.g. "May 2025" */
  start: string;
  /** e.g. "Present" or "Jan 2026" */
  end: string;
  /** e.g. "10 mos", "2 yrs" */
  duration: string;
  scope: string[];
  /** Tag slugs from src/data/tags.ts – labels are resolved from there. */
  capabilities: TagSlugType[];
};

export const experience: ExperienceEntry[] = [
  {
    company: 'Botpress',
    url: 'https://botpress.com',
    role: 'Graphic Designer',
    type: 'Permanent Full-time',
    location: 'Montreal, Quebec, Canada · On-site',
    start: '2025',
    end: '2026',
    duration: '1 yr',
    scope: [
      'Built creative infrastructure enabling marketing teams to self-serve content creation through custom design systems, AI-powered workflows, and automated publishing tools',
      'Developed internal Figma plugins and web applications that connected design assets to authenticated web platforms, turning Figma files into reusable, database-backed templates',
      'Collaborated across marketing, engineering, and product teams to build scalable systems that reduced repetitive design work and accelerated campaign production',
    ],
    capabilities: [
      'graphic-design',
      'typography',
      'visual-identity',
      'editorial',
      'illustration',
      'figma',
      'react',
      'nextjs',
    ],
  },
  {
    company: 'Coinbase',
    url: 'https://coinbase.com',
    role: 'UX Motion Designer',
    type: 'Contract',
    location: 'Remote',
    start: '2025',
    end: '2025',
    duration: '< 1 yr',
    scope: [
      'Developed high-visibility, full-screen takeover animations in collaboration with Project Leads, Designers, and Engineers',
      'Translated high-level creative direction into immersive in-app animations aligned with user experience and technical requirements',
      'Delivered optimized, production-ready Lottie animations for seamless engineering implementation and on-time launches',
    ],
    capabilities: ['animation', 'lottie', 'product-motion', 'ux-motion'],
  },
  {
    company: 'Gideon Agency',
    url: 'https://gideon-agency.vercel.app',
    role: 'Founder · Design / Development',
    type: 'Self-employed',
    location: 'Remote',
    start: '2021',
    end: 'Present',
    current: true,
    duration: '4 yrs',
    scope: [
      'Designed and built high-performance marketing websites and e-commerce experiences using Astro, Next.js, React, Shopify Hydrogen, and the Shopify Storefront API',
      'Architected headless CMS solutions with Sanity, Contentful, and modern web technologies, prioritizing performance, SEO, and scalable content workflows',
      'Led projects end-to-end—from strategy and design through development, deployment, and client delivery—serving as both designer and front-end engineer',
    ],
    capabilities: ['react', 'nextjs', 'astro', 'figma', 'remix', 'typescript', 'vue'],
  },
];
