import '../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SideBar } from './SideBar'

export default {
  title: 'Example/SideBar',
  component: SideBar,
  argTypes: {
    width: {
      defaultValue: 500,
    },
  },
} as ComponentMeta<typeof SideBar>

const Template: ComponentStory<typeof SideBar> = args => (
  <SideBar {...args} />
)

export const Default = Template.bind({})
