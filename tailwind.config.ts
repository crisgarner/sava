import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Design file: --warm-white (page bg), --cream (section bg)
        'brand-cream': '#faf9f6',
        'brand-ivory': '#fefdfb',
        // Design file: --gold (decorative only — fails WCAG as text)
        'brand-gold': '#c9a961',
        // Design file: emerald accent (interactive, prices, CTAs)
        'brand-accent': '#2d7a5f',
        // Design file: --forest-green (headings, brand)
        'brand-forest': '#1a3a2e',
        // Design file: --charcoal (body text)
        'brand-dark': '#2a2a2a',
        // Design file: --mid-gray (secondary text)
        'brand-muted': '#666666',
        // Design file: --light-gray (borders, dividers)
        'brand-light': '#e8e6e3',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
