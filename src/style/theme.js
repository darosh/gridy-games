import { Theme } from '../../plugins/lib'

export function theme (game) {
  return Theme[game.theme].replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase() + '-theme'
}
