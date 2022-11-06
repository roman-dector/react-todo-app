import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AddProjectPopUp } from './AddProjectPopUp'

export default {
  title: 'Main/SideBar/AddProjectPopUp',
  component: AddProjectPopUp,
  argTypes: {},
} as ComponentMeta<typeof AddProjectPopUp>

const Template: ComponentStory<typeof AddProjectPopUp> = args => (
  <AddProjectPopUp {...args} />
)

export const Default = Template.bind({})
