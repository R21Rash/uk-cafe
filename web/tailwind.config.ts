import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#102033',
        ocean: '#075985',
        leaf: '#047857',
        warning: '#B45309'
      },
      boxShadow: {
        soft: '0 14px 40px rgba(16, 32, 51, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
