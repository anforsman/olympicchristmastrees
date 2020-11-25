module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
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
