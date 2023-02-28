module.exports = {
  purge: [
    'components/**/*.{html,twig,scss,css,js,ts}',
    'templates/**/*.{twig}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        xl: '1440px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
