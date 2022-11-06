import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { MenuList } from './MenuList'

export default {
  title: 'Common/MenuList',
  component: MenuList,
  argTypes: {},
} as ComponentMeta<typeof MenuList>

const Template: ComponentStory<typeof MenuList> = args => <MenuList />

export const Default = Template.bind({})
