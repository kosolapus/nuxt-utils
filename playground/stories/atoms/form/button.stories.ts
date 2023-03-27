import { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '@module/components/base/BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  render: (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { BaseButton }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
      <BaseButton v-bind="args" >
        <template v-if="${'slots' in args}">
            {{args.slots.default}}
        </template>
      </BaseButton>
   `,
  }),
  parameters: {
    docs: {
      tags: ['autodocs'],
      title: 'Кнопка',
      controls: { exclude: [] },
      description: {
        component: 'Базовый компонент кнопки',
      },
      story: { inline: true }, // render the story in an iframe
    },
  },
  title: 'Atoms/BaseButton (Базовая кнопка)',
}

export default meta

type Story = StoryObj<typeof BaseButton>
export const Default: Story = {}

export const Outlined: Story = {
  args: {
    outline: true,
  },
}

export const RedButton: Story = {
  args: {
    color: '#f00',
  },
}
