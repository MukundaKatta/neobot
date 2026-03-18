import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        neo: { 50: '#f3e5f5', 100: '#e1bee7', 200: '#ce93d8', 300: '#ba68c8', 400: '#ab47bc', 500: '#9c27b0', 600: '#8e24aa', 700: '#7b1fa2', 800: '#6a1b9a', 900: '#4a148c' },
      },
    },
  },
  plugins: [],
};
export default config;
