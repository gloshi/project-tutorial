const webpack = require('webpack');


module.exports = {
  stories: [
      '../../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
      '@storybook/addon-links',
      '@storybook/addon-essentials',
      '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  core: {
      builder: 'webpack5',
  },
  webpackFinal: async (config) => ({
    ...config,
    plugins: [
        ...config.plugins.filter(plugin => plugin.constructor.name !== 'IgnorePlugin'),
        new webpack.IgnorePlugin({
            resourceRegExp: /react-dom\/client$/,
            contextRegExp: /(app\/react|app\\react|@storybook\/react|@storybook\\react)/
        }),
    ],
}),
};
