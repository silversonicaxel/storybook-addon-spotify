import { AddonSpotifyUrl } from './types'

export const parseUrl = (url: string): AddonSpotifyUrl => {
  if(!url.includes('spotify')) {
    return {
      url: url,
      error: 'The configuration parameters url is not a Spotify valid one.'
    }
  }

  if(!url.includes('embed')) {
    return {
      url: url.replace('open.spotify.com/', 'open.spotify.com/embed/')
    }
  }

  return {
    url: url
  }
}
