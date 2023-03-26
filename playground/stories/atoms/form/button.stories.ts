import { Meta, StoryObj } from '@storybook/vue3'
import BaseButton from '@module/components/base/BaseButton.vue'

const meta: Meta<typeof BaseButton> = {
  component: BaseButton,
  render: (args) => ({
    components: { BaseButton }, // Notice that `MyComponent` is not imported here
    setup: () => ({ args }),
    template: `
     <BaseButton />
   `,
  }),
}

export default meta

type Story = StoryObj<typeof BaseButton>

export const Default: Story = {}
