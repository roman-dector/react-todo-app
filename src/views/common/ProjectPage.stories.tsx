import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProjectPage } from './ProjectPage'
import { LabelType } from '../../dal/apiDataTypes'

const defaultTasks = [
  {
    id: 13212,
    projectId: 1224,
    title: 'Make smth',
    description: '',
    isCompleted: false,
    isArchived: false,
    priority: 1,
    labels: [] as LabelType[],
  },
]

export default {
  title: 'Example/ProjectPage',
  component: ProjectPage,
  argTypes: {
    title: {
      type: 'string',
      defaultValue: 'Untitled',
    },
    tasks: {
      controll: 'array',
      defaultValue: [],
    },
  },
} as ComponentMeta<typeof ProjectPage>

const Template: ComponentStory<typeof ProjectPage> = args => (
  <ProjectPage {...args} />
)

export const WithoutTasks = Template.bind({})

export const WithTasks = Template.bind({})
WithTasks.args = {
  tasks: defaultTasks,
}
