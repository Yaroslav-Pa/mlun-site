/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgMainPhoto': "url('/replaceThisPhoto.jpg')",
        'alex': "url('/alex.jpg')"
      },
      colors: {
        secondColor: 'rgb(67 56 202)',
      }
    },
  },

  plugins: [],
}
