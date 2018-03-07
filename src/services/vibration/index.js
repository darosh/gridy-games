let timer

export function kickVibration (time, delay) {
  if (window.navigator.vibrate) {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }

    if (delay) {
      timer = setTimeout(() => {
        window.navigator.vibrate(time)
      }, delay)
    } else {
      window.navigator.vibrate(time)
    }
  }
}
