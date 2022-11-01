import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Search } from './Search'

export default {
  title: 'Example/Search',
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>

const Template: ComponentStory<typeof Search> = args => <Search />

export const Default = Template.bind({})
