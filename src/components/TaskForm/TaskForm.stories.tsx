import '../../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TaskForm } from './TaskForm'

export default {
  title: 'Common/TaskForm',
  component: TaskForm,
  argTypes: {},
} as ComponentMeta<typeof TaskForm>

const Template: ComponentStory<typeof TaskForm> = args => (
  <TaskForm {...args} />
)

export const Empty = Template.bind({})
Empty.args = {}

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
