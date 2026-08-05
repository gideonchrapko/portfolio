/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  safelist: ['bg-header', 'bg-footer'],
  theme: {
    extend: {
      colors: {
        'light-green': '#F8FFE2',
        header: '#C1FF00',
        footer: '#FAFAFA',
      },
      fontFamily: {
        sans: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
