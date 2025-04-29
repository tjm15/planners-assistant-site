/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#e6e6ef', // Light grey-lavender
        'text-body': '#545c6d',
        'text-heading': '#2a3a60', // Navy
        'accent': '#f5c315',      // Yellow
        'highlight': '#329c85',   // Teal
        // You can add shades if needed, e.g., accent-dark: '#eabf00'
      },
      fontFamily: {
        // Assuming you'll link 'Inter' in index.html like the original
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          // '2xl': '1536px', // You might not need this large
        },
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'), // Uncomment if you need form styling helpers
    // require('@tailwindcss/typography'), // Uncomment if you need prose styling helpers
  ],
}