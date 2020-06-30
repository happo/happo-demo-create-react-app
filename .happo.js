const { RemoteBrowserTarget } = require('happo.io');
const craWebpackConfig = require('react-scripts/config/webpack.config');

module.exports = {
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  targets: {
    chrome: new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
  },

  customizeWebpackConfig: config => {
    // Use the built-in webpack config provided by create-react-app
    config.module = craWebpackConfig('development').module;
    return config;
  },
};
