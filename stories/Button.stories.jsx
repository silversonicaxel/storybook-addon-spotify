import React from 'react'
import { Button } from './Button'

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    spotify: {
      url: 'https://open.spotify.com/playlist/4gV0IA40bGoAG1Rla7oZzQ?si=c9730ce8d8f349d3'
    }
  }
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
}

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
}

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
}
