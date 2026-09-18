import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        roboto: ['var(--font-roboto)', 'Roboto', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
      },
      colors: {
        blush: '#fff7fb',
        rose: '#FF93A6',
        'rose-deep': '#E0607A',
        plum: '#049089',
        sand: '#f7efe8',
        gold: '#f5b971',
        teal: '#07C3BA',
        'dark-teal': '#049089',
        'line-green': '#2DC861',
        sage: '#D2E0DE',
      },
      fontSize: {
        'hero': ['clamp(2rem, 1.3rem + 3vw, 3.4rem)', { lineHeight: '1.1' }],
        'display': ['clamp(1.6rem, 1.2rem + 1.8vw, 2.6rem)', { lineHeight: '1.2' }],
        'section-title': ['clamp(1.4rem, 1.15rem + 1.1vw, 2rem)', { lineHeight: '1.3' }],
      },
      boxShadow: {
        soft: '0 18px 60px rgba(0, 0, 0, 0.10)',
        card: '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 14px 34px rgba(0, 0, 0, 0.14)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};

export default config;
