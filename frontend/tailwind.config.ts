import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        hazard: {
          low: '#22c55e',
          moderate: '#eab308',
          high: '#f97316',
          critical: '#ef4444',
        },
      },
    },
  },
  plugins: [],
};

export default config;
