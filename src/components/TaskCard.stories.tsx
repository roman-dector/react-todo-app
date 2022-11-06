import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TaskCard } from './TaskCard'

export default {
  title: 'Common/TaskCard',
  component: TaskCard,
  argTypes: {
    title: {
      type: 'string',
      defaultValue: 'Untitled',
    },
    description: {
      type: 'string',
      defaultValue: '',
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
      defaultValue: [],
    },
  },
} as ComponentMeta<typeof TaskCard>

const Template: ComponentStory<typeof TaskCard> = args => (
  <TaskCard {...args} />
)

export const JustTitle = Template.bind({})

export const WithLongDescription = Template.bind({})
WithLongDescription.args = {
  description:
    'Some veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery long descriprion here',
}

export const WithLabels = Template.bind({})
WithLabels.args = {
  labels: [
    { id: 1, name: 'ToDo', color: 'green' },
    { id: 2, name: 'Calendar', color: 'purple' },
    { id: 3, name: 'Waiting', color: '#add8e6' },
    { id: 4, name: 'ToDo', color: 'green' },
    { id: 5, name: 'Calendar', color: 'purple' },
    { id: 6, name: 'Waiting', color: '#add8e6' },
  ],
}

export const FullFilled = Template.bind({})
FullFilled.args = {
  description:
    'Some veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery long descriprion here',
  labels: [
    { id: 1, name: 'ToDo', color: 'green' },
    { id: 2, name: 'Calendar', color: 'purple' },
    { id: 3, name: 'Waiting', color: '#add8e6' },
    { id: 4, name: 'ToDo', color: 'green' },
    { id: 5, name: 'Calendar', color: 'purple' },
    { id: 6, name: 'Waiting', color: '#add8e6' },
  ],
}
