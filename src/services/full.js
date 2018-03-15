import fscreen from 'fscreen'

function isFull () {
  return !!fscreen.fullscreenElement || document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen
}

export function full (value) {
  if (fscreen.fullscreenEnabled) {
    if (value && !isFull()) {
      try {
        fscreen.requestFullscreen(document.firstElementChild)
      } catch (ignore) {
      }
    } else if (!value && isFull()) {
      fscreen.exitFullscreen()
    }
  }
}
