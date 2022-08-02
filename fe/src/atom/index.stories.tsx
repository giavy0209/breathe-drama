import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonAtom from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atom/Button',
  component: ButtonAtom,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ButtonAtom>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonAtom> = (args) => <ButtonAtom {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  type: 'danger',
}

export const Large = Template.bind({})
Large.args = {
  type: 'transparent',
}

export const Small = Template.bind({})
Small.args = {
  type: 'warning',
}
