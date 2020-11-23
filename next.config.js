const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        optimizeImagesInDev: true,
        responsive: {
          adapter: require('responsive-loader/sharp'),
        },
      },
    ],
  ],
  {
    images: {
      domains: ['images.unsplash.com'],
    },
  }
);
