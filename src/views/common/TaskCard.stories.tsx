import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TaskCard } from './TaskCard'

export default {
  title: 'Example/TaskCard',
  component: TaskCard,
  argTypes: {
    title: {
      type: 'string',
      defaultValue: 'Untitled',
    },
    description: {
      type: 'string',
    },
    isCompleted: {
      type: 'boolean',
      defaultValue: false,
    },
    priority: {
      type: 'number',
      defaultValue: 1,
    },
    labels: {
      controll: 'array',
    },
  },
} as ComponentMeta<typeof TaskCard>

const Template: ComponentStory<typeof TaskCard> = args => (
  <TaskCard {...args} />
)

export const LightTheme = Template.bind({})
LightTheme.args = {
  labels: [],
}

export const DarkTheme = Template.bind({})
DarkTheme.args = {
  labels: [],
}
