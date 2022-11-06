import '../../index.css'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Header } from './Header'

export default {
  title: 'Main/Header/Header',
  component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>

const Template: ComponentStory<typeof Header> = args => <Header />

export const Default = Template.bind({})
