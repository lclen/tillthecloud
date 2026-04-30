/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        secondary: '#666666',
        muted: '#999999',
        light: '#F5F5F5',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.2em',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}
