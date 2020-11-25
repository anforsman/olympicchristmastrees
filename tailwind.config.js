module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'home-hero': "url('/unloading-trees.jpg')",
       }),
      opacity: {
        '55': '0.8',
       }
    },
  },
  variants: {},
  plugins: [],
}
