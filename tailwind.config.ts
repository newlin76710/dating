import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blush: '#fff7fb',
        rose: '#ff5c8a',
        plum: '#5b2145',
        sand: '#f7efe8',
        gold: '#f5b971',
        teal: '#07C3BA',
        'dark-teal': '#049089',
        'line-green': '#2DC861',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
