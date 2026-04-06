/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
        display: ['var(--font-dm-sans)', 'DM Sans', 'sans-serif'],
      },
      colors: {
        green: {
          50: '#E1F5EE',
          100: '#9FE1CB',
          400: '#1D9E75',
          500: '#17896A',
          600: '#0F6E56',
          800: '#085041',
          900: '#04342C',
        }
      }
    },
  },
  plugins: [],
}
