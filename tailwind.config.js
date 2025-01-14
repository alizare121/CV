/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      white: '#fff',
      lightGray: '#cecece',
      darkGray: '#181818',
      black: '#000',
      navy: '#394562',
      pink: '#ea4c89',
      lightBlue: '#f2f4f9',
      lightNavy: '#9ba2c6',
      blue: 'blue',
      lightPink: '#ffb6c1',
      yellow: '#EFAE02',
    },
  },
  plugins: [],
};
