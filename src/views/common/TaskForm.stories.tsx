import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TaskForm } from './TaskForm'

export default {
  title: 'Example/TaskForm',
  component: TaskForm,
  argTypes: {},
} as ComponentMeta<typeof TaskForm>

const Template: ComponentStory<typeof TaskForm> = args => (
  <TaskForm {...args} />
)

export const Empty = Template.bind({})
Empty.args = {}
