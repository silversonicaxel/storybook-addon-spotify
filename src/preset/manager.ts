import { addons, types } from '@storybook/addons'
import { ADDON_ID, ADDON_PANEL_ID, ADDON_PARAM_KEY } from '../constants'
import { SpotifyPanel } from '../views/SpotifyPanel'

addons.register(ADDON_ID, () => {
  addons.add(ADDON_PANEL_ID, {
    type: types.PANEL,
    paramKey: ADDON_PARAM_KEY,
    title: 'Spotify',
    match: () => true,
    render: SpotifyPanel
  })
})
