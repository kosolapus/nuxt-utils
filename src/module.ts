import { defineNuxtModule, addPlugin, createResolver, addComponent } from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'rns-kit',
    configKey: 'rns'
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  setup (options, nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addComponent({
      name: 'BaseButton', // name of the component to be used in vue templates
      filePath: resolver.resolve('./components/base/BaseButton.vue'),
      kebabName: 'base-button',
      pascalName: 'BaseButton'
    })

    addPlugin(resolver.resolve('./runtime/plugin'))


  }
})
