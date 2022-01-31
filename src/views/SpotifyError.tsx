import React from 'react'

interface SpotifyErrorProps {
  error: string
}

export const SpotifyError = (props: SpotifyErrorProps) => {
  const { error } = props

  return (
    <>
      <h3>Wrong Spotify Configuration</h3>
      <p>{error}</p>
    </>
  )
}
