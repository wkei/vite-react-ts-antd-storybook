const { mergeConfig } = require("vite")

module.exports = {
  framework: '@storybook/react',
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-essentials'],
  core: {
    builder: '@storybook/builder-vite',
    // we don't want to muck up the data when we're working on the builder
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return mergeConfig(config, {
      css: {
        preprocessorOptions: {
          less: {
            // https://ant.design/docs/react/customize-theme
            modifyVars: {
              'primary-color': '#1DA57A',
            },
            javascriptEnabled: true,
          }
        }
      }
    })
  },
}
