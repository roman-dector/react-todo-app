import '../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SideBar } from './SideBar'

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
  title: 'Example/SideBar',
  component: SideBar,
  argTypes: {
    width: {
      defaultValue: 500,
    },
    projects: {
      controll: 'array',
      defaultValue: projectsList,
    },
  },
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = args => (
  <SideBar {...args} />
)

export const Default = Template.bind({})
