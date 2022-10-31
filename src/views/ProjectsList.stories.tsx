import '../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ProjectsList } from './ProjectsList'

const projectsList = [
  {
    id: 1,
    title: 'Project1',
    color: 'red',
    description: 'blabla',
    isArchived: false,
    amountOfTasks: 124,
  },
  {
    id: 2,
    title: 'Project2',
    color: 'blue',
    description: 'blabla',
    isArchived: false,
    amountOfTasks: 212,
  },
  {
    id: 3,
    title: 'Project3',
    color: 'grey',
    description: 'blabla',
    isArchived: false,
    amountOfTasks: 45,
  },
]

export default {
  title: 'Example/ProjectsList',
  component: ProjectsList,
  argTypes: {
    projects: {
      controll: 'array',
      defaultValue: projectsList,
    },
  },
} as ComponentMeta<typeof ProjectsList>

const Template: ComponentStory<typeof ProjectsList> = args => (
  <ProjectsList {...args} />
)

export const Default = Template.bind({})
