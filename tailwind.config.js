/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        logo: ['var(--font-logo)', 'Fugaz One', 'cursive'],
      },
      colors: {
        // Separated dark green layers
        primary: '#062816',
        secondary: '#0d4226',
        accent: '#f5c518',
        cyan: '#3dcf7a',
        ink: '#f2fff6',
        muted: '#b6d9c4',
        yellow: '#f5c518',
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(61, 207, 122, 0.12)',
      },
    },
  },
  plugins: [],
};
