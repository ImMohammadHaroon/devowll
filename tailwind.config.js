/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        dark: '#0F172A',
        muted: '#6B7280',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 18px 50px rgba(124, 58, 237, 0.18)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at top left, rgba(124,58,237,0.16), transparent 35%), radial-gradient(circle at top right, rgba(14,165,233,0.14), transparent 28%), linear-gradient(180deg, #f8fafc 0%, #ffffff 60%, #f8fafc 100%)',
        'gradient-conic': 'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};