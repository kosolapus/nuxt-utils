import {fileURLToPath, URL} from "node:url";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const {
  mergeConfig
} = require('vite');
module.exports = {
  stories: ['../playground/**/*.mdx', '../playground/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions', '@storybook/addon-mdx-gfm'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@app': fileURLToPath(new URL('/playground/', import.meta.url)),
          '@module': fileURLToPath(new URL('/src/', import.meta.url)),
        },
      },
    });
  }
};
