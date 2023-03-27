import { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '@module/components/base/BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  render: (args) => ({
    components: { BaseButton }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
      <BaseButton>Кнопка</BaseButton>
   `,
  }),
  title: 'Atoms/BaseButton',
  parameters: {
    docs: {
      title: 'Кнопка',
      description: {
        component: 'Базовый компонент кнопки',
      },
      story: { inline: false }, // render the story in an iframe
      canvas: { sourceState: 'shown' }, // start with the source open
      source: { type: 'code' }, // forces the raw source code (rather than the rendered JSX).
    },
  },
}

export default meta

type Story = StoryObj<typeof BaseButton>

export const Default: Story = {}
