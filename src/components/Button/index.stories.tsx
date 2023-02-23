import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './button'
import { ButtonProps } from './types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    size: {
      name: 'Size',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      name: 'Variant',
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
  },
} as ComponentMeta<typeof Button>

const SimpleTemplate: ComponentStory<typeof Button> = (args: ButtonProps) => {
  return (
    <Button variant="primary" {...args}>
      <span>Primary button</span>
    </Button>
  )
}

export const Default = SimpleTemplate.bind({})
