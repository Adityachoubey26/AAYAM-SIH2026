import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aayam: {
          bg: '#06090d',
          dark: '#080d13',
          surface: '#0d141e',
          card: '#101924',
          cardHover: '#14202e',
          border: '#1b2838',
          borderLight: '#26394e',
          green: '#10b981',
          greenGlow: '#059669',
          greenAccent: '#34d399',
          orange: '#f97316',
          orangeGlow: '#ea580c',
          orangeAccent: '#fb923c',
          muted: '#8494a8',
          subtle: '#4b5b70',
        },
        hazard: {
          low: '#10b981',
          moderate: '#eab308',
          high: '#f97316',
          critical: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'green-glow': '0 0 35px -5px rgba(16, 185, 129, 0.25)',
        'orange-glow': '0 0 35px -5px rgba(249, 115, 22, 0.25)',
        'dual-glow': '0 0 50px -10px rgba(16, 185, 129, 0.15), 0 0 50px -10px rgba(249, 115, 22, 0.15)',
        'hud-card': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
      },
      keyframes: {
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(1.04)' },
        },
      },
      animation: {
        'radar-sweep': 'radarSweep 12s linear infinite',
        'spin-very-slow': 'radarSweep 60s linear infinite',
        'spin-reverse-slow': 'radarSweep 75s linear infinite reverse',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
