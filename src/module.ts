import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addComponentsDir,
} from '@nuxt/kit'

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'rns-kit',
    configKey: 'rns',
  },
  // Default configuration options of the Nuxt module
  defaults: {},

  setup() {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`

    addComponentsDir({
      path: resolver.resolve('./components/'),
      pathPrefix: false,
      pattern: '**/*.vue',
      transpile: 'auto',
      // @ts-ignore
      global: global !== false,
    })

    addPlugin(resolver.resolve('./runtime/plugin'))
  },
})
