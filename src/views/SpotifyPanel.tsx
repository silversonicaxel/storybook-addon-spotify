import React from 'react'
import { useParameter } from '@storybook/api'
import { ADDON_PARAM_KEY } from '../constants'
import { AddonPanel } from '@storybook/components'
import { AddonSpotifyParameters } from '../types'
import { parseUrl } from '../lib'
import { SpotifyError } from './SpotifyError'

interface SpotifyPanelProps {
  active: boolean
  key: string
}

export const SpotifyPanel = (props: SpotifyPanelProps) => {
  const parameters: AddonSpotifyParameters = useParameter(ADDON_PARAM_KEY, null)

  if (parameters?.url) {
    const { url } = parameters

    const parsedUrlData = parseUrl(url)

    if(parsedUrlData.error) {
      return <AddonPanel {...props}><SpotifyError error={parsedUrlData.error} /></AddonPanel>    
    }

    return (
      <AddonPanel {...props}>
        <iframe 
          src={parsedUrlData.url} 
          width="100%" 
          height="100%" 
          frameBorder="0" 
          allowtransparency="true"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
      </AddonPanel>
    )
  }

  const genericError = 'The configuration parameters are incorrect.'
  return <AddonPanel {...props}><SpotifyError error={genericError} /></AddonPanel>
}
