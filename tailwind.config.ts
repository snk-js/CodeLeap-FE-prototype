import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        baseBackground: 'rgb(var(--background-start-rgb))',
        baseBackgroundSecondary: 'rgb(var(--background-secondary-rgb))',
        baseText: 'rgb(var(--foreground-rgb))',
      },
    },
  },
  plugins: [],
} satisfies Config;
