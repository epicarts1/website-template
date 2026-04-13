import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#ff2d2a',
          pink: '#fc40af',
          blue: '#a6bef4',
          dark: '#0A0A0A',
          muted: '#525252',
          faint: '#A3A3A3',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #ff2d2a 0%, #fc40af 50%, #a6bef4 100%)',
        'brand-gradient-h': 'linear-gradient(90deg, #ff2d2a 0%, #fc40af 50%, #a6bef4 100%)',
      },
    },
  },
  plugins: [],
}

export default config
