const colors = require('./src/components/ui/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        audiowide: ['Audiowide'],
      },
      fontSize: {
        h1: ['40px', { lineHeight: '48px', fontWeight: '900' }],
        h2: ['28px', { lineHeight: '34px', fontWeight: '700' }],
        h3: ['20px', { lineHeight: '24px', fontWeight: '600' }],
        bodyLg: ['18px', { lineHeight: '28px' }],
        body: ['16px', { lineHeight: '24px' }],
        caption: ['14px', { lineHeight: '20px' }],
      },
      colors,
    },
  },
  plugins: [],
};
