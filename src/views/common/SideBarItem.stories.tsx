import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SideBarItem } from './SideBarItem'

export default {
  title: 'Example/SideBarItem',
  component: SideBarItem,
  argTypes: {
    title: {
      controll: 'string',
      defaultValue: 'Project',
    },
    color: {
      controll: 'string',
      defaultValue: 'red',
    },
    editable: {
      controll: 'radio',
      defaultValue: 'true',
    },
    amountOfTasks: {
      defaultValue: 123,
    },
  },
} as ComponentMeta<typeof SideBarItem>

const Template: ComponentStory<typeof SideBarItem> = args => (
  <SideBarItem {...args} />
)

export const Default = Template.bind({})
