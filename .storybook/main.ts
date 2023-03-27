import {fileURLToPath, URL} from "node:url";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const {
  mergeConfig
} = require('vite');
module.exports = {
  stories: ['../playground/**/*.stories.@(js|jsx|ts|tsx)','../playground/**/*.doc.mdx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-docs'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: true
  },
  async viteFinal(config: any) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@app': fileURLToPath(new URL('../playground/', import.meta.url)),
          '@module': fileURLToPath(new URL('../src/', import.meta.url)),
          '#imports': fileURLToPath(new URL('../playground/.nuxt/imports.d.ts', import.meta.url)),
          '#build': fileURLToPath(new URL('../playground/.nuxt/', import.meta.url)),
          'vue-demi': fileURLToPath(new URL('../node_modules/nuxt/dist/app/compat/vue-demi', import.meta.url)),
          '#app': fileURLToPath(new URL('../node_modules/nuxt/dist/app', import.meta.url)),
        },
      },
    })
  }
};
