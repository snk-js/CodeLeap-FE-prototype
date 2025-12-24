import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        baseBackground: 'rgb(var(--base-background-rgb))',
        primaryColor: 'rgb(var(--primary-color-rgb))',
        // white in light theme
        backgroundText: 'rgb(var(--background-text-rgb))',
        // black in light theme
        foregroundText: 'rgb(var(--background-text-rgb))',
      },
    },
  },
  plugins: [],
} satisfies Config;
