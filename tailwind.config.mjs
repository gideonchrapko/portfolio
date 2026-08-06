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
        sans: ['"PP Mori"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
        display: ['"PP Mori"', '"Fraunces"', 'Georgia', '"Times New Roman"', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', '"SF Mono"', 'Menlo', 'Consolas', '"Liberation Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
