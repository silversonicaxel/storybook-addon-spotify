import React from 'react'

import { Header } from './Header'

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    spotify: {
      url: 'https://open.spotify.com/playlist/4gV0IA40bGoAG1Rla7oZzQ?si=c9730ce8d8f349d3'
    }
  }
}

const Template = (args) => <Header {...args} />

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  user: {},
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
