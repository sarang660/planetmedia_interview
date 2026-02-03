/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7C3AED',
          dark: '#9333EA',
          light: '#A855F7',
        },
        secondary: {
          DEFAULT: '#1E3A8A',
        },
        accent: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
        },
      },
    },
  },
  plugins: [],
};
