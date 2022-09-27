import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProjectPage } from './ProjectPage'
import { LabelType } from '../../dal/apiDataTypes'

const defaultTasks = [
  {
    id: 13212,
    projectId: 1224,
    title: 'Make smth',
    description:
      'Some veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery long descriprion here',
    isCompleted: false,
    isArchived: false,
    priority: 1,
    labels: [
      { id: 1, name: 'ToDo', color: 'green' },
      { id: 2, name: 'Calendar', color: 'purple' },
      { id: 3, name: 'Waiting', color: '#add8e6' },
      { id: 4, name: 'ToDo', color: 'green' },
      { id: 5, name: 'Calendar', color: 'purple' },
      { id: 6, name: 'Waiting', color: '#add8e6' },
    ],
  },
  {
    id: 13212,
    projectId: 1224,
    title: 'Make smth',
    description:
      'Some veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery long descriprion here',
    isCompleted: false,
    isArchived: false,
    priority: 1,
    labels: [
      { id: 1, name: 'ToDo', color: 'green' },
      { id: 2, name: 'Calendar', color: 'purple' },
      { id: 3, name: 'Waiting', color: '#add8e6' },
      { id: 4, name: 'ToDo', color: 'green' },
      { id: 5, name: 'Calendar', color: 'purple' },
      { id: 6, name: 'Waiting', color: '#add8e6' },
    ],
  },
  {
    id: 13212,
    projectId: 1224,
    title: 'Make smth',
    description:
      'Some veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery veeeeeeeeeeeeeeery long descriprion here',
    isCompleted: false,
    isArchived: false,
    priority: 1,
    labels: [
      { id: 1, name: 'ToDo', color: 'green' },
      { id: 2, name: 'Calendar', color: 'purple' },
      { id: 3, name: 'Waiting', color: '#add8e6' },
      { id: 4, name: 'ToDo', color: 'green' },
      { id: 5, name: 'Calendar', color: 'purple' },
      { id: 6, name: 'Waiting', color: '#add8e6' },
    ],
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
