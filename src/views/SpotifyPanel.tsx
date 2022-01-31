import React from 'react'
import { useParameter } from '@storybook/api'
import { ADDON_PARAM_KEY } from '../constants'
import { AddonPanel } from '@storybook/components'
import type { AddonParamSpotify } from '../types'

interface SpotifyPanelProps {
  active: boolean
  key: string
}

export const SpotifyPanel = (props: SpotifyPanelProps) => {
  const parameters: AddonParamSpotify = useParameter(ADDON_PARAM_KEY, null)

  if (parameters?.url) {
    const { url } = parameters

    return (
      <AddonPanel {...props}>
        <iframe 
          src={url} 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowtransparency="true"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </AddonPanel>
    )
  }

  return <AddonPanel {...props}>Wrong Spotify Configuration</AddonPanel>
}
