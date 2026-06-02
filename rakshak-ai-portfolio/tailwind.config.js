/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',   // headings / dark text
        secondary: '#2563EB', // brand blue
        accent: '#06B6D4',     // cyan accent
        surface: '#F8FAFC',    // card background
        ink: '#111827',        // body text
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px rgba(15, 23, 42, 0.06), 0 1px 2px rgba(15, 23, 42, 0.04)',
        'card-hover': '0 12px 28px rgba(15, 23, 42, 0.10), 0 4px 10px rgba(15, 23, 42, 0.06)',
      },
    },
  },
  plugins: [],
}
