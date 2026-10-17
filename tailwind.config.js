/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060E27',
          900: '#0A1538',
          850: '#0E1D4B',
          800: '#102052',
          700: '#152968',
        },
        royal: {
          500: '#2A52D4',
          600: '#1E3FAE',
          700: '#162E85',
          800: '#0F1F5E',
        },
        gold: {
          300: '#F5C14B',
          400: '#F3B736',
          500: '#E8A317',
          600: '#C7880A',
        },
        ink: {
          DEFAULT: '#0B1220',
          muted: '#4B5563',
        },
        mist: {
          DEFAULT: '#F4F6FB',
          card: '#FFFFFF',
        },
        border: 'hsl(var(--border, 214 32% 91%))',
        background: 'hsl(var(--background, 0 0% 100%))',
        foreground: 'hsl(var(--foreground, 222 47% 11%))',
        primary: {
          DEFAULT: 'hsl(var(--primary, 221 83% 53%))',
          foreground: 'hsl(var(--primary-foreground, 210 40% 98%))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary, 210 40% 96%))',
          foreground: 'hsl(var(--secondary-foreground, 222 47% 11%))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted, 210 40% 96%))',
          foreground: 'hsl(var(--muted-foreground, 215 16% 47%))',
        },
        card: {
          DEFAULT: 'hsl(var(--card, 0 0% 100%))',
          foreground: 'hsl(var(--card-foreground, 222 47% 11%))',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'Montserrat', 'sans-serif'],
        accent: ['Cormorant Garamond', 'Playfair Display', 'serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(232, 163, 23, 0.35)',
        'gold-subtle': '0 0 15px -3px rgba(232, 163, 23, 0.2)',
        'royal-glow': '0 0 25px -5px rgba(30, 63, 174, 0.4)',
        'card-elevated': '0 10px 30px -10px rgba(6, 14, 39, 0.08)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
