import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TaskLabel } from './TaskLabel'

export default {
  title: 'Example/TaskLabel',
  component: TaskLabel,
  argTypes: {
    name: {
      type: 'string',
      defaultValue: 'Unnamed',
    },
    color: {
      type: 'string',
      defaultValue: '#add8e6',
    },
  },
} as ComponentMeta<typeof TaskLabel>

const Template: ComponentStory<typeof TaskLabel> = args => (
  <TaskLabel {...args} />
)

export const Default = Template.bind({})
