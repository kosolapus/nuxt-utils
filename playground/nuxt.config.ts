import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  modules: ['../src/module'],
  components: true,
  alias: {
    '@module': fileURLToPath(new URL('../src/', import.meta.url)),
    '@app': fileURLToPath(new URL('../playground/', import.meta.url)),
  },
  rns: {},
})
