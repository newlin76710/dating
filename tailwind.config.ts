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
        rose: '#FF93A6',
        plum: '#049089',
        sand: '#f7efe8',
        gold: '#f5b971',
        teal: '#07C3BA',
        'dark-teal': '#049089',
        'line-green': '#2DC861',
        sage: '#D2E0DE',
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
