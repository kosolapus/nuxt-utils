/** @type { import('@storybook/vue3').Preview } */
import { Preview } from '@storybook/vue3';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
    options: {
      storySort: {
        order: ['intro', 'Intro', '*','Atoms'],
      },
    },
  },
}

export default preview
